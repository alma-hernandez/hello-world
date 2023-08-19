const element = React.createElement(
    'h1',
    {
        className: 'title',
        onClick: () => { console.log('clicked');},
        style: { fontFamily: 'sans-serif', color: 'rgb(255, 100, 100)'}
},
    'Hello World!'
);

const newElement = React.createElement(
    'h3',
    {
        className: 'paragraphs',
        onClick: () => { console.log('clicked');},
        style: { color: 'blue'}
    },
        'this is a paragraphs blah blah blah'
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(element);

const container2 = document.getElementById('root2');
const root2 = ReactDOM.createRoot(container2);
root2.render(element);

const container3 = document.getElementById('practice');
const practice = ReactDOM.createRoot(container3);
practice.render(newElement);

const container4 = document.getElementById('practice2');
const practice2 = ReactDOM.createRoot(container4);
practice2.render(newElement);

