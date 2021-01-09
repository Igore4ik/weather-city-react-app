import React from "react";

const Weather = ({weather}) => {
    return (
        <div>
            {!weather ?
                <div>...Loading</div>
                : (
                    <div>


                        {(typeof weather.main != 'undefined') ? <>
                                <table className="table ">
                                    <thead>
                                    <tr>
                                        <th scope="col">Населенный пункт</th>
                                        <th scope="col">Скорость ветра</th>
                                        <th scope="col">Облачность</th>
                                        <th scope="col">Температура воздуха</th>
                                        <th scope="col">Давление</th>
                                        <th scope="col">Влажность</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{weather.name}</td>
                                        <td>{weather.wind.speed} м/с</td>
                                        <td>
                                            {weather.weather[0].description}
                                            <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt=""/>
                                        </td>
                                        <td>{weather.main.temp } &#176;C</td>
                                        <td>{weather.main.pressure} мм.рт.ст.</td>
                                        <td>{weather.main.humidity} %</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </>
                            : <div></div>
                        }

                    </div>
                )
            }
        </div>
    )

}

export default Weather;