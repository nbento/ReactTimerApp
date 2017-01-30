var React = require('react');

var CountdownForm = React.createClass({

	//..........
	onSubmit: function(e)
	{
		e.preventDefault();
		var strSeconds = this.refs.seconds.value;
		//..........
		console.log('CountdownForm  input total', $('input').length);
		//..........
		//[0-9]* »»» MULTIPLE CHARACTERS ENTRE 0 E 9
		//^[0-9] »»» MUST START COM UM CHARACTER ENTRE 0 E 9 
		//[0-9]$ »»» MUST END COM UM CHARACTER ENTRE 0 E 9 
		if( strSeconds.match(/^[0-9]*$/) )
		{
			this.refs.seconds.value = '';
			this.props.onSetCountdown(parseInt(strSeconds, 10));
		}
	},
	//..........	
	render: function()
	{
		return (<div>
					<form ref="form" onSubmit={this.onSubmit} className="countdown-form">
						<input type="text" ref="seconds" placeholder="Enter time in seconds" />
						<button className="button expanded">Start</button>
					</form>	
			</div>)
	}
});

module.exports = CountdownForm;