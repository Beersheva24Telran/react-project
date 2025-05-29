import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routing.tsx'

createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={router}></RouterProvider>
  </>,
)
