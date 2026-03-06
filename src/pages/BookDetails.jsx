import {useParams,Link} from "react-router-dom"
import {useSelector} from "react-redux"

function BookDetails(){

  const {id}=useParams()
  const books=useSelector((state)=>state.books)

  const book=books.find((b)=>b.id==id)

  return(
    <div className="container">

      <h2>{book.title}</h2>

      <p>Author: {book.author}</p>

      <p>{book.description}</p>

      <p>Rating: {book.rating}</p>

      <Link to="/books">Back</Link>

    </div>
  )
}

export default BookDetails