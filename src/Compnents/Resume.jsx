import React, { useEffect, useState, forwardRef } from 'react'
import { AiFillLinkedin, AiFillGithub, AiTwotoneMail, AiFillPhone } from 'react-icons/ai'
import { BsCalendarDate, BsPaperclip } from "react-icons/bs";
import { FaMapPin } from "react-icons/fa";

const Resume = forwardRef((props, ref) => {
  const information = props.information;
  const sections = props.sections;
  // const containerRef = useRef();

  const [column, setColumn] = useState([[], []]);
  // const [source, setSource] = useState("");
  // const [target, seTarget] = useState("");

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
        // draggable
        // onDragOver={() => seTarget(info.workExp?.id)}
        // onDragEnd={() => setSource(info.workExp?.id)}
        className={`flex flex-col ${info.workExp.secTitle ? " " : null}`}>
        <div className='font-semibold border-b-4 border-black'>{info.workExp.secTitle}</div>
        <div className=''>
          {info.workExp?.details?.map((item, index) => (
            <div className={`mt-2 ${index === info.workExp.details.length - 1 ? ''
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
                  <BsPaperclip className='my-auto' color='rgb(6 182 212)' />
                  {item.certificationLink}
                </a>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className='flex flex-row gap-2 text-lg'>
                  <BsCalendarDate className='my-auto' color='rgb(6 182 212)' /> {getFormattedDate(item.startDate)}-
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                <div />
              )}
              {item.location ? (
                <p className='flex flex-row gap-2 text-lg'>
                  <FaMapPin className='my-auto' color='rgb(6 182 212)' /> {item.location}
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
        // draggable
        // onDragOver={() => seTarget(info.project?.id)}
        // onDragEnd={() => setSource(info.project?.id)}
        className={` flex flex-col ${info.project.secTitle ? "" : ''
          }`}
      >
        <div className='font-semibold border-b-4 border-black'>{info.project.secTitle}</div>
        <div className=''>
          {info.project?.details?.map((item, index) => (
            <div className={`mt-2 ${index === info.project.details.length - 1 ? ''
              : 'border-b-2'}`} key={item.title}>
              {item.title ? (
                <p className='text-cyan-500'>{item.title}</p>
              ) : (
                <span />
              )}
              {item.overview ? (
                <p className='flex flex-row gap-2 text-lg'>{item.overview} </p>
              ) : (
                <span />
              )}
              {item.link ? (
                <a className='flex flex-row gap-1 text-lg' href={item.link}>
                  <BsPaperclip className='my-auto' color='rgb(6 182 212)' />
                  {item.link}
                </a>
              ) : (
                <span />
              )}
              {item.github ? (
                <a className='flex flex-row gap-2 text-lg' href={item.github}>
                  <AiFillGithub className='my-auto' color='rgb(6 182 212)' />
                  {item.github}
                </a>
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
        // draggable
        // onDragOver={() => seTarget(info.education?.id)}
        // onDragEnd={() => setSource(info.education?.id)}
        className={` flex flex-col ${info.education.secTitle ? "" : ''
          }`}
      >
        <div className='font-semibold border-b-4 border-black'>
          {info.education?.secTitle}
        </div>
        <div className=''>
          {info.education?.details?.map((item, index) => (
            <div className={`mt-2 ${index === info.skills.details.length - 1 ? ''
              : 'border-b-2'}`} key={item.title}>
              {item.title ? (
                <p className='text-cyan-500'>{item.title}</p>
              ) : (
                <span />
              )}
              {item.college ? (
                <p className=''>{item.college}</p>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className='flex flex-row gap-2 text-lg'>
                  <BsCalendarDate className='my-auto' color='rgb(6 182 212)' /> {getFormattedDate(item.startDate)} -
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
        // draggable
        // onDragOver={() => seTarget(info.certi?.id)}
        // onDragEnd={() => setSource(info.certi?.id)}
        className={`flex flex-col ${info.certi.secTitle ? "" : ''
          }`}
      >
        <div className='font-semibold border-b-4 border-black'>{info.certi?.secTitle}</div>
        <div className=''>
          {info.certi?.details?.map((item, index) => (
            <div className={`mt-2 ${index === info.certi.details.length - 1 ? ''
              : 'border-b-2'}`} key={item.title}>
              {item.title ? (
                <p className='text-cyan-500'>{item.title}</p>
              ) : (
                <span />
              )}
              {item.issuingOrg ? (
                <p className=''>{item.issuingOrg}</p>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className='flex flex-row gap-2 text-lg'>
                  <BsCalendarDate className='my-auto' color='rgb(6 182 212)' /> {getFormattedDate(item.startDate)} -
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                ""
              )}
              {item.certificationLink ? (
                <a className='flex flex-row gap-2 text-lg' href={item.certificationLink}>
                  <BsPaperclip className='my-auto' color='rgb(6 182 212)' />
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
        // key={"skills"}
        // draggable
        // onDragOver={() => seTarget(info.skills?.id)}
        // onDragEnd={() => setSource(info.skills?.id)}
        className={`'' ${info.skills.secTitle ? "" : ''
          }`}
      >
        <div className='font-semibold border-b-4 border-black'>{info.skills?.secTitle}</div>
        <div className=''>
          {info.skills?.details?.map((item, index) => (
            <div className={`mt-2 ${index === info.skills.details.length - 1 ? ''
              : 'border-b-2'}`} key={item.title}>
              {item.title ? (
                <p className='text-cyan-500'>{item.title}</p>
              ) : (
                <span />
              )}
              {item.skill ? (
                <p className=''>{item.skill}</p>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),

    [sections.other]: (
      <div
        // key={"other"}
        // draggable
        // onDragOver={() => seTarget(info.other?.id)}
        // onDragEnd={() => setSource(info.other?.id)}
        className={`'' ${info.other.secTitle ? "" : ''
          }`}
      >
        <div className='font-semibold border-b-4 border-black'>{info.other?.secTitle}</div>
        <div className=''>
          <p className=''>{info.other?.details?.points?.length > 0 ?
            (
              <ul className='list-disc pl-6 text-lg'>
                {info.other.details.points?.map((elem, index) => (
                  <li className='' key={elem + index}>
                    {elem}
                  </li>
                ))}
              </ul>
            ) : (
              <span />
            )}</p>
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

  // const swapSourceTarget = (source, target) => {
  //   if (!source || !target) return;
  //   const tempColumns = [[...column[0]], [...column[1]]];

  //   let sourceRowIndex = tempColumns[0].findIndex((item) => item === source);
  //   let sourceColumnIndex = 0;
  //   if (sourceRowIndex < 0) {
  //     sourceColumnIndex = 1;
  //     sourceRowIndex = tempColumns[1].findIndex((item) => item === source);
  //   }

  //   let targetRowIndex = tempColumns[0].findIndex((item) => item === target);
  //   let targetColumnIndex = 0;
  //   if (targetRowIndex < 0) {
  //     targetColumnIndex = 1;
  //     targetRowIndex = tempColumns[1].findIndex((item) => item === target);
  //   }

  //   const tempSource = tempColumns[sourceColumnIndex][sourceRowIndex];
  //   tempColumns[sourceColumnIndex][sourceRowIndex] =
  //     tempColumns[targetColumnIndex][targetRowIndex];

  //   tempColumns[targetColumnIndex][targetRowIndex] = tempSource;

  //   setColumn(tempColumns);
  // };

  // useEffect(()=>{
  //     if(!source || !target) return;
  //     swapSourceTarget(source, target);
  // }, [source]);

  // console.log(source, target);

  return (
    <div ref={ref} className='flex flex-col min-height-900  min-width-500 h-fit shadow-md 
    shadow-gray-300 p-10 mx-auto w-2/3'>

      <div className='flex flex-col font-semibold capitalize'>

        <p className='text-2xl'>{info.basicInfo?.detail?.name}</p>
        <p className='text-l text-cyan-500'>{info.basicInfo?.detail?.title}</p>

        <div className='flex flex-wrap gap-5 md:gap-10 mt-4 '>

          {info.basicInfo?.detail?.email ?
            (<a className='flex  gap-2'>
              <AiTwotoneMail size={21} color='rgb(6 182 212)' />
              {info.basicInfo?.detail?.email}</a>
            ) : <span />}

          {info.basicInfo?.detail?.phone ?
            (<a className='flex  gap-2'>
              <AiFillPhone size={21} color='rgb(6 182 212)' />
              {info.basicInfo?.detail?.phone}</a>
            ) : <span />}

          {info.basicInfo?.detail?.linkedin ?
            (<a className='flex  gap-2'>
              <AiFillLinkedin size={21} color='rgb(6 182 212)' />
              {info.basicInfo?.detail?.linkedin}</a>
            ) : <span />}

          {info.basicInfo?.detail?.github ?
            (<a className='flex  gap-2'>
              <AiFillGithub size={21} color='rgb(6 182 212)' />
              {info.basicInfo?.detail?.github}</a>
            ) : <span />}

        </div>

      </div>

      <div className='flex flex-col font-semibold text-xl'>

        <div className='w-full px-0 mt-4 font-semibold border-b-4 border-black'>
          {sections.basic}
        </div>
        <div className=' font-normal'>
          {info.basicInfo?.detail?.summary}
        </div>

        <div className='flex md:flex-row flex-col md:gap-6 mt-3'>

          <div className='flex flex-col w-1/2 p-2 pl-0'>
            {column[0].map((item, index) => (
              <div key={index} className='mb-6'>
                <div className='font-normal'>{sectionDiv[item]}</div>
              </div>

            ))}
          </div>

          <div className='flex flex-col w-1/2 p-2 pl-0 md:pr-0'>
            {column[1].map((item, index) => (
              <div key={index} className='mb-6'>
                <div className='font-normal'>{sectionDiv[item]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
});

export default Resume