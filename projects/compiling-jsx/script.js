var element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello world!"
);

var container = document.getElementById('root');
var root = ReactDOM.createRoot(container);
root.render(element);