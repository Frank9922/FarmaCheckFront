import { HomeLayout } from "../ui/HomeLayout"


export const HomePage = () => {
  return (
    <HomeLayout>

      <div className="container pt-4 pb-4">
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-4 mt-5">Welcome to Our Landing Page</h1>
            <p className="lead">This is a simple landing page example using Bootstrap.</p>
            <button className="btn btn-primary mt-3">Learn More</button>

          </div>
        </div>
      </div>
    </HomeLayout>
  )
}
