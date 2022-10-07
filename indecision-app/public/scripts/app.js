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

};var template = React.createElement(
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

var count = 0;
var addOne = function addOne() {
    console.log('addOne');
};

var minusOne = function minusOne() {
    console.log('minusOne');
};

var reset = function reset() {
    console.log('reset');
};
var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Count: ",
        count
    ),
    React.createElement(
        "button",
        { onClick: addOne },
        "+1"
    ),
    React.createElement(
        "button",
        { onClick: minusOne },
        "-1"
    ),
    React.createElement(
        "button",
        { onClick: reset },
        "Reset"
    )
);
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
