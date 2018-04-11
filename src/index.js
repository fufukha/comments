import React from 'react';
import { render } from 'react-dom';
import App from './components/app/app';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart';
import faTrash from '@fortawesome/fontawesome-free-solid/faTrash';
import './sass/main.scss';

fontawesome.library.add(faHeart, faTrash);



function component() {
	let element = document.createElement('div');
	element.id = 'app';
	return element;
}

document.body.appendChild(component());


render (
	<App />, document.getElementById('app')
);
