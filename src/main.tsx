import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './routes.tsx'
import { store } from './app/store.ts'
import { Provider } from 'react-redux'

const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
