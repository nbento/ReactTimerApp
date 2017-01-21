var React = require('React');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
/*
var Countdown = () => {
		return (<div>
					<h1>Countdown Title</h1>			
				</div>)
				
	}
*/
var Countdown = React.createClass({
	//............
	getInitialState: function () 
	{
		return ({	count: 0, 
					countdownStatus: 'stopped'  //'stopped', 'started'
				});
	},
	//............check changes in props or state
	componentDidUpdate: function (prevProps, prevState)
	{
		//console.log("componentDidUpdate !!!");
		if(this.state.countdownStatus !== prevState.countdownStatus)
		{
			switch (this.state.countdownStatus)
			{
				case 'started':
					this.startTimer();
					break;
			}
		}	
	},
	//............
	startTimer: function(seconds)
	{
		//console.log("startTimer!!!");
		//...........
		this.timer = setInterval( () => {
						var newCount = this.state.count - 1;
						this.setState({	count: newCount >= 0 ? newCount: 0 });						
			}, 1000
		);
	},
	//............Handle changes from CountdownForm
	handleSetCountdown: function(seconds)
	{
		this.setState({	count: seconds,
						countdownStatus: 'started'
		});
		
		//........NR Testes, para saber como funciona sem o componentDidUpdate
		//........ desta forma parece mais vantajoso, porque o componentDidUpdate,
		//........ é activado sempre que o state muda, e aqui, a alteração apenas
		//........ acontece quando o utilizador insere um novo tempo
			//this.startTimer();
	},
	//............	
	render: function()
	{
		var {count} = this.state;

		return (<div>
					<h1>Countdown!!!</h1>
					<Clock totalSeconds={count} />
					<CountdownForm onSetCountdown={this.handleSetCountdown}/>
			</div>);
	}
});

module.exports = Countdown;