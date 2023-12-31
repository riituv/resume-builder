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

  //pre entered title in the resume
  const [secTitle, setSecTitle] = useState(
    sections[Object.keys(sections)[0]]
  );

  //default values
  //first section basic info is always displayed so only those values
  const [values, setValues] = useState({
    name: activeInfo?.detail?.name || "",
    email: activeInfo?.detail?.email || "",
    phone: activeInfo?.detail?.phone || "",
    linkedinLink: activeInfo?.detail?.linkedin || "",
    githubLink: activeInfo?.detail?.github || "",
    title: activeInfo?.detail?.title || "",
    summary: activeInfo?.detail?.summary || "",
  });

  //initially 0th index rahega
  //for adding multiple entries in work exp or projects
  const [activeDetails, setActiveDetails] = useState(0);

  //update points fn
  const handlePointUpdate = (value, index) => {
    const tempValues = { ...values };
    if (!Array.isArray(tempValues.points)) tempValues.points = [];
    tempValues.points[index] = value;
    setValues(tempValues);
  };

  //body for each section
  //to generate the body for generate fn
  const workExpBody = (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2  gap-6'>
        <Control label="Title"
          placeholder="Enter title eg. Frontend developer"
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))} />
        <Control label="Company Name"
          placeholder="Enter company name eg. Amazon"
          value={values.companyName}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, companyName: event.target.value }))} />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Control label="Certificate Link"
          placeholder="Enter certificate link"
          value={values.certificationLink}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, certificationLink: event.target.value }))} />
        <Control label="Location"
          placeholder="Enter location eg. Remote"
          value={values.location}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, location: event.target.value }))} />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Control label="Start Date"
          type="date"
          placeholder="Enter start date of work"
          value={values.startDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))} />
        <Control label="End Date"
          type="date"
          placeholder="Enter last date of work"
          value={values.endDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))} />
      </div>
      <div className='grid grid-cols-1 gap-4'>
        <label className='text-xl font-semibold mt-4'>Enter work description</label>
        <Control placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)} />
        <Control placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)} />
        <Control placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)} />
      </div>
    </div>
  );

  const projectBody = (
    <div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Control label="Title"
          placeholder="Enter title ed. Chat Application"
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))} />
      </div>

      <Control label="Overview"
        placeholder="Enter basic overview of the project"
        value={values.overview}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, overview: event.target.value }))}
      />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Control label="Deployed Link"
          placeholder="Enter deployed link of project"
          value={values.link}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, link: event.target.value }))} />
        <Control label="Github Link"
          placeholder="Enter github link of project"
          value={values.github}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, github: event.target.value }))} />
      </div>

      <div className='grid grid-cols-1 gap-4'>
        <label className='text-xl font-semibold mt-4'>Enter project description</label>
        <Control placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)} />
        <Control placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)} />
        <Control placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)} />
      </div>

    </div>
  );

  const eduBody = (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Control label="Title"
          placeholder="Enter title ed. B. Tech"
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))} />
      </div>
      <Control label="College/School Name"
        placeholder="Enter name of school/college"
        value={values.college}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, college: event.target.value }))}
      />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Control label="Start Date"
          type="date"
          placeholder="Enter start date of education"
          value={values.startDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))} />
        <Control label="End Date"
          type="date"
          placeholder="Enter last date of education"
          value={values.endDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))} />
      </div>
    </div>
  );

  const basicBody = (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Control label="Name"
          placeholder="Enter your full name eg. John Doe"
          value={values.name}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))} />
        <Control label="Title"
          placeholder="Enter title eg. Frontend developer"
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))} />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Control label="LinkedIn Link"
          placeholder="Enter your Linkedin profile link"
          value={values.linkedin}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, linkedin: event.target.value }))} />
        <Control label="Github Link"
          placeholder="Enter your GitHub profile link"
          value={values.github}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, github: event.target.value }))} />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Control label="Email"
          placeholder="Enter your email"
          value={values.email}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))} />
        <Control label="phone"
          placeholder="Enter your phone number"
          value={values.phone}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, phone: event.target.value }))} />
      </div>
      <div className='flex flex-col gap-4'>
        <Control
          label="Summary"
          placeholder="Enter summary"
          value={values.summary}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, summary: event.target.value }))} />
      </div>
    </div>
  );

  const otherBody = (
    <div className='grid grid-cols-1 gap-4'>
      <Control placeholder="Line 1"
        value={values.points ? values.points[0] : ""}
        onChange={(event) => handlePointUpdate(event.target.value, 0)} />
      <Control placeholder="Line 2"
        value={values.points ? values.points[1] : ""}
        onChange={(event) => handlePointUpdate(event.target.value, 1)} />
      <Control placeholder="Line 3"
        value={values.points ? values.points[2] : ""}
        onChange={(event) => handlePointUpdate(event.target.value, 2)} />
    </div>
  );

  const skillsBody = (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Control label="Title"
          placeholder="Enter title eg. Technical Skills"
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))} />
      </div>
      <div className='grid grid-cols-1'>
        <Control label="Skills"
          placeholder="Enter skills"
          value={values.skill}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, skill: event.target.value }))} />
      </div>
    </div>
  );

  const certiBody = (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Control label="Title"
          placeholder="Enter title ed. Azure Fundamentals"
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))} />
        <Control label="Issuing Organization"
          placeholder="Enter name issuing organization"
          value={values.issuingOrg}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, issuingOrg: event.target.value }))}
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Control label="Issue Date"
          type="date"
          placeholder="Enter issue date of certificate"
          value={values.startDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))} />
        <Control label="Expiration Date"
          type="date"
          placeholder="Enter expiration date of certificate"
          value={values.endDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))} />
      </div>
      <div className='grid grid-cols-1 gap-6'>
        <Control label="Credential URL"
          placeholder="Enter credential url of certification"
          value={values.certificationLink}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, certificationLink: event.target.value }))} />
      </div>
    </div>
  );

  //generate the body of each section
  //display body of the active section
  const generateBody = () => {
    switch (sections[activeSec]) {
      case sections.basic:
        return basicBody;

      case sections.workExp:
        return workExpBody;

      case sections.edu:
        return eduBody;

      case sections.project:
        return projectBody;

      case sections.skills:
        return skillsBody;

      case sections.certi:
        return certiBody;

      case sections.other:
        return otherBody;

      default:
        return null;
    }
  }

  //update info when active section is updated
  useEffect(() => {
    const activeInfo = information[sections[activeSec]];
    setActiveInfo(activeInfo);
    setSecTitle(sections[activeSec]);
    setActiveDetails(0);
    setValues({
      name: activeInfo?.detail?.name || "",
      email: activeInfo?.detail?.email || "",
      phone: activeInfo?.detail?.phone || "",
      linkedin: activeInfo?.detail?.linkedin || "",
      github: activeInfo?.details
        ? activeInfo?.details[0]?.github || ""
        : activeInfo?.detail?.github || "",
      title: activeInfo?.details
        ? activeInfo?.details[0]?.title || ""
        : activeInfo?.detail?.title || "",
      summary: activeInfo?.detail?.summary || "",

      companyName: activeInfo?.details ? activeInfo?.details[0]?.companyName || "" : "",
      startDate: activeInfo?.details ? activeInfo?.details[0]?.startDate || "" : "",
      endDate: activeInfo?.details ? activeInfo?.details[0]?.endDate || "" : "",
      certificationLink: activeInfo?.details ? activeInfo?.details[0]?.certificationLink || "" : "",
      location: activeInfo?.details ? activeInfo?.details[0]?.location || "" : "",

      college: activeInfo?.details ? activeInfo?.details[0]?.college || "" : "",

      overview: activeInfo?.details ? activeInfo?.details[0]?.overview || "" : "",
      link: activeInfo?.details ? activeInfo?.details[0]?.link || "" : "",

      skill: activeInfo?.details ? activeInfo?.details[0]?.skill || "" : "",

      issuingOrg: activeInfo?.details ? activeInfo?.details[0]?.issuingOrg || "" : "",

      points: activeInfo?.details
        ? activeInfo?.details[0]?.points
          ? [...activeInfo?.details[0]?.points] : ""
        : activeInfo?.points
          ? [...activeInfo.points]
          : "",
    });
  }, [activeSec]);


  //save button
  const handleSubmission = () => {
    switch (sections[activeSec]) {

      case sections.basic:
        {
          const tempDetails = {
            name: values.name,
            title: values.title,
            linkedin: values.linkedin,
            github: values.github,
            email: values.email,
            phone: values.phone,
            summary: values.summary
          }

          props.setInformation(prev => ({
            ...prev, [sections.basic]
              : {
              ...prev[sections.basic],
              detail: tempDetails,
              secTitle,
            }
          }));

          break;
        }

      case sections.workExp:
        {
          const tempDetails = {
            certificationLink: values.certificationLink,
            title: values.title,
            startDate: values.startDate,
            endDate: values.endDate,
            companyName: values.companyName,
            location: values.location,
            points: values.points
          }

          const tempDetail = [...information[sections.workExp]?.details];
          tempDetail[activeDetails] = tempDetails;

          props.setInformation(prev => ({
            ...prev, [sections.workExp]
              : {
              ...prev[sections.workExp],
              details: tempDetail,
              secTitle,
            }
          }));

          break;
        }

      case sections.edu:
        {
          const tempDetails = {
            college: values.college,
            title: values.title,
            startDate: values.startDate,
            endDate: values.endDate,
          }

          const tempDetail = [...information[sections.edu]?.details];
          tempDetail[activeDetails] = tempDetails;

          props.setInformation(prev => ({
            ...prev, [sections.edu]
              : {
              ...prev[sections.edu],
              details: tempDetail,
              secTitle,
            }
          }));

          break;
        }

      case sections.project:
        {
          const tempDetails = {
            overview: values.overview,
            title: values.title,
            link: values.link,
            github: values.github,
            points: values.points,
          }

          const tempDetail = [...information[sections.project]?.details];
          tempDetail[activeDetails] = tempDetails;

          props.setInformation(prev => ({
            ...prev, [sections.project]
              : {
              ...prev[sections.project],
              details: tempDetail,
              secTitle,
            }
          }));

          break;
        }

      case sections.skills:
        {
          const tempDetails = {
            skill: values.skill,
            title: values.title,
          }

          const tempDetail = [...information[sections.skills]?.details];
          tempDetail[activeDetails] = tempDetails;

          props.setInformation(prev => ({
            ...prev, [sections.skills]
              : {
              ...prev[sections.skills],
              details: tempDetail,
              secTitle,
            }
          }));

          break;
        }

      case sections.certi:
        {
          const tempDetails = {
            certificationLink: values.certificationLink,
            title: values.title,
            startDate: values.startDate,
            endDate: values.endDate,
            issuingOrg: values.issuingOrg,

          }

          const tempDetail = [...information[sections.certi]?.details];
          tempDetail[activeDetails] = tempDetails;

          props.setInformation(prev => ({
            ...prev, [sections.certi]
              : {
              ...prev[sections.certi],
              details: tempDetail,
              secTitle,
            }
          }));

          break;
        }

      case sections.other:
        {
          const tempDetails = {
            points: values.points,
          }

          props.setInformation(prev => ({
            ...prev, [sections.other]
              : {
              ...prev[sections.other],
              details: tempDetails,
              secTitle,
            }
          }));

          break;
        }
      default:
        break;

    }
  };

  //add new project or work
  const handleAddNew = () => {
    const details = activeInfo?.details;
    if (!details) return;
    const lastDetail = details.slice(-1)[0];
    if (!Object.keys(lastDetail).length) return;
    details.push({});

    props.setInformation(prev => ({
      ...prev, [sections[activeSec]]
        : {
        ...information[sections[activeSec]],
        details: details,
      },
    }));
    setActiveDetails(details?.length - 1);
  };

  //delete existing entry
  const handleDeleteDetail = (index) => {
    const details = activeInfo?.details ? [...activeInfo?.details] : "";
    if (!details) return;
    details.splice(index, 1);
    props.setInformation(prev => ({
      ...prev, [sections[activeSec]]
        : {
        ...information[sections[activeSec]],
        details: details,
      },
    }));
    setActiveDetails((prev) => (prev === index ? 0 : prev - 1));
  };

  //update active info when info is updated
  useEffect(() => {
    setActiveInfo(information[sections[activeSec]]);
  }, [information]);

  //update data when new entry or chip is created
  useEffect(() => {
    const activeInfo = information[sections[activeSec]];
    const details = activeInfo?.details;
    if (!details) return;

    setValues({
      github: activeInfo.details[activeDetails]?.github || "",
      title: activeInfo.details[activeDetails]?.title || "",
      points: activeInfo.details[activeDetails]?.points || "",
      companyName: activeInfo.details[activeDetails]?.companyName || "",
      startDate: activeInfo.details[activeDetails]?.startDate || "",
      endDate: activeInfo.details[activeDetails]?.endDate || "",
      certificationLink: activeInfo[activeDetails]?.details?.certificationLink || "",
      location: activeInfo.details[activeDetails]?.location || "",
      college: activeInfo.details[activeDetails]?.college || "",
      overview: activeInfo.details[activeDetails]?.overview || "",
      link: activeInfo.details[activeDetails]?.deployedLink || "",
      skill: activeInfo.details[activeDetails]?.skill || "",
      issuingOrg: activeInfo.details[activeDetails]?.issuingOrg || "",
    });
  }, [activeDetails]);


  return (
    <div className='flex flex-col pd-4 md:mx-auto shadow-md shadow-gray-300 mb-10'>

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

      <div className='p-10 flex flex-col gap-4 md:fixed-height-900'>

        <Control label="Title" placeholder="Enter section title"
          value={secTitle}
          onChange={(event) => setSecTitle(event.target.value)} />


        <div className='flex flex-wrap gap-5 items-center'>
          {
            activeInfo?.details && Array.isArray(activeInfo.details)
              ? activeInfo?.details?.map((item, index) => (
                <div className={`text-gray-800 capitalize rounded-2xl p-2 text-lg flex flex-row gap-2
                  cursor-pointer font-semibold ${activeDetails === index ? 'bg-cyan-400' : ''}`}
                  key={item.title + index}
                  onClick={() => setActiveDetails(index)}>
                  <p >
                    {sections[activeSec]} {index + 1}
                  </p>
                  <p onClick={(event) => {
                    event.stopPropagation();
                    handleDeleteDetail(index);
                  }}>x</p>
                </div>
              ))
              : ''
          }
          {
            activeInfo?.details && activeInfo?.details?.length > 0 ? (
              <div className='text-cyan-500 flex flex-wrap gap-10 
                rounded-2xl p-2 text-lg cursor-pointer font-semibold'
                onClick={handleAddNew}>+New</div>
            ) : (
              ""
            )
          }

        </div>


        {generateBody()}

        {/*save button */}
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