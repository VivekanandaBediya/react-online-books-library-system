import {useState} from "react"
import {useDispatch} from "react-redux"
import {addBook} from "../redux/bookSlice"
import {useNavigate} from "react-router-dom"

function AddBook(){

  const [title,setTitle]=useState("")
  const [author,setAuthor]=useState("")
  const [category,setCategory]=useState("")
  const [description,setDescription]=useState("")

  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()

    if(!title||!author||!category||!description){
      alert("All fields required")
      return
    }

    dispatch(addBook({
      id:Date.now(),
      title,
      author,
      category,
      description,
      rating:4
    }))

    navigate("/books")
  }

  return(

    <form onSubmit={handleSubmit}>

      <input placeholder="Title" onChange={(e)=>setTitle(e.target.value)}/>
      <input placeholder="Author" onChange={(e)=>setAuthor(e.target.value)}/>
      <input placeholder="Category" onChange={(e)=>setCategory(e.target.value)}/>
      <input placeholder="Description" onChange={(e)=>setDescription(e.target.value)}/>

      <button>Add Book</button>

    </form>
  )
}

export default AddBook