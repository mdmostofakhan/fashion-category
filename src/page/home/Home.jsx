import React from 'react';
// import urban from '../../assets/UrbanUtopia.png'
import image1 from '../../assets/image 64.png'
import image2 from '../../assets/Frame 133.png'
import image3 from '../../assets/image 76.png'
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div className='container mx-auto '>
               <div className='space-x-10'>
                 <Link to="/login">Login</Link>
                <Link to="/sign">SignUp</Link>
                <Link to="/setPassword">Set Password</Link>
                <Link to="/codePassword">code password</Link>
                <Link to="/address">Address</Link>
               </div>
               
           <div className='flex justify-center items-center  mt-14'>
           <p>
          <Link to="/" className="">
                <p className="logoFont mb-8 mt-3 text-[#03384D] lg:text-5xl text-3xl font-bold">
                  <span className="text-[#3B95B0] logoFont">Urban</span>Utopia
                </p>
              </Link>
          </p>
           </div>
         <div className='grid justify-center gap-8 lg:grid-cols-3 md:grid-cols-3 grid-cols-1  mt-14'>
          <Link to="/woman">
          <div className="card  w-full card-side bg-base-100 shadow-xl">
             <figure className='w-full'>
              <img src={image1} alt="Movie"/>
            </figure> 
        </div>
          </Link>
         <Link to="/men">
         <div className="card  w-full card-side bg-base-100 shadow-xl">
             <figure className='w-full'>
                <img src={image2} alt="Movie"/>
            </figure>
        </div>
         </Link>
          <Link>
          <div className="card  w-full  card-side shadow-xl">
             <figure className='w-full'>
              <img src={image3} alt="Movie"/>
            </figure>
        </div>
          </Link>
         </div>
      </div>
    );
};

export default Home;
