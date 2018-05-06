import React from 'react';
import { render } from 'react-dom';
import App from './components/app/app';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart';
import faTrash from '@fortawesome/fontawesome-free-solid/faTrash';
import fasSmile from '@fortawesome/fontawesome-free-solid/faSmile';
import farSmile from '@fortawesome/fontawesome-free-regular/faSmile';
import './sass/main.scss';

fontawesome.library.add(faHeart, faTrash, fasSmile, farSmile);



function component() {
	let element = document.createElement('div');
	element.id = 'app';
	return element;
}

document.body.appendChild(component());


render (
	<App />, document.getElementById('app')
);
