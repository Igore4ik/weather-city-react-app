import React from "react";

const Weather = ({weather}) => {

    return (
        <div>
            {!weather ?
                <div>...Loading</div>
                : (
                    <div>
                        <div>City: {weather.name}</div>

                        {(typeof weather.main != 'undefined') ? <>
                                <div className='temp'>
                                   Temperature:  {Math.round(weather.main.temp)}°c
                                </div>
                                <div>Speed wind: {weather.wind.speed} м/с</div>
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