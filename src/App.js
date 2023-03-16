import logo from './logo.svg';
import './App.css';
// import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ContactListComponent from './components/container/contact_list';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import Ejemplo4 from './hooks/Ejemplo4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name="Maria"/> */}
        {/* <GreetingF name={"Cristina"}/> */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <ContactListComponent></ContactListComponent> */}
        <Ejemplo1></Ejemplo1>
        <Ejemplo2></Ejemplo2>
        <MiComponenteConContexto></MiComponenteConContexto>
        <Ejemplo4 nombre='Maria'>
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4>
      </header>
    </div>
  );
}

export default App;
