import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./router/AppRouter"
import './style.css';

export const FarmaCheckApp = () => {

  return (
    <>
        <BrowserRouter >
          <AppRouter />
        </BrowserRouter>
    </>
  )
}
