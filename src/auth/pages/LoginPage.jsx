import { useDispatch, useSelector } from "react-redux"
import { startInLogin } from "../../store/slices/auth/thunks";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {

  const initialForm = {
    email: '',
    password: ''
  }

  const formValidations = {
    email: [(value) => value.includes('@'), 'El correo debe tener una @'],
    password: [value => value.length >= 6, 'El password debe de tener mas de 6 caracteres']
  }

  const {email, password, onInputChange, formState, isFormValid, emailValid, passwordValid} = useForm(initialForm, formValidations)
  
  const [formSubmit, setformSubmit] = useState(false)

  const { errorResponse } = useSelector(state => state.auth)

  const dispatch = useDispatch();


  const onLogin = (event) => {
    event.preventDefault();

    setformSubmit(true);

      if(!isFormValid) return false
      dispatch(startInLogin(formState));
      const navigate = useNavigate()
      navigate('/check')

  }

  return (
    <>  
    <section className="h-100 gradient-custom">
            <div className="container">
              <div className="row d-flex justify-content-center align-items-center">
                <div className=" col-md-8 col-lg-6">
                  <div className="card bg-dark m-4 text-white">
                    <div className="card-body p-5 text-center">

                      <div className="mb-md-5 mt-md-4 pb-5">
                          

                          
                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                        <p className="text-white-50 mb-5">Please enter your login and password!</p>


                        <form onSubmit={onLogin}>
                        <div className="form-outline form-white mb-4">
                       
                        <label className="form-label">Email</label>
                          <input 
                          name="email"
                          value={email}
                          onChange={onInputChange} className="form-control form-control-lg mb-4" />
                          
                          <div className="alert alert-danger animate__animated animate__fadeIn" style={{display: !!emailValid && formSubmit ? '' : 'none'}} role="alert">
                                    {emailValid}
                          </div>
                        </div>

                        <div className="form-outline form-white mb-4">
                        <label className="form-label">Password</label>
                          <input type="password" name="password" value={password} onChange={onInputChange} className="form-control form-control-lg mb-4" />
                            <div className="alert alert-danger animate__animated animate__fadeIn" style={{display: !!passwordValid && formSubmit ? '' : 'none'}}  role="alert">
                                  {passwordValid}
                            </div>
                        </div>
                        

                        <p className="small mb-2 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                        <div className="alert alert-danger mb-4 animate__animated animate__bounceIn" role="alert" style={{display: errorResponse ? '' : 'none'}}>
                          {errorResponse}
                        </div>

                        <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

                        <div className="d-flex justify-content-center text-center mt-4 pt-1">
                          <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                          <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                          <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                        </div>
                          </form>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
      </section>



        
    </>
  )
}
