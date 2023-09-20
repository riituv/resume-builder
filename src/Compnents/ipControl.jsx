import React from 'react'

const ipControl = ({label,value, onChange, ...props}) => {
  return (
    <div className='flex flex-col gap-3'>
    {label && <label className='text-xl font-semibold mt-5 capitalize'>{label}
    </label>}
    <input type="text" className='p-2 text-xl border rounded-md border-gray-500
    hover:border-gray-800 focus:outline-none focus:border-cyan-500' 
    value={value || ''} 
    onChange={onChange} 
    {...props}/>
    </div>
  )
}

export default ipControl