import '../../style/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ComunidadesList from '../comunidades/ComunidadesList'
import ParquesList from '../parque/ParquesList'
import {LikeProvider} from '../../context/likeContext';


import RootLayout from './RootLayout';
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <ComunidadesList />,
      },
      {
        path: '/comunidad/:comunidadID/parques',
        element: <ParquesList />,
      },
    ],
  },
]);
const App = () => {
  return (
    <LikeProvider>
    <RouterProvider router={router} />
    </LikeProvider>
  );
}


export default App;
