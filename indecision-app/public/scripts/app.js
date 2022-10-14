"use strict";

console.log("App.js is runnign!");
//JSX - Javascript XML

var app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer!",
    options: ['Option One', 'Option Two']
    // var user = {
    //     name:'Nikhil',
    //     age:21,
    //     location:'Mumbai'
    // };
};var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        console.log(app.options);
        renderIndecisionApp();
    }
};

// function getUserLocation(location){
//     if(location){
//         return <p>Location: {location}</p>;
//     }
// }
// var templateTwo=(
//     <div>
//         <h1>{user.name?user.name:'Anonymous'}</h1>
//         {(user.age && user.age>18) && <p>Age: {user.age}</p>}
//         {getUserLocation(user.location)} 

//     </div>
// );
var appRoot = document.getElementById('app');

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    renderIndecisionApp();
};

var renderIndecisionApp = function renderIndecisionApp() {
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
            "p",
            null,
            app.options.length
        ),
        React.createElement(
            "button",
            { onClick: onRemoveAll },
            "Remove All"
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (option) {
                return React.createElement(
                    "li",
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderIndecisionApp();
