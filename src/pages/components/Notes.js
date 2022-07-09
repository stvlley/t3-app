import React, {useState} from 'react'
import {AiOutlinePlusCircle} from 'react-icons/Ai'
import Modal from 'react-modal'

const Notes = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const handleNewEntryClick = () => {
        setModalIsOpen(true)
    }
    
    return (
        <div  className="hover:scale-105  duration-500 flex flex-col justify-center items-center text-center rounded   h-full w-full p-6">
            <div onClick={handleNewEntryClick}>
            <h2 className="text-lg text-gray-500 p-4 cursor-pointer">New Entry</h2>
            <button className='text-4xl'><AiOutlinePlusCircle /></button>
            </div>
            <Modal 
                style={{
                    overlay: {
                      position: 'fixed',
                      top: 100,
                      left: 100,
                      right: 100,
                      bottom: 100,
                      opacity: '90%',
                      backgroundColor: '#34d8eb',
                      borderRadius: '20px',
                      maxHeight: 350,
                      maxWidth: 835
                    },
                    content: {
                      position: 'absolute',
                      top: '40px',
                      left: '40px',
                      right: '40px',
                      bottom: '40px',
                      border: '1px solid #ccc',
                      background: '#fff',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '20px',
                      outline: 'none',
                      padding: '20px'
                    }
                  }}
                isOpen={modalIsOpen} ariaHideApp={false}>
                <div >
                  <span id='top-of-modal'>
                  <h2 className='text-3xl text-gray-500'>New Entry</h2>
                <button className='p-3 rounded-lg bg-[#d15660] m-3 text-gray-200' onClick={() => setModalIsOpen(false)}>Close</button>

                  </span>
                <div >
                    <textarea id='input-area' type='textarea' placeholder='...' />
                </div>
                <button className='text-gray-600 my-3 p-3 rounded-lg bg-[#34d8eb] '>Execute</button>
                </div>
            </Modal>
        </div> 
    )
}

export default Notes