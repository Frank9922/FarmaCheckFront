import { SearchComponent } from "./SearchComponent"
import { SideBar } from "./SideBar"

export const HomeLayout = ({children}) => {
  return (
    <>
  
        <div className="cover-container d-flex p-4 vh-100">

        <SideBar />
        
            <div className="col">
              <SearchComponent />
                {/* Buscador  */}
                <main className="bg-primary bg-opacity-75 white text-light rounded-4 ms-4">
                    {children}
                </main>
                
            </div>
                
        </div>
        
    </>
  )
}
