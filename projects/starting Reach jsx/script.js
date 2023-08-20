const formulateGreeting = (user) => {
    if (user) {
      let greeting;
      switch (user.language) {
        case 'es':
          greeting = 'Hola';
          break;
        case 'de':
          greeting = 'Hallo';
          break;
        default:
          greeting = 'Hello';
      }
      return (
        <h1 className={`greeting ${user.language}`}>
          {`${greeting} ${user.firstName} ${user.lastName}`}
        </h1>
      );
    }
  
    return <h1 className="greeting">Hello my friend</h1>;
  };
  
  const user = {
    language: 'es',
    firstName: 'Javier',
    lastName: 'Bandela'
  };
  
  const element = formulateGreeting(user);
  
  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container);
  root.render(element);