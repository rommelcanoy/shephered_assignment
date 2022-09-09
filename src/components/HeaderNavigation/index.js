/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logo from '../../images/logo.png';
import HeaderSearch from '../HeaderSearch';

const HeaderNavigation = () => {
  return (
    <div className='nav bg-[#F4F4F4] h-[72px] flex justify-between items-center px-[70px] py-[15px] '>
      <div className='flex gap-[8px] items-center'>
        <img src={logo} width={36} height={36} alt="shephered_logo" />
        <h1 className='text-2xl font-semibold'>Centralized Catalog</h1>
      </div>
      <div className='flex gap-[50px] items-center'>
        <HeaderSearch />
        <a href="#" className='text-xl leading-[20px] hover:text-[#6e6e6e]'>Tools</a>
        <a href="#" className='text-xl leading-[20px] hover:text-[#6e6e6e]'>Catalogs</a>
        <div className='flex items-center gap-[25px]'>
          <div className='relative hover:text-[#6e6e6e] cursor-pointer'>
            <div className='w-[24px] h-[24px] bg-[#FFF84E] rounded-full flex justify-center items-center absolute -right-4 -top-3'>
              <span className='font-semibold'>1</span>
            </div>
            <svg className='w-[25px] h-[25px]' fill='currentColor' xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path d="M5.55 19 2 15.45l1.4-1.4 2.125 2.125 4.25-4.25 1.4 1.425Zm0-8L2 7.45l1.4-1.4 2.125 2.125 4.25-4.25 1.4 1.425ZM13 17v-2h9v2Zm0-8V7h9v2Z" />
            </svg>
          </div>
          <div className='relative hover:text-[#6e6e6e] cursor-pointer'>
            <div className='w-[24px] h-[24px] bg-[#FFF84E] rounded-full flex justify-center items-center absolute -right-3 -top-3'>
              <span className='font-semibold'>1</span>
            </div>
            <svg className='w-[25px] h-[25px]' fill='currentColor' xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path d="M4 19v-2h2v-7q0-2.075 1.25-3.688Q8.5 4.7 10.5 4.2V2h3v2.2q2 .5 3.25 2.112Q18 7.925 18 10v7h2v2Zm8-7.5ZM12 22q-.825 0-1.412-.587Q10 20.825 10 20h4q0 .825-.587 1.413Q12.825 22 12 22Zm-4-5h8v-7q0-1.65-1.175-2.825Q13.65 6 12 6q-1.65 0-2.825 1.175Q8 8.35 8 10Z" />
            </svg>
          </div>
          <div className='cursor-pointer hover:text-[#6e6e6e]'>
            <svg className='w-[25px] h-[25px]' fill='currentColor' xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path d="m16 17-1.375-1.45 2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5ZM3 21V3h9v2H5v14h7v2Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderNavigation