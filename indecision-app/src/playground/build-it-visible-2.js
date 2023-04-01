class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.onVisibilityToggle = this.onVisibilityToggle.bind(this);
        this.state = {
            visibility: false
        }
    }
    onVisibilityToggle(){
        this.setState((prevState)=>{
            return {
                visibility : !prevState.visibility
            }
        })
    }
    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.onVisibilityToggle}>{this.state.visibility?"Hide":"Show"} Details</button>
                {this.state.visibility && <p>This is some text</p>}
            </div>
        )
    }
}
ReactDOM.render(<VisibilityToggle />,document.getElementById('app'));