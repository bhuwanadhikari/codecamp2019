
import React from 'react';
import './CountDown.css';


const pad = (num) => {
    return num < 10 ? '0' + num.toString() : num.toString();
}

class CountDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
    }
    componentDidMount() {
        this.timerId = setInterval(() => this.getTimeUntil(this.props.deadline), 1000)
    }

    getTimeUntil(deadline) {
        const time = Date.parse(new Date("2020-01-23T04:15:00.000Z")) - Date.parse(new Date())
        const seconds = pad(Math.floor(time / 1000 % 60))
        const minutes = pad(Math.floor(time / 1000 / 60 % 60))
        const hours = pad(Math.floor(time / (1000 * 60 * 60) % 24))
        const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)))

        this.setState({ days, hours, minutes, seconds })
    }
    render() {
        return (
            <div className="clock">

                <div className="clock__display">
                    <div className="clock__text clock__text--days">
                        <span className="clock__amount">{this.state.days}</span>
                        <span className="clock__unit">DAYS</span>
                    </div>
                </div>

                <div className="clock__display">
                    <div className="clock__text clock__text--hours">
                        <span className="clock__amount">{this.state.hours}</span>
                        <span className="clock__unit">HOURS</span>
                    </div>
                </div>
                <div className="clock__display">
                    <div className="clock__text clock__text--minutes">
                        <span className="clock__amount">{this.state.minutes}</span>
                        <span className="clock__unit">MINUTES</span>
                    </div>
                </div>
                <div className="clock__display">
                    <div className="clock__text clock__text--seconds">
                        <span className="clock__amount">{this.state.seconds}</span>
                        <span className="clock__unit">SECONDS</span>
                    </div>
                </div>
            </div>
        )
    }
}



export default CountDown;