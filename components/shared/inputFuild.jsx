import React from 'react'

const InputFuild = () => {
  return (
     <div className="relative">
      <span className="absolute start-6 top-1/2 -translate-y-1/2 text-lg text-[#FC942A]">
        {icon}
      </span>
      <input type="text" placeholder={placeholder} className={className} />
    </div>
  )
}

export default InputFuild