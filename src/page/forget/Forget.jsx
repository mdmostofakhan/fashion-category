import React from 'react';
import { Link } from 'react-router-dom';

const Forget = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
    <div className="flex-col lg:flex-row-reverse">
    <div className="card grid-shrink-0  md:w-[800px] sm:w-[450px] md:py-10 sm:px-10  shadow-2xl bg-base-100 ">
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
            <span className="label-text font-semibold text-xl">Find Your Account</span>
          </label>
          <input type="text" disabled value="Please enter your email address  to search for your account." className=" border-1 p-8  ps-2 h-12" />
        </div>
        <div className="form-control">
          <input type="email" placeholder="Email address " className=" border-2 mt-2 border-black ps-2 h-12"/>
        </div>
        <div className=" flex justify-end  mt-4 gap-4">
          <button className=" bg-neutral-400 w-20 p-2 rounded text-white">Cancel</button>
          <button className=" bg-slate-800 w-20 p-2 rounded text-white">Search</button>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Forget;