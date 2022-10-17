import { useState, useEffect } from 'react';
import LocalWeather from './LocalWeather';
export default function Position() {

    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                setLatitude(position.coords.latitude)
                setLongitude(position.coords.longitude)
                setIsLoading(false)
            }, (error) => {
                alert(error)
            })
        }
        else {
            alert("Your browser does not support geolocation")
        }
    }, [])

    if (isLoading) {
        return <h3>Loading your position</h3>
    }
    else {
        return (
        <div>
            <h3>Your position is</h3>
            <p>{latitude} , {longitude}</p>
            <LocalWeather lat={latitude} lng={longitude} ></LocalWeather>
        </div>
    )};

}