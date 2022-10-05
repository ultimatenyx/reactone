"use strict";

console.log("App.js is runnign!");
//JSX - Javascript XML

var app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer!",
    options: ['Option One', 'Option Two']
};
var user = {
    name: 'Nikhil',
    age: 21,
    location: 'Mumbai'
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "p",
        null,
        app.options.length > 0 ? 'Here are your options' : 'No Options'
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item one"
        ),
        React.createElement(
            "li",
            null,
            "Item tew"
        )
    )
);
function getUserLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "Location: ",
            location
        );
    }
}
var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age > 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getUserLocation(user.location)
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
