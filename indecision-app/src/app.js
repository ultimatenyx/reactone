console.log("App.js is runnign!");
//JSX - Javascript XML

var app = {
    title:"Indecision App",
    subtitle:"Put your life in the hands of a computer!",
}
var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item tew</li>
        </ol>
    </div>
    );

var templateTwo=(
    <div>
        <h1>Nikhil Chaughule</h1>
        <p>Age: 31</p>
        <p>Location: Mumbai</p>

    </div>
);
var appRoot = document.getElementById('app');
ReactDOM.render(template,appRoot);