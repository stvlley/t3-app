import React from 'react'
import {AiOutlinePlusCircle} from 'react-icons/Ai'
const Notes = () => {

    const handleNewEntryClick = () => {
        console.log('hello')
    }
    
    return (
        <div className="hover:scale-105  duration-500 flex flex-col justify-center items-center text-center rounded   h-full w-full p-6">
            <div onClick={handleNewEntryClick}>
            <h2 className="text-lg text-gray-500 p-4 cursor-pointer">New Entry</h2>
            <button className='text-4xl'><AiOutlinePlusCircle /></button>
            </div>
        </div> 
    )
}

export default Notes