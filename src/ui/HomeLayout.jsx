import { SideBar } from "./SideBar"

export const HomeLayout = ({children}) => {
  return (
    <>
  
        <div className="cover-container d-flex p-4 vh-100">

        <SideBar />
        
            <div className="col">
                {/* <NavBar /> */}
                <main className="bg-dark bg-opacity-50 white text-light">
                    {children}
                </main>
                
            </div>
                
        </div>
        
    </>
  )
}
