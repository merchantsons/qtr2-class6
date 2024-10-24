import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#F3F3F3]'>
          <div className='footer flex justify-between mx-auto w-screen max-w-[140vmin] pt-[22vmin] p-[1vmin] bg-[#F3F3F3]'>
                <div className='w-[70vmin] text-blue-800 bg-[#F3F3F3]'>Mehmet Akif Karasu ⏤ 2020</div>

                <div className='flex gap-8 justify-end w-screen bg-[#F3F3F3]'> 
                  <div>Artstation</div>
                  <div>Linkedin</div>
                  <div>Twitter</div>
                </div>
           </div>
           <div className='font-sans text-[1.5vmin] text-center bg-yellow-950 absulote text-gray-200'>All ©️ Rights Are Reserved Designed By Merchantsons - GIAIC # 00037391        (Class Assignement Q2-Class6 / 22-10-2024)</div>
    </div>
  )
}

export default Footer