import {useLocation,Link} from "react-router-dom"

function NotFound(){

  const location=useLocation()

  return(
    <div className="notfound">

      <h2>Page Not Found</h2>

      <p>Invalid URL: {location.pathname}</p>

      <Link to="/">Go Home</Link>

    </div>
  )
}

export default NotFound