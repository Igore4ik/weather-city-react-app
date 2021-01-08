const api = {
    key: "ec557bc234c13a13f926af8b9a1e3384",
    base: "http://api.openweathermap.org/data/2.5/"
}
export const getApiThunk = (city) => {
   return fetch(`${api.base}weather?q=${city}&appid=${api.key}&units=metric`)
        .then(value => value.json())
        .then(response => {
            return response;
        })

}
