import {appShell} from './AppShell.js'

appShell.appContentElement = document.getElementById('app-content');

//dummy top level routes for apps
const routes = {
    "/app-00/": "app-zero",
    "/app-01/": "app-one",
    "/app-02/": "app-two",
};

Object.entries(routes).forEach((entry) => {
    appShell.registerTopLevelComponent(entry[0], entry[1]);
});

window.appHistory = window.History.createBrowserHistory();
window.appHistory.listen((location) => appShell.updateTopLevelComponent(location));
console.log(window.location);
appShell.updateTopLevelComponent(window.location);

document.addEventListener("click", e => {
    if (e.target.nodeName === "A") {
        e.preventDefault();
        const href = e.target.getAttribute("href");
        window.appHistory.push(href);
    }
});
document.querySelector("footer strong").innerHTML = Math.round(Math.random() * 2e5).toString(16);
