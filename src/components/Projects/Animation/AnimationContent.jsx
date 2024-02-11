import React from 'react';
import { Link } from 'react-router-dom';

const AnimationContent = () => {
    return (
        <div className="container mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] md:px-0 px-4">
            <div className='grid md:grid-cols-12 gap-4'>
                <div className='md:col-span-10 md:col-start-2 text-justify'>
                <p className='mt-10 mb-4'><b className='text-primary text-[25px]'>CSS Animations</b></p>
                <p>Exclusively crafted with CSS, these animation projects seamlessly activate upon page loading.</p>
                <p className='mt-10 mb-4'><b className='text-primary text-[25px]'>Transition and Transform:</b></p>
                <p>The primary objective of the first project was to design a 2x2 image-based navigational interface, adhering to specific requirements: the use of flexbox, pseudo-classes, and pseudo-elements to position elements and create interactive elements. <br /> In pursuit of this goal, I crafted a clean, minimalist interface. To add an engaging touch, I skillfully manipulated transitions, adjusting the timing of various elements to create a delayed text effect.</p>
                <div className="my-6 bg-[#FBE7FA] pt-20 md:px-32 px-12">
                    <video className='bg-[url("/images/video-bg.png")] bg-cover shadow-xl p-4' src="/videos/Transition.mp4" autoPlay playsInline loop muted></video>
                    <p className='md:text-5xl text-xl font-bold text-white md:py-6 py-4 px-4'>Transition and Transform</p>
                </div>
                <p className='mt-10 mb-4'><b className='text-primary text-[25px]'>CSS Preloader:</b></p>
                <p>I've carefully created individual seeds for the watermelon and used the @keyframes slice animation to make it look like it's being sliced. <br /> I used the .seed1, .seed2, .seed3, .seed4, and .seed5 classes to make different seeds inside the watermelon, placing them precisely. I also used the .cut-1:before pseudo-element to create the inner part of the cut. It has specific dimensions and styling, including a border-bottom with rounded corners to simulate the appearance of a watermelon slice.</p>
                <div className="my-6 bg-[#FBE7FA] pt-20 md:px-32 px-12">
                    <video className='bg-[url("/images/video-bg.png")] bg-cover shadow-xl p-4' src="/videos/CSS-Preloader.mp4" autoPlay playsInline loop muted></video>
                    <p className='md:text-5xl text-xl font-bold text-white md:py-6 py-4 px-4'>CSS Preloader</p>
                </div>
                <p className='mt-10 mb-4'><b className='text-primary text-[25px]'>Background Animation:</b></p>
                <p>This Background Animation defines the styling for a responsive webpage with dynamic elements. The webpage employs flexbox to center its content both horizontally and vertically, featuring a captivating scrolling background effect created by the .bg element. This background scrolls smoothly in a loop, offering an illusion of motion. The code also adapts to different screen orientations, optimizing element dimensions and positions for landscape and portrait modes. Additionally, for smaller screens, the background color changes, making it mobile-friendly.</p>
                <div className="my-6 bg-[#FBE7FA] pt-20 md:px-32 px-12">
                    <video className='bg-[url("/images/video-bg.png")] bg-cover shadow-xl p-4' src="/videos/bakc animation 2_1.mp4" playsInline loop autoPlay muted></video>
                    <p className='md:text-5xl text-xl font-bold text-white md:py-6 py-4 px-4'>Background Animation</p>
                </div>
                <p className='mt-10 mb-4'><b className='text-primary text-[25px]'>SVG Animate:</b></p>
                <p>This SVG Animate combines SVG and CSS to create an animated graphical display. The SVG code within the &lt;svg&gt; element includes a &lt;rect&gt; element and a &lt;path&gt; element, each with animation properties. The &lt;rect&gt; element undergoes a transformation animation that changes its position, size, and color over a 6-second duration. The &lt;path&gt; element has a dash animation that creates a dynamic border around the image. The CSS styles define the background color, positioning, and animation properties, such as keyframes for both the &lt;rect&gt; and the &lt;path&gt;. The footer contains attribution to the source of the code. This code produces an interactive visual effect with a rectangle and a dashed border.</p>
                <div className="my-6 bg-[#FBE7FA] pt-16 md:px-32 px-12">
                    <video className='bg-[url("/images/video-bg.png")] bg-cover shadow-xl p-4' src="/videos/SVG ANimate.mp4" playsInline loop autoPlay muted></video>
                    <p className='md:text-5xl text-xl font-bold text-white md:py-6 py-4 px-4'>SVG Animate</p>
                </div>
                <p className='mt-10 mb-4'><b className='text-primary text-[25px]'>Animation CSS Events:</b></p>
                <p>This is an example of CSS animations triggered by events. It sets up a webpage with an animated circle element. When the animation starts, it changes the background color to pink, and when it reaches the iteration phase, the background becomes steel blue. Finally, when the animation ends, the background color shifts to khaki. The script section utilizes JavaScript to listen for animation events on the "circle" element, including "animationstart," "animationiteration," and "animationend," and responds by altering the background color of the entire body. This code demonstrates the interaction between CSS animations and JavaScript events to create dynamic visual effects on a webpage.</p>
                <div className="my-6 bg-[#FBE7FA] pt-16 md:px-32 px-12">
                    <video className='bg-[url("/images/video-bg.png")] bg-cover shadow-xl p-4' src="/videos/CSS Events.mp4" playsInline loop autoPlay muted></video>
                    <p className='md:text-5xl text-xl font-bold text-white md:py-6 py-4 px-4'>CSS Events</p>
                </div>
                <p className='mt-10 mb-4'><b className='text-primary text-[25px]'>Controlling CSS with JavaScript :</b></p>
                <p>This code showcases a dynamic animation created through JavaScript and CSS. It includes a moving box element inside a container, along with "STOP" and "RESET" buttons. JavaScript functions control the animation behavior. The animation is triggered by a "PLAY" button that moves the box horizontally across the screen. Clicking the "STOP" button pauses the animation, and "RESET" resets the animation to its initial position. The code relies on requestAnimationFrame to smoothly move the box, allowing users to play, pause, and reset the animation as desired. Overall, this code demonstrates interactive animation control through JavaScript events, making it suitable for learning and experimentation.</p>
                <div className="my-6 bg-[#FBE7FA] pt-16 md:px-32 px-12">
                    <video className='bg-[url("/images/video-bg.png")] bg-cover shadow-xl p-4' src="/videos/Controlling CSS with JS.mp4" playsInline loop autoPlay muted></video>
                    <p className='md:text-5xl text-xl font-bold text-white md:py-6 py-4 px-4'>CSS with JavaScript</p>
                </div>
                <p className='mt-10 mb-4'><b className='text-primary text-[25px]'>GSAP Timeline:</b></p>
                <p>I learned to use GSAP to create timelines for my animations. GSAP is a JavaScript library for building animations on the web. <br /> The GSAP library is used to set initial positions, create a text animation, and control the animation of the girl image. The "controller" section allows users to interact with the animation using the provided buttons. The GSAP timeline orchestrates a series of animations, introducing elements with smooth transitions. The combination of these elements results in an attractive, interactive webpage with a playful yet elegant design. It showcases the versatility of GSAP and provides users with control over the animation.</p>
                <div className="my-6 bg-[#FBE7FA] pt-16 md:px-32 px-12">
                    <video className='bg-[url("/images/video-bg.png")] bg-cover shadow-xl p-4' src="/videos/GSAP Timeline.mp4" playsInline loop autoPlay muted></video>
                    <p className='md:text-5xl text-xl font-bold text-white md:py-6 py-4 px-4'>GSAP Timeline</p>
                </div>
                <p className='mt-10 mb-4'><b className='text-primary text-[25px]'>GSAP Animation:</b></p>
                <p>Here I have incorporated the "SplitType" feature to animate individual characters in the title. The animation smoothly raises each character along the y-axis with a staggered effect. A brief delay (0.2 seconds) precedes the animation, which has a duration of 0.3 seconds for each character. <br /> This code illustrates how to combine external libraries like GSAP with HTML and CSS to create captivating text animations. It enhances the visual appeal of the webpage and adds an interactive touch, making it particularly useful for web developers aiming to engage and inform their audience effectively.</p>
                <div className="my-6 bg-[#FBE7FA] pt-16 md:px-32 px-12">
                    <video className='bg-[url("/images/video-bg.png")] bg-cover shadow-xl p-4' src="/videos/GSAP Name.mp4" playsInline loop autoPlay muted></video>
                    <p className='md:text-5xl text-xl font-bold text-white md:py-6 py-4 px-4'>GSAP Animation</p>
                </div>
                <p className='mt-10 mb-4'><b className='text-primary text-[25px]'>FINAL THOUGHTS:</b></p>
                <p>It has been an enriching learning experience, and throughout my second term at BCIT, I've gained substantial knowledge in coding, leading to increased confidence in my abilities.</p>
            </div>
            </div>
        </div>
    );
};

export default AnimationContent;