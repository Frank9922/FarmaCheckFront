import { Navigate, Route, Routes } from "react-router-dom"
import { FarmaRoutes } from "../farmacheck/routes/FarmaRoutes"
import { useCheckAuth } from "../hooks/useCheckAuth"
import { CheckingAuth } from "../farmacheck/components/CheckingAuth"
import { AuthRoutes } from "../auth/routes/AuthRoutes"


export const AppRouter = () => {

  const { status } = useCheckAuth();


  if(status === 'checking') {
    return <CheckingAuth />
  }

  return (  
    <Routes>
            
            {
              (status === 'authenticated')
              ? <Route path="/*" element={<FarmaRoutes />}/>
              : <Route path="/auth/*" element={<AuthRoutes />}/>
            } 

              <Route path="/*" element={<Navigate to='/auth/login'/> } />
            
            
           
    </Routes>
  )
}
