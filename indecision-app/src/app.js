class IndecisionApp extends React.Component{
    render(){
        const title="Indecision";
        const subtitle="Put your life in the hands of your computer";
        const options = ["One","Two","Three"];
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                
                <Options options={options} />
                <AddOption />
            </div>
        );

    }
}
class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}
class Action extends React.Component{
    handlePick(){
        console.log('handlePick called!');
    }
    render(){
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}
class Options extends React.Component{
    constructor(props){
        super(props);
        this.handleRemoveAll=this.handleRemoveAll.bind(this);
    }
    handleRemoveAll(){
        console.log(this.props.options);
    }
    render(){
        return (
            <div>
            <button onClick={this.handleRemoveAll}>Remove All</button>
            
                {
                    this.props.options.map((option)=><Option key={option} optionText={option} />)
                }
                
            </div>
        );
    }
}
class Option extends React.Component{
    render(){
        return (
            <div>
            {this.props.optionText}
            </div>
        );
    }
}
class AddOption extends React.Component{
    handleAddOption(e){
        e.preventDefault();
        const option =e.target.elements.option.value.trim();
        if(option){
            console.log(option);
        
        }
        
    }
    render(){
        return (
            <div>
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
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