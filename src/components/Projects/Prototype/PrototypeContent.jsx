import React from 'react';
import { Link } from 'react-router-dom';

const PrototypeContent = () => {
    return (
        <div className="container mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] md:px-0 px-4">
            <div className='grid md:grid-cols-12 gap-4'>
                <div className='md:col-span-10 md:col-start-2 text-justify'>
                <p className="mt-10 mb-4"><b className='text-primary text-[25px]'>Shopping Interaction</b></p>
                <p>I have crafted Shopping Interactions using Figma, which entails dynamically adjusting colors based on user choices of color and size.</p>
                <div className="my-6">
                    <video className='max-h-[70vh] mx-auto' src="/videos/3_4_Shopping.mp4" playsInline loop autoPlay muted></video>
                </div>
                <p className="mt-10 mb-4"><b className='text-primary text-[25px]'>Checkout  Interaction</b></p>
                <p>I designed a website from scratch using WordPress. However, before proceeding, I also developed Figma Checkout Interactions to visualize how the user experience would look. This project was completed during term 1 at BCIT. You can check it out at Venus Underwear. <br />
                    <Link to="https://1189week3.em-venus.com/">https://1189week3.em-venus.com/</Link></p>
                <div className="my-6 bg-[#FBE7FA] md:pt-20 pt-12 md:px-32 px-12">
                    <video className='bg-[url("/images/video-bg.png")] bg-cover shadow-xl p-4' src="/videos/Venus.mp4" playsInline loop autoPlay muted></video>
                    <p className='md:text-5xl text-xl font-bold text-white md:py-6 py-4 px-4'>Checkout  Interaction</p>
                </div>
                <p className="mt-10 mb-4"><b className='text-primary text-[25px]'>Website with WordPress</b></p>
                <p>I developed a WordPress website after crafting high-fidelity prototypes using Figma. This systematic process was vital for conceptualizing the website and envisioning its essential functionalities. Completed Website link: <Link to="https://valentina.em-venus.com/">https://valentina.em-venus.com/</Link></p>
                <div className="my-6 bg-[#BBDAFF57] pt-20 md:px-32 px-12">
                    <video className='bg-[url("/images/video-bg.png")] bg-cover shadow-xl p-4' src="/videos/Valentina.mp4" playsInline loop autoPlay muted></video>
                    <p className='md:text-5xl text-xl font-bold text-white md:py-6 py-4 px-4'>WordPress Website</p>
                </div>
                <p className="mt-10 mb-4"><b className='text-primary text-[25px]'>Website Redesign</b></p>
                <p>I analyzed the demographics and designed both low and high-fidelity prototypes in Figma to revamp a website for a friend. You can check out the results by following the link below: <br />
                    <Link to="https://sarasweetlashes.com/">www.sarasweetlashes.com</Link></p>
                <div className="my-6 bg-[#FBE7FA] pt-16 md:px-32 px-12">
                    <video className='bg-[url("/images/video-bg.png")] bg-cover shadow-xl p-4' src="/videos/Sara.mp4" playsInline loop autoPlay muted></video>
                    <p className='md:text-5xl text-xl font-bold text-white md:py-6 py-4 px-4'>Sara Eyelashes Website</p>
                </div>
                <p className="mt-10 mb-4"><b className='text-primary text-[25px]'>Figma  Interaction</b></p>
                <p>In my free time, I'm enthusiastic about learning, especially experimenting with various prototypes in Figma.</p>
                <div className="my-6">
                    <video className='max-h-[70vh] mx-auto' src="/videos/3_4_Poke.mp4" playsInline loop autoPlay muted></video>
                </div>
                <p className="mt-10 mb-4"><b className='text-primary text-[25px]'>Redesigning a Website</b></p>
                <p>I am redesigning the Toronto Cupcake website, because I've identified several issues. The redesign is a work in progress, and I'll soon be sharing prototypes and showcasing the progress on my project page. Stay tuned!</p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className='md:col-span-1 col-span-2 md:mb-20 mb-6'>
                        <img className='md:h-full' src="/images/before.png" alt="before redesigning of the website" />
                        <p className='text-primary text-center italic'>Before</p>
                    </div>
                    <div className='md:col-span-1 col-span-2 md:mb-20 mb-6'>
                        <img className='md:h-full' src="/images/after.png" alt="after redesigning of the website" />
                        <p className='text-primary text-center italic'>After</p>
                    </div>
                </div>
                <div className="my-6 bg-[#FBE7FA] pt-16 md:px-32 px-12">
                    <video className='bg-[url("/images/video-bg.png")] bg-cover shadow-xl p-4' src="/videos/Toronto-Cupcakes.mp4" playsInline loop autoPlay muted></video>
                    <p className='md:text-5xl text-xl font-bold text-white md:py-6 py-4 px-4'>Redesigning a Website</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default PrototypeContent;