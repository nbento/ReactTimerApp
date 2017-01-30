var React = require('React');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');
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
					countdownStatus: 'stopped'  //'started'  'stopped'  'paused'
				});
	},
	//............check changes in props or state
	componentDidUpdate: function (prevProps, prevState)
	{
		//console.log("componentDidUpdate !!!");
		//console.log("componentDidUpdate   prevState.countdownStatus:::" + prevState.countdownStatus);
		//console.log("componentDidUpdate   this.state.countdownStatus:::" + this.state.countdownStatus);

		if(this.state.countdownStatus !== prevState.countdownStatus)
		{
			switch (this.state.countdownStatus)
			{
				case 'started':
					this.startTimer();
					break;

				case 'stopped': 				
					//this.stopTimer();
					this.setState({	count: 0 });
					//break;	 				//IMPORTANTE:  SEM 'break' PARA PASSAR AO NÍVEL SEGUINTE

				case 'paused':
					//this.stopTimer();
					clearInterval(this.timer);
					this.timer = undefined;
					break;			
			}
		}	
	},
	//............'fired right After the component get's changes in props or state
	componentWillUpdate: function(nextProps, nextState)
	{
		//console.log("componentWillUpdate!");
	},
	//............'fired right BEFORE the component get's inserted in the DOM' 
	componentWillMount: function()
	{
		//console.log("componentWillMount!");
	},
	//............'fired right AFTER the component get's inserted in the DOM' 
	componentDidMount: function()
	{
		//console.log("componentDidMount!");
	},
	//............'fired right BEFORE the component get's removed from the DOM' 
	componentWillUnmount: function()
	{
		//console.log("componentWillUnmount!");
		clearInterval(this.timer);				// == ao que está em switch case 'stopped'
		this.timer = undefined;
	},
	//............
	startTimer: function(seconds)
	{
		//console.log("startTimer!!!");
		//...........
		this.timer = setInterval( () => {
						var newCount = this.state.count - 1;
						this.setState({	count: newCount >= 0 ? newCount: 0 });	

						if( newCount === 0)
						{
							this.setState({	countdownStatus: 'stopped' });
						}					
			}, 1000
		);
	},
	//............
	/*stopTimer: function()
	{
		//console.log("startTimer!!!");
		//...........
		clearInterval(this.timer);
		//this.setState({	count: valorSegundos });	
	},*/
	//............Handle changes from CountdownForm e altera: countdownStatus  | count
	handleSetCountdown: function(seconds)
	{
		console.log("handleSetCountdown  seconds:::" + seconds);
		this.setState({	count: seconds,
						countdownStatus: 'started'     //'started'  'stopped'  'paused'
		});
		
		//........NR Testes, para saber como funciona sem o componentDidUpdate
		//........ desta forma parece mais vantajoso, porque o componentDidUpdate,
		//........ é activado sempre que o state muda, e aqui, a alteração apenas
		//........ acontece quando o utilizador insere um novo tempo
			//this.startTimer();
	},
	//............Handle changes from Controls
	handleStatusChange: function(valor)
	{
		//console.log("handleSetCountdown  seconds:::" + seconds);
		this.setState({ countdownStatus: valor });    //'started'  'stopped'  'paused'
	},
	//............	
	render: function()
	{
		var {count, countdownStatus} = this.state;

		var renderControlArea = () => {
			if (countdownStatus !== 'stopped')
			{
				return (<Controls 
							onStatusChange={this.handleStatusChange}
							countdownStatus={countdownStatus}	
						/>)	
			
			// ===  'stopped'	
			} else {
				return (<CountdownForm onSetCountdown={this.handleSetCountdown}/>)
			}	
			/* NR TESTES
				if (countdownStatus === 'started' || countdownStatus === 'paused')
				{
					return (<Controls 
								onStatusChange={this.handleSetCountdown}
								countdownStatus={countdownStatus}
								count={count}
							/>)
				
				} else if ( countdownStatus === 'stopped') {
					
					return (<CountdownForm onSetCountdown={this.handleSetCountdown}/>)
				}
			*/	

		}	

		return (<div>
					<h1 className="page-title">Title Countdown</h1>
					<Clock totalSeconds={count} />
					{renderControlArea()}
					
			</div>);
	}
});

module.exports = Countdown;