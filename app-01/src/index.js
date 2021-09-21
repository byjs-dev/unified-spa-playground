import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export default class App01 extends HTMLElement {

    connectedCallback() {
        this.mountPoint = document.createElement('div');
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(this.mountPoint);

        const title = this.getAttribute('title');
        ReactDOM.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>, this.mountPoint);
        //retargetEvents(shadowRoot);
    }

}

window.customElements.define('app-one', App01);
