var React = require('react');

var Controls = React.createClass(
{
	//............

	//............
	propTypes: { 
		countdownStatus: React.PropTypes.string.isRequired,
		onStatusChange: React.PropTypes.func.isRequired
	},
	//............
	onStatusChange: function(newStatus)
	{
		return () => {
			this.props.onStatusChange(newStatus);
		}
	},	
	//............
	render: function()
	{
		var {countdownStatus} = this.props;

		var renderStartStopButton = () => {
			if (countdownStatus === 'started')
			{
				return (<div>
						<button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
						<button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
					</div>)
			
			} else if (countdownStatus === 'paused') {
				
				return (<div>
							<button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
							<button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
						</div>)
			
			//========================= NR
			//tIMER clear »»» 
			} else if (countdownStatus === 'stopped') {	
				return (<div>
						<button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
						<button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
					</div>)
			}	
		}

		return (<div className="controls">
					{renderStartStopButton()}
					
				</div>)
	}
});

module.exports = Controls;