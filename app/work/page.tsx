import React from 'react'
import Navbar from '../components/Navbar'
import Cube from '../components/Cube'
import Footer from '../components/Footer'
import Cube2 from '../components/Cube2'
import Cube3 from '../components/Cube3'

const Page = () => {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center bg-[#F3F3F3]">
                <div className="font-poppins flex flex-col lg:flex-row justify-center lg:justify-between mx-auto h-auto w-screen max-w-[140vmin] mt-[21vmin] p-[2vmax]">
                    <div className="flex flex-col items-center lg:items-start -ml-[3.5vmin]">
                        <div>
                            <div className='h1 text-center lg:text-left w-full lg:w-[42vmin]'>
                                Hello, I’m Mehmet Akif.
                            </div>
                            <p className='text-4xl rotate-90 text-center w-screen lg:w-[3vmin] mt-[13vmin] lg:text-left '>
                            ➔
                            </p>
                            <p className='h2 text-center lg:text-left w-full lg:w-[21rem] mt-5'>
                            </p>
                        </div>
                    </div>
                    <div className='mr-[10vmin]'>
                        <div className="text-2xl text-center w-[54vmin] h-32 ml-[19vmin] text-gray-600 mx-auto lg:mx-0 mt-5 lg:mt-0">A senior-year design student who trying to specialize in 3D modeling & texturing.</div>
                    </div>
                </div>
            </div>
            <Cube />
            <Cube2 />
            <Cube3 />
            <Footer />
        </div>
    )
}

export default Page