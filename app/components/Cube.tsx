import React from 'react';

const Cube = () => {
  return (
    <div className='mx-auto pb-[4vmin] pt-[10vmin] bg-[#F3F3F3]'>
      <div className='flex flex-col lg:flex-row items-center'>
        {/* Left Column */}
        <div className='w-full lg:w-1/2 ml-0 lg:ml-[35vmin] text-center lg:text-left px-4'>
          <div className='font-poppins text-sm lg:text-left'>01 / PROJECT NAME</div>
          <div className='font-poppins text-sm lg:w-[33vmin] lg:mt-[3vmin]'>Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.</div>
          <div className='font-poppins text-[#606060] text-xs lg:w-[33vmin] lg:mt-[4vmin]'>Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.</div>
          <div className='font-poppins text-sm mt-[15vmin] hover:underline cursor-pointer'>More shots from this project ↗</div>
        </div>     

        {/* Right Column */}
        <div className='w-full lg:w-1/2 mr-0 lg:mr-[35vmin] mt-[5vmin] lg:mt-0 px-4'>
          <div className='w-[65vmin] h-[36vmin] bg-[#606060] mx-auto'></div>        
        </div>        
      </div>

      <div className='hr mt-[10vmin] lg:mr-[35vmin] lg:ml-[35vmin]'><hr /></div>

      
    </div>
  );
}

export default Cube;
