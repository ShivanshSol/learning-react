import './App.css';
import ClassComp from './components/ClassComp'
import FuncComp from './components/FuncComp'
import ArrowFuncComp from './components/ArrowFuncComp'
import StateComp from './components/StateComp'
import PropStateComp from './components/PropStateComp'

function App() {
  return (
    <div className="App">
        <p>
          Hello World! This is my first React App. I am learning React and this is my first project. I am excited to learn more about React and build amazing projects with it.
        </p>
        <hr/>
        <ClassComp />
        <hr/>
        <FuncComp />
        <hr/>
        <ArrowFuncComp />
        <hr/>
        <StateComp />
        <hr/>
        <PropStateComp name='Shivansh' age={23} />
    </div>
  );
}

export default App;
