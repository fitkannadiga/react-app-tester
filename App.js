
const header = React.createElement('h1', {id: 'header'}, 'Hello World');

// react needs ROOT to know where it can modify the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(header);