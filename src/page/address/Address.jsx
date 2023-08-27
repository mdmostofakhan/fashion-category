import React from 'react';

const Address = () => {
    return (
      <div className="hero min-h-screen bg-base-200">
      <div className="flex-col lg:flex-row-reverse my-10">
        <div className="card grid-shrink-0 lg:w-[900px] md:w-[750px] sm:w-[500px] w-full  py-6 md:py-10 px-4 md:px-8 lg:px-10 shadow-2xl bg-base-100 md:grid-cols-2">
          <div className="card-body">
            <h1 className='font-semibold text-xl'>Add New Address</h1>
            <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
              <input
                type="name"
                required
                placeholder="Write your name"
                className="input placeholder-black input-bordered rounded-none border-black text-black"
              />
            </div>
            {/* ... (other input fields) ... */}
            <div className="form-control">
             <label className="label">
                <span className="label-text">Mobile Number</span>
             </label>
           <input
                    type="name"
                    required
                    placeholder="Mobile Number"
                    className="input placeholder-black input-border rounded-none border-black text-black"
                  />
            </div>
            <div className="form-control">
                 <label className="label">
                    <span className="label-text">Address</span>
                </label>
                  <input
                    type="text"
                    required
                    placeholder="Write a your address"
                    className="input placeholder-black input-bordere rounded-none border-black text-black"
                  />
            </div>
            <div className="form-control">
                 <label className="label">
                 <span className="label-text">Area</span>
             </label>
               <input
                    type="text"
                    required
                    placeholder="Mirpur-2"
                    className="input placeholder-black input-bordere rounded-none border-black text-black"
                  />
            </div>
            <div className="form-control">
               <label className="label">
               <span className="label-text">City</span>
             </label>
              <input
                    type="text"
                    required
                    placeholder="Mirpur"
                    className="input placeholder-black input-bordere rounded-none border-black text-black"
                  />
            </div>
            <div className="form-control">
               <label className="label">
                 <span className="label-text">Province</span>
               </label>
              <input
                    type="text"
                    required
                    placeholder="Dhaka"
                    className="input placeholder-black input-bordere rounded-none border-black text-black"
                  />
            </div>
            <div className="form-control">
               <label className="label">
                 <span className="label-text">Land Mark </span>
               </label>
               <input
                    type="name"
                    required
                    placeholder="Mirpur commerce college"
                    className="input placeholder-black input-bordere rounded-none border-black text-black "
                  />
            </div>
            <div className=" flex justify-end mt-4">
               <button className=" bg-slate-800 w-20 p-4 text-white">Saved</button>
           </div>
          </div>
        </div>
      </div>
    </div>  
    );
};

export default Address; 