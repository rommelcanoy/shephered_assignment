import React from 'react'

const CatalogSearch = () => {
  return (
    <div className='flex  w-[1153px] h-[83px] gap-[39px] flex-none'>
      <div className='bg-[#F4F4F4]  flex-1 flex justify-center items-center px-[34px] py-[18px]'>
        <input type="text" className="px-[20px] py-[15px] bg-white border-b-4 border-t-0 border-r-0 border-l-0 border-black focus:border-black focus:ring-0 hover:border-black  w-full h-full font-bold" />
      </div>
      <button className='bg-[#FFF84E] hover:bg-[#e4de45] flex-none h-full w-[112px] flex justify-center items-center'>
        <div className='font-extrabold text-4xl leading-[0px]'>{`->`}</div>
      </button>
    </div>
  )
}

export default CatalogSearch