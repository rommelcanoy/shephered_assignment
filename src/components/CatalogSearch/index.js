import React from 'react'

const CatalogSearch = () => {
  return (
    // <div className='flex w-full max-w-[1153px] h-[60px] md:h-[83px] md:gap-[39px] flex-none'>
    <div className='flex  h-[60px] md:h-[83px] md:gap-[39px] flex-none'>
      <div className='bg-[#F4F4F4]  flex-1 flex justify-center items-center px-[15px] py-[15px] md:px-[34px] md:py-[18px]'>
        <input placeholder='Search here' type="text" className="px-[20px] py-[15px] bg-white border-b-4 border-t-0 border-r-0 border-l-0 border-black focus:border-black focus:ring-0 hover:border-black  w-full h-full font-bold" />
      </div>
      <button className='bg-[#FFF84E] hover:bg-[#e4de45] flex-none h-full w-[56px] md:w-[112px] flex justify-center items-center'>
        <div className='font-extrabold text-xl md:text-4xl leading-[0px]'>{`->`}</div>
      </button>
    </div>
  )
}

export default CatalogSearch