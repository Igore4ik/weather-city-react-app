import React from "react";
import '../style/App.css';
import {getApiThunk} from "../redux/thunk";
import {useDispatch, useSelector} from "react-redux";
import { setCityAC, setWeatherAC} from "../redux/actions";
import Search from "./Search";
import Weather from "./Weather";

function App() {
    const dispatch = useDispatch();
    const {city,weather} = useSelector(state => state);
    const search = (e) => {
        e.preventDefault();
       const promise = getApiThunk(city);
       Promise.all([promise])
           .then(value => {
               if(value[0].cod===200){
                   const {name,main,weather,wind} = value[0];
                   dispatch(setWeatherAC({name, main, weather, wind}))
               }
           })
         dispatch(setCityAC(""));
    }
    return (
        <div className="App">
            <div className="header">
                <h1>WEATHER APP</h1>
            </div>

            <Search search={search} city={city} />
            {weather &&
                <Weather weather={weather}/>}
        </div>
    );
}

export default App;
