import React from 'react'

function PageLoader() {
    return (
        <div className='h-screen w-screen bg-black/80 fixed backdrop-blur-sm z-50 top-0 left-0 flex'>
            <span className="m-auto bg-white loading loading-infinity w-[calc(30vw-40px)]"></span>
        </div>
    )
}

export default PageLoader