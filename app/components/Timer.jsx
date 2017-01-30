var React = require('React');
var Clock = require('Clock');
var Controls = require('Controls');

//................
var Timer = React.createClass({
	getInitialState: function() 
	{
		return ({	count: 0,
					countdownStatus: 'stopped' //'paused'  	//'started'  'stopped'
		});
	},
	//............ check changes in props or state
	componentDidUpdate: function (prevProps, prevState)
	{
		//console.log("componentDidUpdate   prevState.countdownStatus:::" + prevState.countdownStatus);
		//console.log("componentDidUpdate   this.state.countdownStatus:::" + this.state.countdownStatus);

		if(this.state.countdownStatus !== prevState.countdownStatus)
		{
			switch (this.state.countdownStatus)
			{
				case 'started':
					this.handleStart();
					break;
				//O PROBLEMA É QUE AO PARAR E ACTUALIZAR O STATE,	
				//VAI FAZER COM QUE NO CONTROLS, OS BTN'S PAUSE/START DESAPARECAM,
				//PORQUE NO COUNTDOWN, VOLTAVA PARA O COUNTDOWNFORM,
				//QUE NÃO EXISTE AQUI	
				case 'stopped':  					
					//this.stopTimer();
					/*countdownStatus: 'paused' 	//AQUI (TIMER) É PRECISO ALTERAR PARA 'paused'*/
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
	//............'fired right BEFORE the component get's removed from the DOM' 
	componentWillUnmount: function()
	{
		//console.log("componentWillUnmount!");
		clearInterval(this.timer);				// == ao que está em switch case 'stopped'
		this.timer = undefined;
	},
	//...............
	handleStart: function()
	{
		this.timer = setInterval( () => {
		
			var valor = this.state.count + 1;
			this.setState({count: valor});

		}, 1000);	
	},
	//...............
	handleStatusChange: function(valor)
	{
		console.log("Timer  handleStatusChange!!!");
		this.setState({ countdownStatus: valor });
	},
	//...............
	render: function()
	{
		var {count, countdownStatus} = this.state;
		//.............
		return (<div>
					<h1 className="page-title">Timer</h1>
					<Clock totalSeconds={count} />
					<Controls 	countdownStatus={countdownStatus}
								onStatusChange={this.handleStatusChange} />
			</div>);
	}
});

//................
module.exports = Timer;