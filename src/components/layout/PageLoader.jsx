import React from 'react';

function PageLoader() {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/80 backdrop-blur-sm z-40 flex">
            <span className="m-auto bg-white loading loading-infinity w-[calc(30vw-40px)]"></span>
        </div>
    );
}

export default PageLoader;
