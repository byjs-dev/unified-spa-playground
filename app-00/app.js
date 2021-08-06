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
    console.log("route change (second level / app-00)");
    this.innerHTML = `
      <a href="/">&lt; home</a> - 
      <a href="/app-01/">app-01 </a> - 
      <a href="/app-02/">app-02 &gt;</a>
      <h1>App 00</h1>
      <img src="https://via.placeholder.com/200x200?text=app-00" width="200" alt="app-00 placeholder image">
    `;
  }
  disconnectedCallback() {
    this.unlisten();
  }
}

window.customElements.define("app-00", App00);
