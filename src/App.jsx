import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';

// Pages
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const router = createBrowserRouter(

  createRoutesFromElements(

    <Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Route>
  )
)
function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  )
}

export default App