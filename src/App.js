import logo from './logo.svg';
import './App.css';
// import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name="Maria"/> */}
        {/* <GreetingF name={"Cristina"}/> */}
        <TaskListComponent></TaskListComponent>
      </header>
    </div>
  );
}

export default App;
