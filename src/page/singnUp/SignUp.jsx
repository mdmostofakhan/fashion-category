import React from "react";
import { FaGoogle, FaFacebook, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const SignUp = () => {
  return (
    <>
      <div className="bg-[#C8C2BF] py-20">
        <div className="hero">
          <div className=" flex-col lg:flex-row-reverse">
            <div className="xl:max-w-full lg:max-w-3xl md:max-w-2xl max-w-sm flex-shrink-0 rounded-md shadow-md bg-white mx-1 md:mx-0 lg:mx-0 xl:mx-0 ">
              <form className="card-body lg:px-28 md:px-28 px-[16px] space-y-5">
                <div>
                  <p>Welcome to</p>
                  <Link to="/" className="">
                    <p className="logoFont mb-8 mt-3 text-[#03384D] lg:text-5xl text-3xl font-bold">
                      <span className="text-[#3B95B0] logoFont">Urban</span>
                      Utopia
                    </p>
                  </Link>
                </div>
                
                <div className="form-control">
                  <input
                    type="name"
                    required
                    placeholder="Full Name"
                    className="input placeholder-black input-bordered h-16 rounded-none border-black text-black text-xl"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="mobile"
                    required
                    placeholder="Mobile Number"
                    className="input placeholder-black input-bordered h-16 rounded-none border-black text-black text-xl"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="email"
                    required
                    placeholder="E-mail"
                    className="input placeholder-black input-bordered h-16 rounded-none border-black text-black text-xl"
                  />
                </div>
                <div className="form-control relative">
                  <input
                    type="password"
                    required
                    placeholder="Password"
                    className="placeholder-black input h-16 rounded-none input-bordered border-black text-black text-xl placeholder-dots"
                  />
                  <div className="absolute right-5 top-5">
                    <Icon icon="mdi:eye-off" className="text-3xl" />
                  </div>
                </div>
                <div className="form-control relative">
                  <input
                    type="password"
                    required
                    placeholder="Confirm Password"
                    className="placeholder-black input h-16 rounded-none input-bordered border-black text-black text-xl placeholder-dots"
                  />
                  <div className="absolute right-5 top-5">
                    <Icon icon="mdi:eye-off" className="text-3xl" />
                  </div>
                </div>
                <div className="form-control mt-10">
                  <input
                    type="submit"
                    value="Log in"
                    className="btn bg-[#0C4E67] text-white mt-4 normal-case text-[16px] h-16 rounded-none hover:bg-[#3B95B0]"
                  />
                  <label className="label flex lg:justify-end md:justify-end justify-center">
                    <Link
                      href="#"
                      className="label-text-alt link link-hover text-[16px] my-3 text-[#1877F2]"
                    >
                      Forgot password?
                    </Link>
                  </label>
                </div>
                <div className="text-center lg:px-20">
                  <p className="text-[17px]">
                    New Member?{" "}
                    <Link to="/signUp" className=" text-[#1877F2]">
                      Registration Now
                    </Link>
                  </p>
                  <div className="divider w-10/12 mx-auto text-black pt-8">
                    Or
                  </div>
                </div>
                <div className="flex flex-wrap gap-5 justify-between  my-8">
                  <Link className="btn bg-transparent rounded-none w-full lg:w-auto border border-black">
                    <div className="flex items-center gap-2">
                      <Icon
                        icon="entypo-social:google"
                        className="text-white bg-red-600 rounded-full p-2 text-3xl"
                      />
                      <span className="normal-case">Sing Up with Google</span>
                    </div>
                  </Link>
                  <Link className="btn bg-transparent border-1 rounded-none w-full lg:w-auto border border-black">
                    <div className="flex items-center gap-2">
                      <Icon
                        icon="ic:baseline-facebook"
                        className="text-3xl text-[#1877F2]"
                      />
                      <span className="normal-case">Sing Up with Facebook</span>
                    </div>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
       <div className="card grid-shrink-0 grid-cols-1 lg:gap-4 md:gap-4 gap-4 py-12 px-12 lg:grid-cols-3 shadow-2xl bg-base-100 md:grid-cols-2">
      <div className="card-body ">
        <div>
            <p className=' items-center text-black text-2xl font-semibold mb-2'>Welcome to</p>
            <Link to="/" className="">
                    <p className="logoFont mb-8 mt-3 text-[#03384D] lg:text-5xl text-3xl font-bold">
                      <span className="text-[#3B95B0] logoFont">Urban</span>Utopia
                    </p>
                  </Link>
        </div>
        <div className="form-control mt-6">
          <input type="text" placeholder="Full Name*" className=" border border-black ps-2 border-2  h-[60px]" />
        </div>
        <div className="form-control mt-6">
          <input type="text" placeholder="Mobile Number*" className=" border border-black ps-2 border-2  h-[60px]" />
        </div>
        <div className="form-control mt-6">
          <input type="text" placeholder="email" className=" border border-black ps-2 border-2  h-[60px]" />
        </div>
        <div className="form-control relative mt-2">
           <input type="text" placeholder="password"  className="border border-black ps-2 border-2  h-[60px] " />
             <span className='flex  absolute text-xl right-4 top-5'><FaEyeSlash></FaEyeSlash></span>
        </div>
        <div className="form-control relative mt-2">
           <input type="text" placeholder="confirm password"  className="border border-black ps-2 border-2  h-[60px] " />
             <span className='flex  absolute text-xl right-4 top-5'><FaEyeSlash></FaEyeSlash></span>
        </div>
        <div className="form-control mt-6">
          <button className=" bg-black h-[60px] text-lg text-white hover:bg-cyan-400">Sign Up</button>
        </div>
        <div>
           <label className="label flex justify-end">
            <a hre="#" className="label-text-alt link link-hover text-[#1877F2]">Forgot password?</a>
          </label>
           </div>
        <div className='flex justify-center text-center mt-8'>
            <p>New Member ? <span className='text-[#1877F2]'>Registration Now</span> </p>
        </div>
          <div className="flex mx-auto flex-col w-[60%] mt-5  border-opacity-50 ">
           <div className="divider">OR</div>
        </div>
            <div className='flex text-center mt-4 gap-4'>
                  <button className='flex grid-cols-1 lg:gap-4 border lg:grid-cols-2 md:border-black md:gap-2 md:grid-cols-2 py-3 px-8'><FaGoogle className='text-xl text-red-500'></FaGoogle>  <span>Sing Up with Google</span></button>
                  <button className='flex grid-cols-1  md:gap-2 lg:grid-cols-2 lg:gap-4 border border-black md:grid-cols-2  py-3 px-8'> <span className='text-xl text-blue-600'><FaFacebook></FaFacebook></span> Sing Up with Facebook</button>
           </div>
      </div>
    </div>
  </div>
</div> */}
    </>
  );
};

export default SignUp;
