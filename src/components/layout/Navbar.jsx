import React, { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
    const location = useLocation();
    // console.log(location.pathname.split("/")[1]);
    return (
        <div className=' bg-base shadow-md'>
            <div className="navbar min-h-0 p-3 gap-2 container mx-auto">
                <div className="flex-1 relative">
                    {["listing", ""].includes(location.pathname.split("/")[1]) &&
                        <>
                            <svg className='absolute left-3 text-[#9B9B9B]' width="20" height="20" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M30.4127 35.9403C28.9236 34.4965 28.8821 32.1205 30.3199 30.6256V30.6256C31.7659 29.1221 34.1586 29.0803 35.6562 30.5324L42.865 37.5221C44.354 38.966 44.3955 41.342 42.9577 42.8369V42.8369C41.5117 44.3404 39.119 44.3821 37.6214 42.93L30.4127 35.9403ZM19.4512 29.1579C24.7558 29.1579 29.056 24.8402 29.056 19.514C29.056 14.1879 24.7558 9.87018 19.4512 9.87018C14.1466 9.87018 9.8464 14.1879 9.8464 19.514C9.8464 24.8402 14.1466 29.1579 19.4512 29.1579ZM19.4512 35.0281C10.9177 35.0281 4 28.0822 4 19.514C4 10.9459 10.9177 4 19.4512 4C27.9847 4 34.9024 10.9459 34.9024 19.514C34.9024 28.0822 27.9847 35.0281 19.4512 35.0281Z" fill="currentColor" />
                            </svg>
                            <input type="text" placeholder="Search" className=" !outline-0 text-lg pl-10 bg-[#D8D8D8] input h-[40px] max-w-md w-full" />
                        </>
                    }
                    {["detail"].includes(location.pathname.split("/")[1]) &&
                        <>
                            <h1 className=' font-semibold text-base'>Movie Details</h1>
                        </>
                    }
                </div>
                <div className="flex-none gap-2">
                    <button onClick={() => { navigate("/") }} className=" btn btn-sm h-[40px] w-[40px] btn-circle btn-ghost">
                        <svg className='m-auto' width="24" height="24" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 40V28H28V40H38V24H44L24 6L4 24H10V40H20Z" fill="currentColor" />
                        </svg>
                    </button>
                </div>
            </div>

        </div>

    )
}

export default Navbar