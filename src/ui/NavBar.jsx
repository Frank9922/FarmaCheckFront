import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { startLogout } from "../store/slices/auth/thunks";


export const NavBar = () => {

  const { status, displayName } = useSelector(state => state.auth)

  const disptach = useDispatch();

  const onLogout = () => {

    disptach(startLogout());

  }


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link className="navbar-brand" to='/'>Home</Link>

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

          <li className="nav-item" style={{ display: status === 'authenticated' ? '' : 'none'}}>
            <Link className="nav-link active" to='/check'>check</Link>
          </li>

      </ul>

      
      <div style={{display: status === 'authenticated' ? 'none' : ''}}>
        <Link className="btn btn-success mx-4" to='/auth/login'>
          Login
        </Link>
            
      </div>


      <div style={{display: displayName ? '' : 'none'}}>
      {displayName}
        <button className="btn btn-danger mx-4" onClick={onLogout}>
          Logout
        </button>
            
      </div>

    </div>
</nav>
  )
}
