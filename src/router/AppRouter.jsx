import { Route, Routes } from "react-router-dom"
import { FarmaRoutes } from "../farmacheck/routes/FarmaRoutes"
import { PublicRoutes } from "./PublicRoutes"
import { useCheckAuth } from "../hooks/useCheckAuth"
import { CheckingAuth } from "../farmacheck/components/CheckingAuth"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { PageCheck } from "../farmacheck/pages/PageCheck"

export const AppRouter = () => {

  const { status } = useCheckAuth();

  if(status === 'checking') {
    return <CheckingAuth />
  }

  return (
    <Routes>

            {
              (status === 'authenticated')
              ?  <Route path="/check" element={<PageCheck />}/>
              :  <Route path="/auth/*" element={<AuthRoutes />} />
            }

            <Route path="/*" element={<PublicRoutes />} />
           
    </Routes>
  )
}
