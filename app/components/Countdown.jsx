var React = require('React');
var Clock = require('Clock');
/*
var Countdown = () => {
		return (<div>
					<h1>Countdown Title</h1>			
				</div>)
				
	}
*/
var Countdown = React.createClass({
	render: function()
	{
		return (<div>
					<h1>Countdown com Clock Component!!!</h1>
					<Clock totalSeconds={129} />
			</div>);
	}
});

module.exports = Countdown;