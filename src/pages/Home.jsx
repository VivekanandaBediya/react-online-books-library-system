import {Link} from "react-router-dom"

function Home(){

  return(
    <div className="container">

      <h1>Welcome to Online Library</h1>

      <h3>Categories</h3>

      <Link to="/books/Fiction">Fiction</Link>
      <Link to="/books/Non-Fiction">Non-Fiction</Link>
      <Link to="/books/Sci-Fi">Sci-Fi</Link>

    </div>
  )
}

export default Home