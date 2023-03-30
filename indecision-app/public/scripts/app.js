"use strict";

var toggle = false;
var appRoot = document.getElementById('app');
var onToggle = function onToggle() {
    toggle = !toggle;
    render();
};
var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        ),
        React.createElement(
            "button",
            { onClick: onToggle },
            toggle ? "Hide" : "Show",
            " Details"
        ),
        toggle && React.createElement(
            "p",
            null,
            "Here is some hidden text!"
        )
    );
    ReactDOM.render(template, appRoot);
};
render();
