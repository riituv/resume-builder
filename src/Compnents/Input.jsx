import React, {useState} from 'react'

const Input = (props) => {
  const sections = props.sections;

  const[activeSec, setActiveSec]=useState(Object.keys(sections)[0]);


  return (
    <div className='flex flex-col pd-4 mx-auto shadow-md shadow-gray-300'>

      <div className='flex gap-10 p-10 border-b-2 border-gray-300 text-xl font-semibold'>

        {Object.keys(sections)?.map((key) => ( /*retrieve the keys of the object, 
        ?: if obj null then skip this and not throw an error*/
        <div className={`cursor-pointer ${activeSec === key ? 'text-cyan-500 border-b-2 border-cyan-500' : ''}`}
        key={key}
          onClick={()=>setActiveSec(key)}
          >
            {sections[key]}
          </div>))
        }

      </div>
      
      <div>
      </div>

    </div>
  )
}

export default Input