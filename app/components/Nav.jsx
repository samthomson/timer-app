var React = require('react')
var {IndexLink, Link} = require('react-router')

var Nav = React.createClass({
    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">Timer App</li>
                        <li><IndexLink to="/" activeClassName="active-link">Timer</IndexLink></li>
                        <li><Link to="/" activeClassName="active-link">Countdown</Link></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">
                            <span>Made by </span><a href="https://github.com/samthomson" target="_blank">sam thomson</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
})

module.exports = Nav
