import React, { useState } from 'react'

const Filter = () => {
  const [collapse, setCollapse] = useState(false);

  const handleCollapse = () => {
    setCollapse(!collapse);
  }

  return (
    <div className='flex flex-col gap-1 flex-1 max-w-[1153px] w-full'>
      <div className='bg-[#F4F4F4] h-[83px] px-[38px] py-[30px] flex justify-between items-center'>
        <h3 className='font-bold text-xl leading-[20px]'>Filters</h3>
        <button onClick={handleCollapse}>
          Collapse
        </button>
      </div>
      {
        !collapse && <div className='bg-[#F4F4F4] flex flex-col gap-[33px] px-[38px] py-[32px] '>
          {/* branches */}
          <div className='flex flex-col gap-[22px] text-lg'>
            <h3 className='text-xl'>Branches</h3>
            <div className="ml-[20px] options flex flex-col gap-5">
              <label title="all">
                <input type="radio" name="branch" value="all" defaultChecked />
                <img alt='' />
                All
              </label>
              <label title="current">
                <input type="radio" name="branch" value="current" />
                <img alt='' />
                Current
              </label>
              <label title="specificSelection">
                <input type="radio" name="branch" value="specificSelection" />
                <img alt='' />
                Specific Selection
              </label>
            </div>
          </div>

          {/* brand */}
          <div className='flex flex-col gap-[22px] text-lg  radios'>
            <h3 className='text-xl'>Brand</h3>
            <div className="ml-[20px] options flex flex-col gap-5">
              <label title="all">
                <input type="radio" name="brand" value="all" defaultChecked />
                <img alt='' />
                All
              </label>
              <label title="specificSelection" className=''>
                <input type="radio" name="brand" value="specificSelection" />
                <img alt='' />
                Specific Selection
              </label>
            </div>

          </div>


          {/* Search in */}
          <div className='flex flex-col gap-[22px] text-lg'>
            <h3 className='text-xl'>Search in</h3>
            <div className='ml-[22px] flex flex-col gap-[22px] text-lg'>
              <div className='flex gap-[9px]'>
                <input type="checkbox" id="MarchantPartNo" value="marchantPartNo" className="css-checkbox" name='searchIn' defaultChecked />
                <label htmlFor="MarchantPartNo" className="css-label">Marchant Part Number</label>
              </div>
              <div className='flex gap-[9px]'>
                <input type="checkbox" id="branchPartNo" name="searchIn" className="css-checkbox" value="branchPartNo" defaultChecked />
                <label htmlFor="branchPartNo" className='css-label'>Branch Part Number</label>
              </div>
              <div className='flex gap-[9px]'>
                <input type="checkbox" id="designation" name="searchIn" className="css-checkbox" value="designation" defaultChecked />
                <label htmlFor="designation" className='css-label'>Designation</label>
              </div>
              <div className='flex gap-[9px]'>
                <input type="checkbox" id="attributes" name="searchIn" className="css-checkbox" value="attributes" defaultChecked />
                <label htmlFor="attributes" className='css-label'>Attributes</label>
              </div>
            </div>

          </div>
        </div>
      }
    </div>
  )
}

export default Filter