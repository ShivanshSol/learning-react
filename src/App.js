import './App.css';
import ClassComp from './components/ClassComp'
import FuncComp from './components/FuncComp'
import ArrowFuncComp from './components/ArrowFuncComp'

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
    </div>
  );
}

export default App;
