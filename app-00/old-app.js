class App00 extends HTMLElement {
  connectedCallback() {
    console.log("app-00 - connectedCallback");
    this.render(window.location);
    this.unlisten = window.appHistory.listen(location => {
      console.log("app-00 appHistory.listen");
      this.render(location);
    });
  }
  render(location) {
    console.log("this.shadowRoot",this.shadowRoot);
    if(this.shadowRoot === null){
      this.attachShadow({ mode: "open" });
    }
    this.shadowRoot.innerHTML = `
      <h1>App 00</h1>
      <img src="https://via.placeholder.com/200x200?text=app-00" width="200" alt="app-00 placeholder image">
    `;
  }
  ping(){
    console.log('App00 ping');
    this.shadowRoot.querySelector('h1').innerHTML = 'App 00 - '+ Math.round(Math.random() * 2e5).toString(16);
  }

  disconnectedCallback() {
    this.unlisten();
  }
}

window.customElements.define("app-zero", App00);
