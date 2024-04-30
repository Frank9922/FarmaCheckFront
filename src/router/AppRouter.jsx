import { Navigate, Route, Routes } from "react-router-dom"
import { FarmaRoutes } from "../farmacheck/routes/FarmaRoutes"
import { useCheckAuth } from "../hooks/useCheckAuth"
import { CheckingAuth } from "../farmacheck/components/CheckingAuth"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { HomePage } from "../pages/HomePage"
import { useMemo } from "react"


export const AppRouter = () => {

  const { status } = useCheckAuth();

  const isAuthenticated = useMemo(() => {

    return status === "authenticated"

  }, [ status ])

  if(status === 'checking') {
    return <CheckingAuth />
  }

  return (  
    <Routes>
            
            {isAuthenticated ?? (<Route path="/check/*" element={<FarmaRoutes />} />)}

            {!isAuthenticated && <Route path="/check/*" element={<Navigate to="/auth/login" />} /> }

            {!isAuthenticated && <Route path="/auth/*" element={<AuthRoutes />} />}


            <Route path="/" element={<HomePage />} />
           
    </Routes>
  )
}
