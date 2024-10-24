import React from 'react';

const Cube3 = () => {
  return (
    <div className='mx-auto pb-[4vmin] pt-[10vmin] bg-[#F3F3F3]'>
      <div className='flex flex-col lg:flex-row items-center'>
        {/* Left Column */}
        <div className='w-full lg:w-1/2 ml-0 lg:ml-[35vmin] text-center lg:text-left px-4'>
          <div className='font-poppins text-sm lg:text-left'>02 / PROJECT NAME</div>
          <div className='font-poppins text-sm lg:w-[33vmin] lg:mt-[3vmin]'>Experimental creature modeling for school project.</div>
          <div className='font-poppins text-[#606060] text-xs lg:w-[33vmin] lg:mt-[4vmin]'></div>
          <div className='font-poppins text-sm mt-[25vmin] hover:underline cursor-pointer'>Project WIP</div>
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

export default Cube3;
