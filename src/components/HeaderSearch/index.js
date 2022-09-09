import React from 'react'

const HeaderSearch = () => {
  return (
    <input type="text" placeholder="Search" className="md:h-[49px] px-[15px] max-w-[628px] text-xl w-full leading-[20px] border-none focus:border-black focus:ring-0 hover:border-black" />
    // <input type="text" placeholder="Search" className="shrink md:h-[49px] px-[15px] max-w-[628px] w-full text-base md:text-xl leading-[20px]" />
  )
}

export default HeaderSearch