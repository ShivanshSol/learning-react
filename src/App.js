import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomepageComp from './pages/HomepageComp';
import BaseHOC from './hoc/withBaseHoc';
import BaseLayout from './hoc/BaseLayout';

function App() {
  const EnhancedHomepage = BaseHOC(HomepageComp);
  return (
    <Routes>
      <Route path ="/homehoc" element={<EnhancedHomepage /> }>
      </Route>
      <Route path="/homelayout" element={
          <BaseLayout>
            <HomepageComp />
          </BaseLayout>
        } 
      />
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
