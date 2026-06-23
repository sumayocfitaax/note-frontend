import { GiNotebook } from "react-icons/gi";
import axios from 'axios';
import { backendUrl } from "../config";
import { useState, useEffect } from "react";
import { MdUpdate } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import toast, {Toaster} from 'react-hot-toast'
import { Link } from "react-router-dom";



export default function Notes(){

  const [data, setData] = useState([])

  const getAllData = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/getResult`)
      setData(response.data)
    } catch (error) {
      console.log(error)
    }
  } 

  const removeNote = async (id)=>{
    try {
      await axios.delete(`${backendUrl}/api/removeNote/${id}`)
      toast.success('Note deleted successfully')
      getAllData()
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    getAllData()
  }, []);



  
  return(
    <div className="grid grid-cols-4 p-4 gap-4">
      {
        data.map((notes) => {
          return  <div  className=" rounded-md border border-blue-400 bg-blue-100">

          <div className="flex gap-3 font-bold items-center justify-center select-none py-4 bg-blue-600 text-blue-100 rounded-tr-md rounded-tl-md">
            <h1 className="text-4xl">nodes </h1>
            <p className="text-4xl "><GiNotebook/></p>
          </div>

          <div className=" py-2 text-2xl px-4 text-center bg-blue-300">
            <h1>{notes.title}</h1>
          </div>

          <div className=" py-4 px-4 ">
            <h1>{notes.description}</h1>
          </div>

          <div className="flex justify-between items-center px-4 mb-3">
            <Link to={`/update/${notes._id}`}>
              <button className="text-blue-950 text-2xl  cursor-pointer"><MdUpdate/></button>
            </Link>
            <button onClick={()=> removeNote(notes._id)} className="text-red-500 text-2xl  cursor-pointer"><MdDelete /></button>
          </div>

        </div>
        })
      }
       
      <Toaster/>
    </div>
  )
}