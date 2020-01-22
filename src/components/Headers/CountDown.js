
import React from 'react';
import './CountDown.css';


const pad = (num) => {
    return num < 10 ? '0' + num.toString() : num.toString();
}

class CountDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            happeingNow: false,
            timeLeft: '',
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

        this.setState({ timeLeft: time })
        if (time < 1 && time > -234000) {
            this.setState({ happeningNow: true })
        }

        this.setState({ days, hours, minutes, seconds })
    }
    render() {

        console.log(this.state.timeLeft, 'is the time left')
        let toShow = (
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

        if (this.state.timeLeft < 1 && this.state.timeLeft > -234000000) {
            toShow = (
                < div className="clock" >
                    <h3 style={{ margin: 'auto', lineHeight: '105px' }}>Happing Now!!</h3>
                </div>
            )
        }
        if (this.state.timeLeft < -234000000) {
            toShow = (
                < div className="clock" >
                    <h3 style={{ margin: 'auto', lineHeight: '105px' }}>Successfully Completed!!</h3>
                </div>
            )
        }

        return toShow
    }
}



export default CountDown;