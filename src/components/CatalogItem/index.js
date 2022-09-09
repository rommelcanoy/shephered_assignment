import React from 'react'

const CatalogItem = ({item}) => {
  
  return (
    <div className='px-[15px] py-[20px] md:px-[39px] md:py-[30px]'>
      <div className='font-black text-2xl mb-[30px]'>
        {item.name}
      </div>
      <div className='mb-[30px] color text-[#797777] text-lg'>
        {item.description}
      </div>
      <div className='text-[#797777] text-lg'>
        <div>
          Manufacturer M12312 Part Number: <span className='font-bold text-lg'>{item.partNumber}</span>
        </div>
        <div>
          {item.found}
        </div>
      </div>
    </div>
  )
}

export default CatalogItem