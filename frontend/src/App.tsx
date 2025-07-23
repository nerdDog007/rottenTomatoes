import React, { useEffect } from 'react'
import LandingPage from './pages/LandingPage/LandingPage.tsx'
import { useDispatch,useSelector } from 'react-redux';
import Dashboard from './pages/Dashboard/Dashboard.tsx'
import { setModal } from './redux/slices/auth';
import AppRoutes from './routes/Routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const dispatch = useDispatch()
  const {logged} = useSelector(state=>state.auth)
  useEffect(() => {
    if(logged){
      dispatch(setModal(false))
    }
  }, [logged])
  return (
    <>
      <Router>
        <AppRoutes />
      </Router>
    </>
  )
}

export default App