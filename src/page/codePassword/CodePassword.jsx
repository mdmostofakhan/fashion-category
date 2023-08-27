import React from 'react';
import { Link } from 'react-router-dom';



const CodePassword = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="flex-col lg:flex-row-reverse">
        <div className="card grid-shrink-0 lg:w-[900]  md:w-[750px] sm:w-[350] py-10 px-10 shadow-2xl bg-base-100 ">
          <div className="card-body ">
              <p>
              <Link to="/" className="">
                    <p className="logoFont text-center mb-8 mt-3 text-[#03384D] lg:text-5xl text-3xl font-bold">
                      <span className="text-[#3B95B0] logoFont">Urban</span>Utopia
                    </p>
                  </Link>
              </p>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-xl">We'll send you a code to your email address</span>
              </label> 
                     <div className='flex border-2 p-4 justify-between '>
                         <div className=''>
                                <p className='pb-3'>We can send a login code to:</p> 
                                <p className='pb-3'>n..........@............</p>
                                <p className='mb-2 mt-2'>01........................</p>
                         </div>
                          <div className='text-center'>
                               <img className='w-[90px]  mb-1 h-[90px]' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="" />
                               <h2>Sabbir Khan </h2>
                          </div>
                     </div>
            </div>
            <div className="form-control">
              <input type="email" placeholder="Email address " className=" border-2 mt-2 border-black ps-2 h-12"/>
            </div>
            <div className=" flex justify-end mt-4 gap-4">
              <button className=" bg-neutral-400 w-20 p-2 rounded text-white">Cancel</button>
              <button className=" bg-slate-800 w-20 rounded text-white">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default CodePassword;