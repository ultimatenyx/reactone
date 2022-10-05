console.log("App.js is runnign!");
//JSX - Javascript XML

var app = {
    title:"Indecision App",
    subtitle:"Put your life in the hands of a computer!",
    options:['Option One','Option Two']
}
var user = {
    name:'Nikhil',
    age:21,
    location:'Mumbai'
};

var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length>0?'Here are your options':'No Options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item tew</li>
        </ol>
    </div>
    );
function getUserLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    }
}
var templateTwo=(
    <div>
        <h1>{user.name?user.name:'Anonymous'}</h1>
        {(user.age && user.age>18) && <p>Age: {user.age}</p>}
        {getUserLocation(user.location)}

    </div>
);
var appRoot = document.getElementById('app');
ReactDOM.render(template,appRoot);