'use strict';

var appRoot = document.getElementById('app');
var toggle = true;
var onToggleVisibility = function onToggleVisibility() {
    toggle = !toggle;
    renderApp();
};

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle!'
        ),
        React.createElement(
            'button',
            { onClick: onToggleVisibility },
            toggle ? 'Show' : 'Hide',
            ' Details'
        ),
        toggle && React.createElement(
            'p',
            null,
            'Here are some details!'
        )
    );
    ReactDOM.render(template, appRoot);
};
renderApp();
