import React from "react";
import {setCityAC} from "../redux/actions";
import {useDispatch} from "react-redux";

const Search = (props) => {
    const dispatch = useDispatch();
    const inputChange = (e) => {
        dispatch(setCityAC(e.target.value))
    }
    return(
        <form onSubmit={props.search} className="form">
            <input onChange={(e) => inputChange(e)} value={props.city} type="text"/>
            <button>SEND</button>
        </form>
    )
}

export default Search;