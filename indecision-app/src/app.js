class IndecisionApp extends React.Component{
    render(){
        return (
            <div>
                <Header />
                <Action />
                <AddOption />
                <Options />
            </div>
        );

    }
}
class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>Indecision App</h1>
                <h2>Put your life in the hands of your computer</h2>
            </div>
        );
    }
}
class Action extends React.Component{
    render(){
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}
class Options extends React.Component{
    render(){
        return (
            <div>
                <ul>
                    <li>Option 1</li>
                    <li>Option 2</li>
                </ul>
                <Option />
            </div>
        );
    }
}
class Option extends React.Component{
    render(){
        return (
            <div>
            <p>Option Component here</p>
            </div>
        );
    }
}
class AddOption extends React.Component{
    render(){
        return (
            <div>
                <button>Add Option</button>
            </div>
        );
    }
}
// const jsx=(
//     <div>
//         <Header />
//         <Action />
//         <AddOption />
//         <Options />
//     </div>
// );
ReactDOM.render(<IndecisionApp />,document.getElementById('app'));