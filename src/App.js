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

      {/* method4 for layout-HOC  using basehoc at export of compone*/}
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
