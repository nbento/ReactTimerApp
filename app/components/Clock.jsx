var React = require('react');

var Clock = React.createClass({
	//...........
	getDefaultProps: function()
	{
		return ({totalSeconds: 0});
	},
	//...........
	propTypes: function()
	{
		return ({totalSeconds: React.PropTypes.number});
	},
	//........... 
	formatSeconds: function(totalSeconds)
	{
		var seconds = totalSeconds % 60;
		var minutes = Math.floor(totalSeconds / 60);
		if (seconds < 10)
		{
			seconds = '0' + seconds;
		}
		if (minutes < 10)
		{
			minutes = '0' + minutes;
		}

		return minutes + ':' + seconds;
	},
	//............'fired right After the component get's changes in props or state
	componentDidUpdate: function(nextProps, nextState)
	{
		//console.log("CLOCK componentDidUpdate  totalSeconds:::" + this.props.totalSeconds);
		//console.log("CLOCK componentDidUpdate  ==================");
	},
	//............'fired right After the component get's changes in props or state
	componentWillReceiveProps: function(newProps)
	{
		//console.log("CLOCK componentWillReceiveProps  this.totalSeconds:::" + this.props.totalSeconds);
		//console.log("CLOCK componentWillReceiveProps  newProps.totalSeconds:::" + newProps.totalSeconds);
	},
	//...........
	render: function()
	{
		var {totalSeconds} = this.props;

		return (<div className="clock">
					
					<span className="clock-text">{this.formatSeconds(totalSeconds)}</span>
				</div>);
	}
});

module.exports = Clock;