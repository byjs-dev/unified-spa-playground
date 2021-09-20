class AppShell{

    constructor(){
        this.registeredTopLevelComponents = new Map();
    }

    /**
     *
     * @param {HTMLElement} element
     */
    set appContentElement(element){
        this._appContentElement = element;
    }

    /**
     *
     * @returns {HTMLElement}
     */
    get appContentElement(){
        return this._appContentElement;
    }

    /**
     *
     * @param {string} topLevelRoute // e.g. '/app-00/'  or '/'
     * @param {string} componentName
     */
    registerTopLevelComponent(topLevelRoute, componentName){
        console.log(`registerTopLevelComponent: ${topLevelRoute}:${componentName}`);
        if(this.registeredTopLevelComponents.has(topLevelRoute)){
            const registeredComponent = this.registeredTopLevelComponents.get(topLevelRoute);
            console.warn(`Chosen route "${topLevelRoute}" for "${componentName}" has already been taken by "${registeredComponent}"`);
            return;
        }
        this.registeredTopLevelComponents.set(topLevelRoute, componentName);
    }

    /**
     *
     * @param {string} route
     * @returns {string}
     */
    getComponentNameFromRoute(route){
        return this.registeredTopLevelComponents.get(route);
    }

    /**
     *
     * @param {Location} location
     */
    updateTopLevelComponent(location) {
        console.log('app-shell updateTopLevelComponent', location.pathname);
        const next    = this.getComponentNameFromRoute(location.pathname);
        const current = this._appContentElement.firstChild;
        if (current.nodeName.toLowerCase() !== next) {
            if (next === undefined) { //404
                console.log('unload');
                this._appContentElement.innerHTML = `<span>Home - no app loaded</span>`;
                return;
            }
            console.log("app-shell updateTopLevelComponent change");
            console.log("route change (top level)");
            const newComponent = document.createElement(next);
            this._appContentElement.replaceChild(newComponent, current);
        }
        else {
            console.log("app-shell updateTopLevelComponent no-change");
        }
    }
}
export const appShell = new AppShell();
