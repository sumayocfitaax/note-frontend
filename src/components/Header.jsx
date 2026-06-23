import { Link } from "react-router-dom";

export default function Header(){
  return(
    <header className="bg-blue-300  w-full flex items-center justify-between px-6 py-3">
      <h1 className="font-bold text-2xl">Note App</h1>
      <Link to={'/addNote'}>
      <button className="py-3 px-7 cursor-pointer bg-blue-600 text-white rounded-md font-semibold">+ Add Note</button>
      </Link>
    </header>
  )
}