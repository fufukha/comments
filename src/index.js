import React from 'react';
import { render } from 'react-dom';
import App from './components/app/app';

function component() {
	let element = document.createElement('div');
	element.id = 'app';
	return element;
}

document.body.appendChild(component());


render (
	<App />, document.getElementById('app')
);
