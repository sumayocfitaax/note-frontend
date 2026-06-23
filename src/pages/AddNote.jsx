import axios from "axios"
import { backendUrl } from "../config"
import { useState } from "react"
import toast, {Toaster} from "react-hot-toast"
import { useNavigate } from "react-router-dom"
export default function AddNote(){
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const navigate = useNavigate()

  const addNote = async(e)=>{
    e.preventDefault()
    try {
      const response = await axios.post(`${backendUrl}/api/addNote`,{
        title,
        description
      })
      toast.success('note added successfully')
      navigate('/')
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }
  return(
    <div>
          <form onSubmit={addNote} className="mx-10 flex items-center justify-center flex-col mt-25">
            <input value={title} onChange={(e)=> setTitle( e.target.value)} className="px-6 w-87 py-2 outline-0 bg-blue-400 rounded-full mt-5" type="text" placeholder="Add Note" />
            <br />
            <textarea value={description} onChange={(e)=> setDescription( e.target.value)} className=" px-4 py-3  border border-blue-600 outline-0 " name="" id="" rows={8} cols={40} placeholder="write your description"></textarea>
            <br />
            <button className="cursor-pointer bg-blue-900 text-white px-8 rounded-md py-2">Add Note</button>
          </form>
          <Toaster/>
        </div>
  )
}