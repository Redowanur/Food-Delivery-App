import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import RestaurantDetails from './pages/Restaurant/RestaurantDetails'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Body from './pages/Body/Body'
import Cart from './pages/Cart/Cart'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: '', element: <Body /> },
      { path: 'cart', element: <Cart /> },
      { path: 'restaurant/:id', element: <RestaurantDetails />, }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
