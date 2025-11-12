import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { About } from './Pages/About.jsx'
import { Products } from './Pages/Products.jsx'
import { Contact } from './Pages/Contact.jsx'
import { Product } from './Pages/Product.jsx'
import { Cart } from './Pages/Cart.jsx'
import { ProductDetails } from './Components/ProductDetails.jsx'

const routerProvider = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Products />

      },
      {
      path: "about",
      element: <About/>
      },
      {
        path: "products",
        element: <Products/>
      },
      {
        path: "cart",
        element: <Cart/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      
      {
        path: "product-details/:id",
        element: <Product />
      }
    ]

  }
 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routerProvider} />
  </StrictMode>,
)
