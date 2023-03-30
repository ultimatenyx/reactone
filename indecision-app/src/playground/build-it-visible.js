let toggle=false;
const appRoot = document.getElementById('app');
const onToggle = () => {
    toggle=!toggle;
    render();
}
const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onToggle}>{toggle?"Hide":"Show"} Details</button>
            {toggle && <p>Here is some hidden text!</p>}
        </div>
    );
    ReactDOM.render(template,appRoot);

}
render();