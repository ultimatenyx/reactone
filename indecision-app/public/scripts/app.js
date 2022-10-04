"use strict";

console.log("App.js is runnign!");
//JSX - Javascript XML

var app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer!"
};
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    React.createElement(
        "p",
        null,
        app.subtitle
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

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Nikhil Chaughule"
    ),
    React.createElement(
        "p",
        null,
        "Age: 31"
    ),
    React.createElement(
        "p",
        null,
        "Location: Mumbai"
    )
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
