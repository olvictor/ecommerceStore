import React, { useState } from 'react'

const CountDown = (date) => {
    const [mountday,setMountDay] = useState('')
    const [mounthour,setMountHour] = useState('')
    const [mountmin,setMountMin] = useState('')
    const [mountsec, setMountSec] = useState('')


    const countDown = () =>{
        const countDate = new Date(date).getTime();
        const now = new Date().getTime();
        const interval = countDate - now;

        const second = 1000;
        const min = second*60;
        const hour = min*60;
        const day = hour*24;

        const dayNumber = Math.floor(interval/day);
        const hourNumber = Math.floor((interval % day) / hour)
        const minNumber = Math.floor((interval % hour) / min)
        const secNumber = Math.floor((interval % min) / second)

        setMountDay(dayNumber)
        setMountHour(hourNumber)
        setMountMin(minNumber)
        setMountSec(secNumber)
    }

    setInterval(countDown,1000)
  return [
    mountday,
    mounthour,
    mountmin,
    mountsec
  ]
}

export default CountDown