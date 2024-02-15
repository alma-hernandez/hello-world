const App = () => {
    return (
      <Template>
        <h1>Main content</h1>
      </Template>
    );
  }
  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container);
  root.render(<App />);

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar Test</a>
      </nav>
    );
  }

  const Sidebar = () => {
    return (
      <div className="d-none d-md-block col-md-3">
        <div className="border border-primary py-4 px-3">
          Sidebar
        </div>
      </div>
    )
  }

  const Footer = () => {
    return (
      <div className="border-top p-2">
        Template Demo © 2019
      </div>
    )
  }

  const Template = (props) => {
    return (
      <div>
        <Navbar />
        <div className="container py-4">
          <div className="row">
            <div className="col-12 col-md-9">
              {props.children}
            </div>
            <Sidebar />
          </div>
        </div>
        <Footer />
      </div>
    )
  }