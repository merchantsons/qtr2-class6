import React from 'react';

const Body = () => {
    return (
        <div className="flex flex-col items-center bg-[#F3F3F3]">
            <div className="font-poppins flex flex-col lg:flex-row justify-center lg:justify-between mx-auto h-auto w-screen max-w-[140vmin] mt-[21vmin] p-[2vmax]">
                <div className="flex flex-col items-center lg:items-start -ml-[3.5vmin]">
                    <div>
                        <div className='h1 text-center lg:text-left w-full lg:w-[42vmin]'>
                            Hi I’m Mehmet Akif Karasu, 3D artist & sculptor.
                        </div>
                        <p className='h2 text-center lg:text-left w-full lg:w-[33vmin] mt-16'>
                            My work is mainly focused on third-dimension modeling, texturing, and rendering. I like exploring the creatures with a touch of dark surrealism for characters and production.
                        </p>
                        <p className='h2 text-center lg:text-left w-full lg:w-[21rem] mt-5'>
                            Now I’m an interactive media design student in Istanbul ⏤ currently freelancing and seeking internship opportunities.
                        </p>
                    </div>
                </div>
                <div className="proPic w-32 h-32 mx-auto lg:mx-0 mt-5 lg:mt-0"></div>
            </div>


            <div className="w-full max-w-[140vmin] mx-auto p-[1.25vmin]">
                <div className="flex flex-col lg:flex-row justify-between w-screen max-w-[50vmin] lg:text-left">
                    <div className="h3 text-center w-screen mt-4 text-black lg:w-[19vmin] lg:text-left">Main Software</div>
                    <div>
                        <div className="h3p text-center w-screen mt-4 lg:w-full lg:text-left">Pixologic ZBrush, Autodesk Maya, The Foundry Mari, Arnold Renderer, Blender, Forger</div>
                        <div className="h3p text-center w-screen mt-5 lg:w-full lg:text-left">Adobe CC, Figma, Ableton</div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-between w-screen max-w-[50vmin] lg:text-left">
                    <div className="h3 text-center w-screen mt-11 text-black lg:w-[20vmin] lg:text-left">Main Skills</div>
                    <div>
                        <div className="h3p text-center w-screen mt-4 lg:mt-10 lg:w-full lg:text-left">Organic and Polygonal Modeling, UV Layout, Texturing, Retopology, Illustration, Sound Design</div>
                    </div>
                </div>
                <div className="hr mt-[12vmin]"><hr /></div>

                <div className="font-poppins flex flex-col lg:flex-row justify-between mx-auto w-screen max-w-[140vmin]">
                    <div className="ls w-screen lg:w-96 mt-[8vmin] text-center lg:text-left">I am thrilled to answer to your next project   ➜</div>
                    <div>
                        <div className="ls text-center text-3xl w-screen lg:w-96 mt-[8vmin] mr-[5vmin] lg:text-left">makifkarasu@outlook.com</div>
                        <div className="text-sm  text-center w-screen lg:w-96 mt-[2vmin] lg:mr-[5vmin] lg:text-left">View Resume</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;
