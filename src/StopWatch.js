import './StopWatch.css';
import React, {useState, useEffect} from 'react';
import useTimer from 'easytimer-react-hook';

export function StopWatch(props) {
    /* The hook returns an EasyTimer instance and a flag to see if the target has been achieved */
    // https://github.com/AlexImre/easytimer-react-hook
    const [timer, isTargetAchieved] = useTimer({
        /* Hook configuration */
    });

    const [display, setDisplay] = useState("Start");
    const handleClickStartAndPause = () => {
        !timer.isRunning()? timer.start({}) : timer.pause({});
        !timer.isRunning()? setDisplay("Resume") : setDisplay("Pause");
        }

    const handleClickAdd = () => {
        addToTimeBank();
        timer.reset({});
        timer.stop({});
        setDisplay("Start");
    }

    const handleClickReset = () => {
        timer.reset({});
        timer.stop({});
        setDisplay("Start");
    }

    const [timeBank, setTimeBank] = useState(0);
    const addToTimeBank = () => {
        const timeToAdd = timer.getTimeValues();
        const hoursElapsed = timeToAdd.hours;
        const minsElapsed = timeToAdd.minutes;
        const secondsElapsed = timeToAdd.seconds;
        const timeElapsedInSeconds = (hoursElapsed * 60 * 60) + (minsElapsed * 60) + (secondsElapsed);
        const timeElapsedInMilliSeconds = timeElapsedInSeconds * 1000;
        setTimeBank((prev) => prev + timeElapsedInMilliSeconds);
    };    

    return (
        <div>
            {timer.getTimeValues().toString()}
            <br></br>
            <button onClick={handleClickStartAndPause}>
                {display}
            </button>
            <button onClick={handleClickAdd}>
                Add
            </button>
            <button onClick={handleClickReset}>
                Reset
            </button>
            <br></br>
            <br></br>
            <div>
                Time Bank: {new Date(timeBank).toISOString().slice(11, 19)}
            </div>
        </div>
    )
};