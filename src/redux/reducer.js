const initialState = {
    city: "",
    weather: []
}

export const reducer = (state=initialState,action) => {
    switch (action.type){
        case "SET_CITY":
            return{
               ...state,
               city: action.city
            }
        case "SET_WEATHER":
            return{
                ...state,
                weather: action.obj
            }
        default:
            return state;
    }
}