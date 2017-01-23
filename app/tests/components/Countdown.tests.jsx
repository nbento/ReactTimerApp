var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');
var ReactDOM = require('react-dom');

var Countdown = require('Countdown');

describe('Countdown', () => {

	/*it('Countdown should exist!', () => {
		expect(Countdown).toExist();

	});*/
		
	/*it('should not call onSetCountdown if invalid seconds entered', () => {
		var spy = expect.createSpy();
		var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
		var $el = $(ReactDOM.findDOMNode(countdownForm));

		countdownForm.refs.seconds.value = '109b';
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled();

	});
	*/
});

describe('handleSetCountdown', () => {
/*
	it('should set state to started and countdown', (done) => {
		
		var countdown = TestUtils.renderIntoDocument(<Countdown/>);
		countdown.handleSetCountdown(10);

		expect(countdown.state.count).toBe(10);
		expect(countdown.state.countdownStatus).toBe('started');

		setTimeout( () => {
			expect(countdown.state.count).toBe(9);
			done();
		}, 1001)
	});
*/	
	//Lec. 75
/*	it('should set state to 0', (done) => {
		
		var countdown = TestUtils.renderIntoDocument(<Countdown/>);
		countdown.handleSetCountdown(1);

		expect(countdown.state.count).toBe(1);
		expect(countdown.state.countdownStatus).toBe('started');

		setTimeout( () => {
			expect(countdown.state.count).toBe(0);
			done();
		}, 3001)
	});
*/	
});