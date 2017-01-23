var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Controls = require('Controls');


describe('Controls', () => {

	/*it('Controls should exist!*************', () => {
		expect(Controls).toExist();

	});
	*/
});

describe('render', () => {	
	it('it should render BUTTON Pause*************************', () => {
		//var spy = expect.createSpy();
		var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);

		var $el = $(ReactDOM.findDOMNode(controls));

		//........... TESTE À PARTE, FUNCIONA
			//var element = $el.find('button').attr('class', 'primary');
			//expect(element).toExist();
		
		//........... SEARCH BUTTON COM TEXT 'Pause'
			var $pauseButton = $el.find('button:contains(Pause)');
			expect($pauseButton.length).toBe(1);
	});

	//........................
	it('it should render BUTTON  start +++++++++++++++', () => {
		//var spy = expect.createSpy();
		var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);

		var $el = $(ReactDOM.findDOMNode(controls));

		//........... TESTE À PARTE, FUNCIONA
			//var element = $el.find('button').attr('class', 'primary');
			//expect(element).toExist();
		
		//........... SEARCH BUTTON COM TEXT 'Pause'
			var $startButton = $el.find('button:contains(Start)');
			expect($startButton.length).toBe(1);
	});
});	
