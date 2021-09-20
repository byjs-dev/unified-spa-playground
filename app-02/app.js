class App02 extends HTMLElement {
  connectedCallback() {
    console.log("app-02 - connectedCallback");
    this.render(window.location);
    this.unlisten = window.appHistory.listen(location => {
      console.log("app-02 appHistory.listen");
      this.render(location);
    });
  }
  render(location) {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <h1>App 02</h1>
      <img src="https://via.placeholder.com/200x200?text=app-02" width="200" alt="app-02 placeholder image">
    `;
  }
  disconnectedCallback() {
    this.unlisten();
  }
}

window.customElements.define("app-two", App02);
