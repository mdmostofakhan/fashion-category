import React from 'react';
import { Link } from 'react-router-dom';

const SetPassword = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="flex-col lg:flex-row-reverse">
        <div className="card grid-shrink-0  gl:w-[900px] md:w-[750px] sm:w-[400px] py-10 px-10 shadow-2xl bg-base-100">
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
                <span className="label-text font-semibold text-xl">Set Your Password</span>
              </label>
              <input type="password" 
                  required  
                  placeholder="New password" 
                  className=" border-2 mt-2 border-black ps-2 h-12"/>
            </div>
            <div className="form-control">
              <input type="password"
                  required
                  placeholder="confirm password"
                  className=" border-2 mt-2 border-black ps-2 h-12"/>
            </div>
            <div className=" flex justify-end mt-4 gap-4">
              <button className=" bg-neutral-400 w-20 p-2 rounded text-white">Cancel</button>
              <button className=" bg-slate-800 w-20 rounded text-white">Saved</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SetPassword;