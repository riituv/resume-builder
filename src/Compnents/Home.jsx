import React from 'react'
import photo from '../Assets/resume-img.jpg'
const Home = () => {
    return (
        <div className='bg-cyan-200 text-black w-full flex
        flex-col items-center justify-center md:p-20 p-8 mx-auto'>

            <div className='flex flex-col md:flex-row items-center'>

                <div className='flex flex-col mr-8 justify-center'>

                    <h2 className='text-4xl font-bold sm:text-5xl'>
                        Resume Builder</h2>
                    <p className='text-2xl text-gray-700 font-bold mt-4'>Build your Resume in minutes.</p>
                    <p className='text-xl text-gray-700 mt-2'>@riitu</p>
                
                </div>

                <div className='md:mt-0 mt-10'>
                    <img src={photo} alt="my profile"
                        className='rounded-2xl mx-auto w-50 h-80 md-w-full' />
                </div>

            </div>
            
        </div>
    )
}

export default Home