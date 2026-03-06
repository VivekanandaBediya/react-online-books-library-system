import {useSelector} from "react-redux"
import {useParams,Link} from "react-router-dom"
import {useState} from "react"

function BrowseBooks(){

  const books=useSelector((state)=>state.books)
  const {category}=useParams()

  const [search,setSearch]=useState("")

  const filteredBooks=books.filter((book)=>
  (!category || book.category===category) &&
  (book.title.toLowerCase().includes(search.toLowerCase()) ||
   book.author.toLowerCase().includes(search.toLowerCase()))
  )

  return(
    <div className="container">

      <h2>Browse Books</h2>

      <input
      placeholder="Search..."
      onChange={(e)=>setSearch(e.target.value)}
      />

      {filteredBooks.map((book)=>(
        <div className="card" key={book.id}>

          <h3>{book.title}</h3>

          <p>{book.author}</p>

          <Link to={`/book/${book.id}`}>View Details</Link>

        </div>
      ))}

    </div>
  )
}

export default BrowseBooks