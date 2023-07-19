import React, { useState } from 'react'
import Control from './ipControl'
import { useEffect } from 'react';


const Input = (props) => {
  const sections = props.sections;
  const information = props.information;


  const [activeSec, setActiveSec] = useState(Object.keys(sections)[0]);
  const [activeInfo, setActiveInfo] = useState(
    information[sections[Object.keys(sections)[0]]]
  );
  const [secTitle, setSecTitle] = useState(
    sections[Object.keys(sections)[0]]
  );
  const [values, setValues] = useState({
    name: activeInfo?.details?.name || "",
    email: activeInfo?.details?.email || "",
    phone: activeInfo?.details?.phone || "",
    linkedinLink: activeInfo?.details?.linkedin || "",
    githubLink: activeInfo?.details?.github || "",
    title: activeInfo?.details?.title || "",
    summary: activeInfo?.details?.summary || "",
  });


  const handlePointUpdate = (value, index) => {
    const tempValues = { ...values };
    if (!Array.isArray(tempValues.points)) tempValues.points = [];
    tempValues.points[index] = value;
    setValues(tempValues);
  };

  const workExperience = (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2  gap-6'>
        <Control label="Title"
          placeholder="Enter title ed. Frontend developer"
          defaultValue={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))} />
        <Control label="Company Name"
          placeholder="Enter company name eg. Amazon"
          defaultValue={values.companyName}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, companyName: event.target.value }))} />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Control label="Certificate Link"
          placeholder="Enter certificate link"
          defaultValue={values.certificationLink}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, certificationLink: event.target.value }))} />
        <Control label="Location"
          placeholder="Enter location eg. Remote"
          defaultValue={values.location}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, location: event.target.value }))} />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Control label="Start Date"
          type="date"
          placeholder="Enter start date of work"
          defaultValue={values.startDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))} />
        <Control label="End Date"
          type="date"
          placeholder="Enter last date of work"
          defaultValue={values.endDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))} />
      </div>
      <div className='grid grid-cols-1 gap-4'>
        <label className='text-xl font-semibold mt-4'>Enter work description</label>
        <Control placeholder="Line 1"
          defaultValue={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)} />
        <Control placeholder="Line 2"
          defaultValue={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)} />
        <Control placeholder="Line 3"
          defaultValue={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)} />
      </div>
    </div>
  );

  const projects = (
    <div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Control label="Title"
          placeholder="Enter title ed. Chat Application"
          defaultValue={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))} />
      </div>

      <Control label="Overview"
        placeholder="Enter basic overview of the project"
        defaultValue={values.overview}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, overview: event.target.value }))}
      />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Control label="Deployed Link"
          placeholder="Enter deployed link of project"
          defaultValue={values.deployedLink}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, deployedLink: event.target.value }))} />
        <Control label="Github Link"
          placeholder="Enter github link of project"
          defaultValue={values.githubLink}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, githubLink: event.target.value }))} />
      </div>

      <div className='grid grid-cols-1 gap-4'>
        <label className='text-xl font-semibold mt-4'>Enter project description</label>
        <Control placeholder="Line 1"
          defaultValue={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)} />
        <Control placeholder="Line 2"
          defaultValue={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)} />
        <Control placeholder="Line 3"
          defaultValue={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)} />
      </div>

    </div>
  );

  const education = (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Control label="Title"
          placeholder="Enter title ed. B. Tech"
          defaultValue={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))} />
      </div>
      <Control label="College/School Name"
        placeholder="Enter name of school/college"
        defaultValue={values.college}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, college: event.target.value }))}
      />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Control label="Start Date"
          type="date"
          placeholder="Enter start date of education"
          defaultValue={values.startDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))} />
        <Control label="End Date"
          type="date"
          placeholder="Enter last date of education"
          defaultValue={values.endDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))} />
      </div>
    </div>
  );

  const basic = (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Control label="Name"
          placeholder="Enter your full name eg. John Doe"
          defaultValue={values.name}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))} />
        <Control label="Title"
          placeholder="Enter title eg. Frontend developer"
          defaultValue={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))} />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Control label="LinkedIn Link"
          placeholder="Enter your Linkedin profile link"
          defaultValue={values.linkedinLink}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, linkedinLink: event.target.value }))} />
        <Control label="Github Link"
          placeholder="Enter your GitHub profile link"
          defaultValue={values.githubLink}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, githubLink: event.target.value }))} />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Control label="Email"
          placeholder="Enter your email"
          defaultValue={values.email}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))} />
        <Control label="phone"
          placeholder="Enter your phone number"
          defaultValue={values.phone}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, phone: event.target.value }))} />
      </div>
      <div className='flex flex-col gap-4'>
        <Control
          label="Summary"
          placeholder="Enter summary"
          defaultValue={values.summary}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, summary: event.target.value }))} />
      </div>
    </div>
  );

  const others = (
    <div className='grid grid-cols-1 gap-4'>
      <Control placeholder="Line 1"
        defaultValue={values.points ? values.points[0] : ""}
        onChange={(event) => handlePointUpdate(event.target.value, 0)} />
      <Control placeholder="Line 2"
        defaultValue={values.points ? values.points[1] : ""}
        onChange={(event) => handlePointUpdate(event.target.value, 1)} />
      <Control placeholder="Line 3"
        defaultValue={values.points ? values.points[2] : ""}
        onChange={(event) => handlePointUpdate(event.target.value, 2)} />
    </div>
  );

  const skills = (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Control label="Skill"
          placeholder="Enter skill"
          defaultValue={values.skills}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, skills: event.target.value }))} />
      </div>
    </div>
  );

  const certifications = (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Control label="Title"
          placeholder="Enter title ed. Azure Fundamentals"
          defaultValue={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))} />
        <Control label="Issuing Organization"
          placeholder="Enter name issuing organization"
          defaultValue={values.issuingOrganization}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, issuingOrganization: event.target.value }))}
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Control label="Issue Date"
          type="date"
          placeholder="Enter issue date of certificate"
          defaultValue={values.issueDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, issueDate: event.target.value }))} />
        <Control label="Expiration Date"
          type="date"
          placeholder="Enter expiration date of certificate"
          defaultValue={values.expirationDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, expirationDate: event.target.value }))} />
      </div>
      <div className='grid grid-cols-1 gap-6'>
        <Control label="Credential URL"
          placeholder="Enter credential url of certification"
          defaultValue={values.certificationLink}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, certificationLink: event.target.value }))} />
      </div>
    </div>

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

  useEffect(() => {
    const activeInfo = information[sections[activeSec]];
    setActiveInfo(activeInfo);
    setSecTitle(sections[activeSec]);
    setValues({
      name: activeInfo?.details?.name || "",
      overview: activeInfo?.details ? activeInfo?.details[0]?.overview || "" : "",
      link: activeInfo?.details ? activeInfo?.details[0]?.link || "" : "",
      certificationLink: activeInfo?.details ? activeInfo?.details[0]?.certificationLink || "" : "",
      deployedLink: activeInfo?.details ? activeInfo?.details[0]?.deployedLink || "" : "",
      startDate: activeInfo?.details ? activeInfo?.details[0]?.startDate || "" : "",
      endDate: activeInfo?.details ? activeInfo?.details[0]?.endDate || "" : "",
      points: activeInfo?.details
        ? activeInfo?.details[0]?.points
          ? [...activeInfo?.details[0]?.points] : ""
        : activeInfo?.points
          ? [...activeInfo.points]
          : "",
      email: activeInfo?.details?.email || "",
      phone: activeInfo?.details?.phone || "",
      linkedinLink: activeInfo?.details?.linkedin || "",
      githubLink: activeInfo?.details
      ? activeInfo?.details[0]?.githubLink || ""
      : activeInfo?.details?.githubLink || "",
      title: activeInfo?.details
        ? activeInfo?.details[0]?.title || ""
        : activeInfo?.details?.title || "",
      summary: activeInfo?.details?.summary || "",
    });
  }, [activeSec])


  const handleSubmission = () => {
    console.log(values);
  };

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

      <div className='p-10 flex flex-col gap-4 fixed-height-700'>

        <Control label="Title" placeholder="Enter section title"
          value={secTitle}
          onChange={(event) => setSecTitle(event.target.value)} />

        <div className='flex flex-wrap gap-10'>
          <div className='flex gap-5 items-center'>
            {
              activeInfo?.details && Array.isArray(activeInfo.details)
                ? activeInfo?.details?.map((item, index) => (
                  <p className='bg-cyan-300 text-gray-800 capitalize rounded-2xl p-2 text-lg'
                    key={item.title + index}>{sections[activeSec]} {index + 1}
                  </p>
                ))
                : ''
            }

          </div>
        </div>
        {generateBody()}

        <div className='py-10 flex items-center justify-end w-full'>
          <button className='bg-cyan-300 border p-2 border-gray-800 w-20
        rounded-md h-10 font-bold cursor-pointer hover:scale-105 duration-200'
            onClick={handleSubmission}>
            Save</button>
        </div>


      </div>

    </div>
  )
}


export default Input