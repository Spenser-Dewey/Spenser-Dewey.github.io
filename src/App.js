import { lazy, Suspense } from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';


import Navbar from './components/navbar'

const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Links = lazy(() => import('./pages/Links'));

function App() {
  return (
    <>
      <Suspense fallback={<Navbar> <div className="container">Loading...</div> </Navbar>}>
       <Routes>
          <Route path="/about" element={<>
            <header className="App-header">
              <Navbar/>
            </header>
            <div className="bg-dark text-white main">
              <Outlet />
            </div>
          </>}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="links" element={<Links />} />
          </Route>
          <Route path="*" element={<Navigate to="/about" />}></Route>
       </Routes>
      </Suspense>
    </>
  );
}

export default App;
