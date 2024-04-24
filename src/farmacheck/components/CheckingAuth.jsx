import React from 'react'

export const CheckingAuth = () => {
  return (
    <div className='bg-primary d-flex justify-content-center align-items-center' style={{height: "100vh"}}>
          <div className="spinner-border" role="status" style={{ width: '5rem', height: '5rem'}}>
              <span className="visually-hidden">Loading...</span>
          </div>
    </div>
  )
}
