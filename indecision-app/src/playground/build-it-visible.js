

const appRoot=document.getElementById('app');
let toggle=true;
const onToggleVisibility = () => {
    toggle=!toggle;
    renderApp();
}

const renderApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle!</h1>
            <button onClick={onToggleVisibility}>{toggle?'Show':'Hide'} Details</button>
            {toggle && <p>Here are some details!</p>}
        </div>
    );
    ReactDOM.render(template,appRoot);
}
renderApp();