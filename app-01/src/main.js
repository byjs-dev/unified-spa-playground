import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as retargetEvents from 'react-shadow-dom-retarget-events';

import App from './App'

export default class App01 extends HTMLElement {

    createApp(){
        return React.createElement(App);
    }

    connectedCallback() {
        this.mountPoint = document.createElement('div');
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(this.mountPoint);
        ReactDOM.render(this.createApp(), this.mountPoint);
        retargetEvents(shadowRoot);
    }
}

window.customElements.define('app-one', App01);
