import { NavBar } from "./NavBar"


export const HomeLayout = ({children}) => {
  return (
    <>
    <div className="">
        <div className="cover-container d-flex w-100 h-100 pt-3 mx-auto flex-column">
            <div className="col">
                <NavBar />
                <main className="bg-dark bg-opacity-50 white text-light">
                    {children}
                </main>
                
            </div>
                
        </div>
    </div>
        
    </>
  )
}
