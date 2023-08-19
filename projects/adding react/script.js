const element = React.createElement(
    'h1',
    {
        className: 'title',
        onClick: () => { console.log('clicked');},
        style: { fontFamily: 'sans-serif', color: 'rgb(255, 100, 100)'}
},
    'Hello World!'
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(element);
