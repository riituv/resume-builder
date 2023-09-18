import React, { useEffect, useState, useRef } from 'react'
import { AiFillLinkedin, AiFillGithub, AiTwotoneMail, AiFillPhone } from 'react-icons/ai'
import { BsCalendarDate, BsPaperclip } from "react-icons/bs";
import { FaMapPin } from "react-icons/fa";

const Resume = (props) => {
  const information = props.information;
  const sections = props.sections;
  const containerRef = useRef();

  const [column, setColumn] = useState([[], []]);
  const [source, setSource] = useState("");
  const [target, seTarget] = useState("");

  const info = {
    workExp: information[sections.workExp],
    project: information[sections.project],
    skills: information[sections.skills],
    education: information[sections.edu],
    basicInfo: information[sections.basic],
    other: information[sections.other],
    certi: information[sections.certi],
  };

  const getFormattedDate = (value) => {
    if (!value) return "";
    const date = new Date(value);

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const sectionDiv = {
    [sections.workExp]: (
      <div
        key={"workexp"}
        draggable
        onDragOver={() => seTarget(info.workExp?.id)}
        onDragEnd={() => setSource(info.workExp?.id)}
        className={`flex flex-col ${info.workExp.sectionTitle ? " " : null}`}>
        <div className=''>{info.workExp.sectionTitle}</div>
        <div className=''>
          {info.workExp?.details?.map((item, index) => (
            <div className={`capitalize mt-2 ${index === info.workExp.details.length - 1 ? '' 
            : 'border-b-2'}`} key={item.title}>
              {item.title ? (
                <p className='text-cyan-500'>{item.title}</p>
              ) : (
                <span />
              )}
              {item.companyName ? (
                <p className=''>{item.companyName}</p>
              ) : (
                <span />
              )}
              {item.certificationLink ? (
                <a className='flex flex-row gap-2 text-lg' href={item.certificationLink}>
                  <BsPaperclip color='rgb(6 182 212)' />
                  {item.certificationLink}
                </a>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className='flex flex-row gap-2 text-lg'>
                  <BsCalendarDate color='rgb(6 182 212)' /> {getFormattedDate(item.startDate)}-
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                <div />
              )}
              {item.location ? (
                <p className='flex flex-row gap-2 text-lg'>
                  <FaMapPin color='rgb(6 182 212)' /> {item.location}
                </p>
              ) : (
                <span />
              )}
              {item.points?.length > 0 ? (
                <ul className='list-disc pl-6 text-lg'>
                  {item.points?.map((elem, index) => (
                    <li className='' key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.project]: (
      <div
        key={"project"}
        draggable
        onDragOver={() => seTarget(info.project?.id)}
        onDragEnd={() => setSource(info.project?.id)}
        className={` flex flex-col ${info.project.sectionTitle ? "" : ''
          }`}
      >
        <div className=''>{info.project.sectionTitle}</div>
        <div className=''>
          {info.project?.details?.map((item, index) => (
            <div className={`capitalize mt-2 ${index === info.project.details.length - 1 ? '' 
            : 'border-b-2'}`} key={item.title}>
              {item.title ? (
                <p className='text-cyan-500'>{item.title}</p>
              ) : (
                <span />
              )}
              {item.link ? (
                <a className='flex flex-row gap-2 text-lg' href={item.deployedLink}>
                  <BsPaperclip color='rgb(6 182 212)'/>
                  {item.deployedLink}
                </a>
              ) : (
                <span />
              )}
              {item.github ? (
                <a className='flex flex-row gap-2 text-lg' href={item.githubLink}>
                  <BsPaperclip color='rgb(6 182 212)' />
                  {item.githubLink}
                </a>
              ) : (
                <span />
              )}
              {item.overview ? (
                <p className='flex flex-row gap-2 text-lg'>{item.overview} </p>
              ) : (
                <span />
              )}
              {item.points?.length > 0 ? (
                <ul className='list-disc pl-6 text-lg'>
                  {item.points?.map((elem, index) => (
                    <li className='' key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),

    [sections.edu]: (
      <div
        key={"education"}
        draggable
        onDragOver={() => seTarget(info.education?.id)}
        onDragEnd={() => setSource(info.education?.id)}
        className={` ${info.education.sectionTitle ? "" : ''
          }`}
      >
        <div className=''>
          {info.education?.sectionTitle}
        </div>
        <div className=''>
          {info.education?.details?.map((item) => (
            <div className=''>
              {item.title ? (
                <p className=''>{item.title}</p>
              ) : (
                <span />
              )}
              {item.college ? (
                <p className=''>{item.college}</p>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className=''>
                  <BsCalendarDate /> {getFormattedDate(item.startDate)} -
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    ),


    [sections.certi]: (
      <div
        key={"certi"}
        draggable
        onDragOver={() => seTarget(info.certi?.id)}
        onDragEnd={() => setSource(info.certi?.id)}
        className={`''${info.certi.sectionTitle ? "" : ''
          }`}
      >
        <div className=''>{info.certi?.sectionTitle}</div>
        <div className=''>
          {info.certi?.details?.map((item) => (
            <div className=''>
              {item.title ? (
                <p className=''>{item.title}</p>
              ) : (
                <span />
              )}
              {item.issuingOrg ? (
                <p className=''>{item.issuingOrg}</p>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className=''>
                  <BsCalendarDate /> {getFormattedDate(item.startDate)} -
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                ""
              )}
              {item.certificationLink ? (
                <a className='' href={item.certificationLink}>
                  <AiFillGithub />
                  {item.certificationLink}
                </a>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),

    [sections.skills]: (
      <div
        key={"skills"}
        draggable
        onDragOver={() => seTarget(info.skills?.id)}
        onDragEnd={() => setSource(info.skills?.id)}
        className={`'' ${info.skills.sectionTitle ? "" : ''
          }`}
      >
        <div className=''>{info.skills?.sectionTitle}</div>
        <div className=''>
          <p className=''>{info?.skills?.detail}</p>
        </div>
      </div>
    ),
    [sections.other]: (
      <div
        key={"other"}
        draggable
        onDragOver={() => seTarget(info.other?.id)}
        onDragEnd={() => setSource(info.other?.id)}
        className={`'' ${info.other.sectionTitle ? "" : ''
          }`}
      >
        <div className=''>{info.other?.sectionTitle}</div>
        <div className=''>
          <p className=''>{info?.other?.detail}</p>
        </div>
      </div>
    ),
    [sections.basic]: (
      <div
        key={"summary"}
        draggable
        onDragOver={() => seTarget(info.basicInfo?.id)}
        onDragEnd={() => setSource(info.basicInfo?.id)}
        className={`border-b-2 border-gray-700 ${info.basicInfo.sectionTitle ? "" : ''
          }`}
      >
        <div className=''>{info.basicInfo?.sectionTitle}</div>
        <div className=''>
          {Array.isArray(info.basicInfo?.details) ? (
            info.basicInfo.details.map((item) => (
              <div key={item.title} className=''>
                {item.title ? (
                  <p className=''>{item.summary}</p>
                ) : (
                  <span />
                )}
              </div>
            ))
          ) : (
            <span />
          )}
        </div>
      </div>

    ),
  };


  useEffect(() => {
    setColumn([
      [sections.edu, sections.skills, sections.certi],
      [sections.project, sections.workExp, sections.other],
    ]);
  }, []);

  return (
    <div className='flex flex-col min-height-900  min-width-500 h-fit shadow-md 
    shadow-gray-300 p-10 mx-auto w-2/3'>

      <div className='flex flex-col font-semibold capitalize'>

        <p className='text-2xl'>Name</p>
        <p className='text-l text-cyan-500'>Web Developer</p>

        <div className='flex flex-wrap gap-5 md:gap-10 mt-4 '>
          <a className='flex  gap-2'><AiTwotoneMail size={21} color='rgb(6 182 212)' />Email@email.com</a>
          <a className='flex  gap-2'><AiFillPhone size={21} color='rgb(6 182 212)' />999999999</a>
          <a className='flex  gap-2'><AiFillLinkedin size={21} color='rgb(6 182 212)' />linkedin link</a>
          <a className='flex  gap-2'><AiFillGithub size={21} color='rgb(6 182 212)' />github link</a>

        </div>

      </div>

      <div className='flex flex-col font-semibold text-xl'>

        <div className='w-full px-0 mt-4 font-semibold border-b-4 border-black'>
          {sections.basic}
        </div>

        <div className='flex md:flex-row flex-col md:gap-6 mt-3'>

          <div className='flex flex-col w-1/2 p-2 pl-0'>
            {column[0].map((item, index) => (
              <div key={index} className='mb-6'>
                <p className='font-semibold border-b-4 border-black'>{item}</p>
                {sectionDiv[item]}
              </div>

            ))}
          </div>

          <div className='flex flex-col w-1/2 p-2 pl-0 md:pr-0'>
            {column[1].map((item, index) => (
              <div key={index} className='mb-6'>
                <p className='font-semibold border-b-4 border-black'>{item}</p>
                {sectionDiv[item]}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Resume