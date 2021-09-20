class App01 extends HTMLElement {
  connectedCallback() {
    console.log("app-01 - connectedCallback");
    this.render(window.location);
    this.unlisten = window.appHistory.listen(location => {
      console.log("app-01 appHistory.listen");
      this.render(location);
    });
  }
  render(location) {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <h1>App 01</h1>
      <img src="https://via.placeholder.com/200x200?text=app-01" width="200" alt="app-01 placeholder image">
    `;
  }
  disconnectedCallback() {
    this.unlisten();
  }
}

window.customElements.define("app-one", App01);
