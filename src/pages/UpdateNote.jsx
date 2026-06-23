import { useEffect, useState } from "react"
import { backendUrl } from "../config"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import toast, { Toaster } from "react-hot-toast"

export default function UpdateNote(){
  const {_id} = useParams()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const getSingleNote = async ()=>{
    try {
      const response = await axios.get(`${backendUrl}/api/singleNote/${_id}`)

        setTitle(response.data.title),
        setDescription(response.data.description)
      
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const UpdateNote = async (e)=>{
    e.preventDefault()
    try {
      await axios.put(`${backendUrl}/api/updateNote/${_id}`,{
        title,
        description
      })

      toast.success('note has updated succesfully')
      navigate('/')
      
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  useEffect (()=>{
    getSingleNote()
  },[])

  return(
    <div>
      <form onSubmit={UpdateNote} className="mx-10 flex items-center justify-center flex-col mt-25">
        <input value={title} onChange={(e)=> setTitle(e.target.value)} className="px-6 w-87 py-2 outline-0 bg-blue-400 rounded-full mt-5" type="text" />
        <br />
        <textarea value={description} onChange={(e)=> setDescription(e.target.value)} className=" px-4 py-3  border border-blue-600 outline-0" name="" id="" rows={8} cols={40}></textarea>
        <br />
        <button className="cursor-pointer bg-blue-900 text-white px-8 rounded-md py-2">Update</button>
      </form>
      <Toaster/>
    </div>
  )
}