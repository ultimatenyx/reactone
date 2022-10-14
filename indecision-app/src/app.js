console.log("App.js is runnign!");
//JSX - Javascript XML

var app = {
    title:"Indecision App",
    subtitle:"Put your life in the hands of a computer!",
    options:['Option One','Option Two']
}
// var user = {
//     name:'Nikhil',
//     age:21,
//     location:'Mumbai'
// };
const onFormSubmit = (e) => {
    e.preventDefault();
    const option =e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value='';
        console.log(app.options);
        renderIndecisionApp();
    }
}

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

const onRemoveAll = () => {
    app.options=[];
    renderIndecisionApp();
}

const renderIndecisionApp = () => {
    var template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length>0?'Here are your options':'No Options'}</p>
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option)=><li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
        );
        ReactDOM.render(template,appRoot);
}

renderIndecisionApp();