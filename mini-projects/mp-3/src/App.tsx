import {Routes, Route, RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './components/pages/Home.tsx';
import Education from './components/pages/Education.tsx';
import ProfExps from "./components/pages/ProfExps.tsx";
import EntrepAndOutreach from "./components/pages/EntrepAndOutreach.tsx";
import CompAndCourses from "./components/pages/CompAndCourses.tsx";
import Portfolio from './components/pages/Portfolio.tsx';
import Projects from './components/pages/Projects.tsx';

function Root() {
  return(
      <>
        <Routes>
          <Route path={'/'} element={<Home/>}></Route>
          <Route path={'/education'} element={<Education/>}></Route>
          <Route path={'/prof-experiences'} element={<ProfExps/>}></Route>
          <Route path={'/extra-experiences'} element={<EntrepAndOutreach/>}></Route>
            <Route path={'/competencies-coursework'} element={<CompAndCourses/>}></Route>
          <Route path={'/portfolio'} element={<Portfolio/>}></Route>
          <Route path={'/projects'} element={<Projects/>}></Route>
        </Routes>
      </>
  );
}

const router = createBrowserRouter(
    [{path: "*", Component : Root}],
);

export default function App() {
  return (
      <RouterProvider router={router}/>
  );
}
