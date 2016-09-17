$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homePage.js');
var About = require('./components/about/aboutPage.js');
var Header = require('./components/common/header')
var ReactDOM = require('react-dom');

var App = React.createClass({
	render: function() {
		var Child;

		switch(this.props.route) {
			case 'about': Child = About; break;
			default: Child = Home;
		}

		return(
			<div>
				<Header/>
				<Child/>
			</div>
		);
	}
});

function render() {
	var route = window.location.hash.substr(1);
	ReactDOM.render(<App route={route}/>, document.getElementById('app'));
}

window.addEventListener('hashchange', render);
render();