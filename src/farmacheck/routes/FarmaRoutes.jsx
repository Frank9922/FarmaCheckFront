import { Navigate, Route, Routes } from "react-router-dom"
import { PageCheck } from "../pages/PageCheck"

export const FarmaRoutes = () => {
  return (

    <Routes>
        <Route path="/xddd" element={<PageCheck />} />
    </Routes>
  
)
}
