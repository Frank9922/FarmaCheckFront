import { Route, Routes } from "react-router-dom"
import { PageCheck } from "../pages/PageCheck"
import { PageFarmacos } from "../pages/PageFarmacos"

export const FarmaRoutes = () => {
  return (

    <Routes>
        <Route path="/" element={<PageCheck />} />
        <Route path="/farmacos" element={<PageFarmacos />} />
        
    </Routes>
  
)
}
