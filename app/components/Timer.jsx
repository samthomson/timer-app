var React = require('react')
var Clock = require('Clock')
var CountdownForm = require('CountdownForm')
var Controls = require('Controls')

var Timer = React.createClass({
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus)
      {
        case 'started':
          this.handleStart()
          break;
        case 'stopped':
          this.setState({
            count: 0
          });
          // don't break, run through paused too
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount: function () {
    clearInterval(this.timer)
  },
  getInitialState: function () {
    return { count: 0, timerStatus: 'stopped' }
  },
  handleStatusChange: function (newStatus) {
    this.setState({
      timerStatus: newStatus
    })
  },
  render: function () {
    var { count, timerStatus } = this.state

    return (
      <div>
          <h1 className="page-title">Timer app</h1>
          <Clock totalSeconds={count} />
          <Controls countdownSstatus={timerStatus} onStatusChange={this.handleStatusChange} />
      </div>
    )
  },
  handleStart: function() {
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000);
  }
})

module.exports = Timer;
