import React, { useState } from 'react'
import Control from './ipControl'


const Input = (props) => {
  const sections = props.sections;

  const [activeSec, setActiveSec] = useState(Object.keys(sections)[0]);

  const workExperience = (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2  gap-6'>
        <Control label="Title"
          placeholder="Enter title ed. Frontend developer" />
        <Control label="Company Name"
          placeholder="Enter company name eg. Amazon" />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Control label="Certificate Link"
          placeholder="Enter certificate link" />
        <Control label="Location"
          placeholder="Enter location eg. Remote" />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Control label="Start Date"
          type="date"
          placeholder="Enter start date of work" />
        <Control label="End Date"
          type="date"
          placeholder="Enter last date of work" />
      </div>
      <div className='grid grid-cols-1 gap-4'>
        <label className='text-xl font-semibold mt-4'>Enter work description</label>
        <Control placeholder="Line 1" />
        <Control placeholder="Line 2" />
        <Control placeholder="Line 3" />
      </div>
    </div>
  );

  const projects = (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Control label="Title"
          placeholder="Enter title ed. Chat Application" />
      </div>
      <Control label="Overview"
        placeholder="Enter basic overview of the project"
      />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Control label="Deployed Link"
          placeholder="Enter deployed link of project" />
        <Control label="Github Link"
          placeholder="Enter github link of project" />
      </div>
      <div className='grid grid-cols-1 gap-4'>
        <label className='text-xl font-semibold mt-4'>Enter project description</label>
        <Control placeholder="Line 1"></Control>
        <Control placeholder="Line 2"></Control>
        <Control placeholder="Line 3"></Control>
      </div>
    </div>
  );

  const education = (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Control label="Title"
          placeholder="Enter title ed. B. Tech" />
      </div>
      <Control label="College/School Name"
        placeholder="Enter name of school/college"
      />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Control label="Start Date"
          type="date"
          placeholder="Enter start date of education" />
        <Control label="End Date"
          type="date"
          placeholder="Enter last date of education" />
      </div>
    </div>
  );

  const basic = (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Control label="Name"
          placeholder="Enter your full name eg. Ritu Vyas" />
        <Control label="Title"
          placeholder="Enter title eg. Frontend developer" />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Control label="LinkedIn Link"
          placeholder="Enter your Linkedin profile link" />
        <Control label="Github Link"
          placeholder="Enter your GitHub profile link" />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Control label="Email"
          placeholder="Enter your email" />
        <Control label="phone"
          placeholder="Enter your phone number" />
      </div>
      <div className='flex flex-col gap-4'>
        <Control
          label="Summary"
          placeholder="Enter summary" />
      </div>
    </div>
  );

  const others = (
    <div>
      <Control
        label="Other"
        placeholder="Enter any other details you want to add" />
    </div>
  );

  const skills = (
    <div></div>
  );

  const certifications = (
    <div></div>

  );

  const generateBody = () => {
    switch (sections[activeSec]) {
      case sections.basic:
        return basic;

      case sections.workExp:
        return workExperience;

      case sections.edu:
        return education;

      case sections.project:
        return projects;

      case sections.skills:
        return skills;

      case sections.certi:
        return certifications;

      case sections.other:
        return others;

      default:
        return null;
    }
  }

  return (
    <div className='flex flex-col pd-4 md:mx-auto shadow-md shadow-gray-300'>

      <div className='flex lg:gap-10 md:gap-4 gap-5 md:flex-row flex-col p-10 border-b-2
       border-gray-300 text-xl font-semibold md:mx-auto'>

        {Object.keys(sections)?.map((key) => ( /*retrieve the keys of the object, 
        ?: if obj null then skip this and not throw an error*/
          <div className={`cursor-pointer ${activeSec === key ? 'text-cyan-500 border-b-2 border-cyan-500' : ''}`}
            key={key}
            onClick={() => setActiveSec(key)}
          >
            {sections[key]}
          </div>))}
      </div>

      <div className='p-5 flex flex-col gap-20 '>
        
        {generateBody()}
      </div>

    </div>
  )
}

export default Input