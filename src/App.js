import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomepageComp from './pages/HomepageComp';
import BaseHOC from './hoc/withBaseHoc';
import BaseLayout from './hoc/BaseLayout';
import BaseLayoutProps from './hoc/BaseLayoutProps';
import HomepageWithHOC from './pages/HomepageWithHOC';

function App() {
  const EnhancedHomepage = BaseHOC(HomepageComp);
  return (
    <Routes>
      {/* method1 for layout-HOC  using hoc starting with 'with' as file name*/}
      <Route path ="/homehoc" element={<EnhancedHomepage /> }>
      </Route>

      {/* method2 for layout-HOC  using {children}*/}
      <Route path="/homelayout" element={
          <BaseLayout>
            <HomepageComp />
          </BaseLayout>
        } 
      />

      {/* method3 for layout-HOC  using ...props*/}
      <Route path="/homelayout2" element={
          <BaseLayoutProps>
            <HomepageComp />
          </BaseLayoutProps>
        } 
      />

      {/* method4 for layout-HOC  using basehoc at export of component*/}
      <Route path ="/home" element={<HomepageWithHOC /> }>
      </Route>



      <Route path ="/home" element={<HomepageComp /> }>
      </Route>
    </Routes>

    // <div className="App">
    //     <p>
    //       Hello World! This is my first React App. I am learning React and this is my first project. I am excited to learn more about React and build amazing projects with it.
    //     </p>
    //     <hr/>
    //     <ClassComp />
    //     <hr/>
    //     <FuncComp />
    //     <hr/>
    //     <ArrowFuncComp />
    //     <hr/>
    //     <StateComp />
    //     <hr/>
    //     <PropStateComp name='Shivansh' age={23} />
    // </div>
  );
}

export default App;

// React life cycle methods are special methods that are called at different stages of a component's life. They are used to perform side effects, such as fetching data, updating the DOM, or cleaning up resources. The most commonly used lifecycle methods are:

// 1. componentDidMount: This method is called after the component is mounted to the DOM. It is commonly used to fetch data from an API or set up event listeners.

// 2. componentDidUpdate: This method is called after the component updates, either due to a change in props or state. It can be used to perform side effects based on the updated state or props.

// 3. componentWillUnmount: This method is called just before the component is unmounted and destroyed. It is used to clean up any resources, such as event listeners or timers, that were set up in componentDidMount.

// 4. shouldComponentUpdate: This method is called before rendering when new props or state are being received. It can be used to optimize performance by preventing unnecessary re-renders.

// 5. getDerivedStateFromProps: This static method is called right before rendering when new props are received. It can be used to update the state based on the new props.

// These lifecycle methods allow developers to manage the component's behavior and side effects effectively throughout its lifecycle.