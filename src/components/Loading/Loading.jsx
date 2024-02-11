import React from 'react';
import { LoaderIcon } from 'react-hot-toast';

const Loading = () => {
    return (
        <div className='flex min-w-screen min-h-screen justify-center items-center bg-base-100'>
            <LoaderIcon className='w-8 h-8'/>
        </div>
    );
};

export default Loading;

