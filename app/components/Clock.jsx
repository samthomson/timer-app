var React = require('react')

var Clock = React.createClass({

    formatSeconds: (totalSeconds) => {
        let seconds = totalSeconds % 60
        let minutes = Math.floor(totalSeconds / 60)

        if (seconds < 10)   seconds = `0${seconds}`
        if (minutes < 10)   minutes = `0${minutes}`

        return `${minutes}:${seconds}`
    },
    getDefaultProps: function () {
        totalSeconds: 0
    },
    propTypes: {
        totalSeconds: React.PropTypes.number
    },
    render: function () {
        const { totalSeconds } = this.props

        return (
        <div className="clock">
            <span className="clock-text">
                {this.formatSeconds(totalSeconds)}
            </span>
        </div>
        )
    }
})

module.exports = Clock;
