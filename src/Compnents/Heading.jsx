import React,{useState} from 'react'
import Input from './Input'

const Heading = () => {
    // sections for input in the resume 
    const sections={
        basic: "Basic Info",
        workExp: "Work Experience",
        edu: "Education",
        project: "Projects",
        skills: "Skills",
        certi: "Certifications",
        other: "Other"
    };

    // all resume information
    const[resumeInfo, setResumeInfo]=useState({
        [sections.basic]:{
            id:sections.basic,
            secTitle: sections.basic,
            details:{},
        },
        [sections.workExp]:{
            id:sections.workExp,
            secTitle: sections.workExp,
            details:[],
        },
        [sections.edu]:{
            id:sections.edu,
            secTitle: sections.edu,
            details:[],
        },
        [sections.project]:{
            id:sections.project,
            secTitle: sections.project,
            details:[],
        },
        [sections.skills]:{
            id:sections.skills,
            secTitle: sections.skills,
            points:[],
        },
        [sections.certi]:{
            id:sections.certi,
            secTitle: sections.certi,
            details:[],
        },
        [sections.other]:{
            id:sections.other,
            secTitle: sections.other,
            details:"",
        }
    });

    return (
        <div className='flex flex-col mt-8 w-full 
        md:mt-10 p-4 mx-auto md:p-10 '>
            <div className='flex flex-col w-full md:flex-row mb-8'>
                <div className='text-gray-800 flex  md:justify-start justify-center 
            w-full md:w-1/3 mb-4 '>
                    <h2 className='text-2xl font-bold'>Resume Builder</h2>
                </div>

                <div className='justify-center md:justify-end w-full flex '>
                    <a download={true} className='bg-cyan-200 border p-2 border-gray-800 
            rounded-md h-10 w-30 font-bold cursor-pointer hover:scale-105 duration-200'>
                        Download</a>
                </div>
                
            </div>
            <Input sections={sections} information={resumeInfo}/>
        </div>
    )
}

export default Heading