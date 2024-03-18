import React from 'react'
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
export default function UserTableRow({i}) {
  return (
    <tr 
    data-index={i%2} 
    className={`bg-zinc-${i % 2 === 0 ? 100 : 300}`}

    >
    <td className="p-2">{i}.</td>
  <td >Miquisse Felix</td>
  <td>fmiquissejose@gmail.com</td>
  <td>Admin</td>
  <td>22</td>
  <td>M</td>
  <td>+258861764645</td>
  <td className="flex gap-2 p-2">
    {/* editar */}
    <Link
      href="/users/fmiquissejose@gmail.com"
      className="bg-sky-500 w-8 h-8 rounded-md text-zinc-900 hover:bg-sky-600 
     p-1 transition-all
      "
    >
      <FontAwesomeIcon icon={faPencil} className="w-5" />
    </Link>
{/* apagar */}
    <button
     
      className="bg-red-500 w-8 h-8 rounded-md text-zinc-900 hover:bg-sky-600 
     p-1 transition-all
      "
    >
      <FontAwesomeIcon icon={faTrash} className="w-4" />
    </button>
  </td>
</tr>
  )
}
