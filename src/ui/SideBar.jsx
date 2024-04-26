import { useDispatch, useSelector } from "react-redux"
import { startLogout } from "../store/slices/auth/thunks";
import { Link } from "react-router-dom"
import { DifferenceOutlined, VaccinesOutlined } from "@mui/icons-material"



export const SideBar = () => {

  const { status, displayName } = useSelector(state => state.auth)

  const disptach = useDispatch();

  const onLogout = () => {

    disptach(startLogout());

  }


  return (
    <div className="d-flex flex-column flex-shrink-0 bg-primary rounded-pill mr-4">
    <Link to='/check' className="d-flex justify-content-center pt-4 link-dark text-decoration-none">
        <DifferenceOutlined
         fontSize="large" 
         sx={{color: 'white'}}
         />
    </Link>


    <ul className="nav nav-pills nav-flush flex-column mt-5 mb-auto text-center">
      <li className="nav-item">
        <Link to='/check/farmacos' className="d-flex justify-content-center pt-4 link-dark text-decoration-none">
          <VaccinesOutlined 
            fontSize="medium"
            sx= {{color: 'white'}}
          />
        </Link>
      </li>
      <li>

      </li>
    </ul>
    <div className="dropdown border-top">
      <a href="#" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="mdo" width="24" height="24" className="rounded-circle" />
      </a>
      <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><button onClick={onLogout} className="dropdown-item">Sign out</button></li>
      </ul>
    </div>
    
  </div>
  )
}
