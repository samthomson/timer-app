var React = require('react')

var Controls = React.createClass({
    onStatusChange: function(newStatus) {
        return () => {
            this.props.onStatusChange(newStatus)
        }
    },
    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.string.isRequired
    },
    render: function() {
        var { countdownStatus } = this.props

        var renderStartStopButton = () => {

            if (countdownStatus === 'started') {
                return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
            } else {
                return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
            }
        }

        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
            </div>
        )
    }
})

module.exports = Controls