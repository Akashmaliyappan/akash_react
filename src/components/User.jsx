import React from 'react'



const details = [
    { id: 1, name: 'Akash', job: 'Freelancer', profile:'./src/assets/Akash_5.jpg', skill:['Html','Css','Js','Bootrsap','Tailwind','React','Angular'] },
    { id: 2, name: 'John', job: 'Developer', profile:'./src/assets/7.jpg', skill:['Html','Css','Js','Bootrsap','Tailwind','React','Angular'] },
    { id: 3, name: 'Jane', job: 'Designer', profile:'./src/assets/2.jpg', skill:['Html','Css','Js','Bootrsap','Tailwind','React','Angular'] },
    { id: 4, name: 'Emily', job: 'Product Manager', profile:'./src/assets/3.jpg', skill:['Html','Css','Js','Bootrsap','Tailwind','React','Angular'] },
    { id: 5, name: 'Michael', job: 'Data Scientist ', profile:'./src/assets/4.jpg', skill:['Html','Css','Js','Bootrsap','Tailwind','React','Angular'] },
    { id: 6, name: 'Sophia', job: 'UX Researcher', profile:'./src/assets/5.jpg', skill:['Html','Css','Js','Bootrsap','Tailwind','React','Angular'] },
    { id: 7, name: 'David', job: 'DevOps Engineer', profile:'./src/assets/6.jpg', skill:['Html','Css','Js','Bootrsap','Tailwind','React','Angular'] },
    { id: 8, name: 'Ran', job: 'DevOps Engineer', profile:'./src/assets/7.jpg', skill:['Html','Css','Js','Bootrsap','Tailwind','React','Angular'] },
    { id: 8, name: 'Suresh', job: 'IAS', profile:'./src/assets/hero.png', skill:['Html','Css','Js','Bootrsap','Tailwind','React','Angular'] },
];


function User() {
    return (
        <div className='mt-9'>
            <ul className='grid grid-cols-3 gap-9 '>
                {details.map((info) => (
                    <li key={info.id} className=' bg-slate-800 rounded-2xl flex flex-col items-center justify-center pb-10 border-spacing-5 border-b-8 border-2 border-gray-500 overflow-hidden'>

                        <img src={info.profile}
                        alt={`${info.name}'s profile`}
                        className='  w-72 h-60  object-cover mb-4 rounded-2xl mt-9 ' />
                        <h2 className='text-white text-2xl font-bold'>{info.name}</h2>
                        <p className='text-white font-extralight text-slate-400'>{info.job}</p>
                        <p className='text-white text-left text-2xl w-full ps-9 my-4'>Skill</p>
                        
                        {info.skill && (
                            <ul className='text-white grid grid-cols-3 gap-3'>
                                {info.skill.map((skill, index) => (
                                    <li key={index} className='bg-slate-700 rounded-full px-4 py-2'>{skill}</li>
                                ))}
                            </ul>
                        )}
                        
                    </li>
                ))

                }
            </ul>
        </div>
    );
}

export default User