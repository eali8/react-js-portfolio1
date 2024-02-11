import React from 'react';

const ShutupContent = () => {
    return (
        <div className="container mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] md:px-0 px-4">
            <div className='grid md:grid-cols-12 gap-4'>
                <div className='md:col-span-10 md:col-start-2 text-justify'>
                    <div className="my-6 bg-gradient-to-b from-[#FDD394] to-[#FFFFFF00] py-20 md:px-32 px-12">
                        <video className='md:rounded-[70px] rounded-[50px] mx-auto max-h-screen p-4' src="/videos/Shut-Up.mov" playsInline loop autoPlay muted></video>
                    </div>
                    <p className='my-8'>I used a 5-stage Design Thinking model proposed by the Hasso Plattner Institute of Design at Standford (the “d. school”). The stages of the Design Thinking process are as follows:</p>
                    <div className="my-6 flex justify-center">
                        <img className='py-6 w-full' src="/images/shutup-1.png" alt="5 stage design thinking" />
                    </div>
                    <p className="mt-10"><b className='text-primary text-[25px]'>EMPATHIZE</b></p>
                    <p className="mt-10"><b className='text-primary text-[25px]'>The Problem:</b></p>
                    <p>Many of us struggle with maintaining focus throughout the day, whether it's due to noisy neighbors, distracting coworkers, or simply a desire for uninterrupted work time. After conducting extensive research, I discovered a gap in the market for a well-developed "Shut Up" app. While there are a few existing options, they often lack support for multiple languages and comprehensive functionality. This led me to create "Shut Up," my debut mobile application. The aim was to make a fun app with great features for busy people.<br /> <br />I firmly believe that there's a significant demand for a mobile app that empowers users to regain control over their work or study environments by minimizing distractions. "Shut Up" is designed to provide users with a versatile and effective tool to optimize their productivity and enhance their focus.<br /></p>
                    <p className="mt-10"><b className='text-primary text-[25px]'>The Solution:</b></p>
                    <p>The “Shut Up” app offers a comprehensive solution for managing interruptions and maintaining focus in today;s fast paced digital world. By empowering users to take control of their distractions and optimize their work or study sessions, the app aim to enhance productivity, reduce stress, and promote a more balanced and fulfilling lifestyle. Moreover we can definitely cut those annoying individuals surrounding us:) </p>
                    <p className="mt-10"><b className='text-primary text-[25px]'>Target Audience:</b></p>
                    <p>The primary target audience for the "Shut Up" app includes:   </p>
                    <ol className='list-decimal ml-8'>
                        <li>Professionals and knowledge workers seeking to increase productivity and minimize distractions during work hours.</li>
                        <li>Students looking to enhance their concentration and study efficiency.</li>
                        <li>Individuals who want to manage interruptions and maintain focus during important tasks or creative endeavors.</li>
                    </ol>
                    <p className="mt-10"><b className='text-primary text-[25px]'>DEFINE</b></p>
                    <p className="mt-10"><b className='text-primary text-[25px]'>Research:</b></p>
                    <p>The first thing I focused was my research strategy. To identify the flows in the current UX and UI, I conducted a usability test by interviewing five people that fit my user archetype. My primary user demographic consisted of busy individuals in their mid-thirties seeking an app to silence disruptive individuals. <br /><br /> Secondly, I conducted a competitor analysis. Aside from using and understanding “Shut Up” app, this also gave me an insight in the market space and provided additional context for the problem I am working on. Secondly, I have created an interview guide in preparation of Usability Testing. This enabled me to conduct interviews in a consistent and controlled manner.</p>
                    <p className="mt-10"><b className='text-primary text-[25px] italic'>Brainstorming:</b></p>
                    <p>During the brainstorming phase, I have explored different directions and possibilities of the “Shut Up” app and how the user interface will function. Once I had a clear idea of what I wanted to create, I moved to the user flow mapping stage.</p>
                    <p className="mt-10"><b className='text-primary text-[25px] italic'>Competative Analysis: </b></p>
                    <p>As part of the Competitive Analysis., I conducted an analysis of four different “Shut Up” apps. I focused my research on User Interface elements and User Experience Flows – including the Sign-Up process, Recording stage, User Ratings and the Functionalities & Features. The key findings revealed that competing “Shut Up” aps lacked user- friendliness, had a confusing primary purpose, were not free, lacked focus, and offered fewer language options compared to the one I developed.</p>
                    <div className="mt-6 flex justify-center">
                        <img className='py-6 lg:w-2/3' src="/images/shutup-6.png" alt="competative analysis" />
                    </div>
                    <p className="mt-10"><b className='text-primary text-[25px] italic'>Scenario:</b></p>
                    <p>Cameron had a long and intense day shooting a movie for 16 hours. She was just so exhausted, so she didn’t want to interact with anyone, at the end of the day. Suddenly, her best friend visited her unexpectedly and started complaining about the date and how she is so disappointed from all guys. Cameron, didn’t want to be rude, but instead of saying it, she pressed the button: Shut Up. Firstly, her friend was shocked, but then she apologized and just left. Sometimes, we just need this type of help to express our feelings & help us to achieve our goals, or just to rest and be in peace when someone is annoying us. </p>
                    <p className="mt-10"><b className='text-primary text-[25px] italic'>Persona:</b></p>
                    <p>To further delve into a specific user of the “Shut Up” mobile app, I created a persona to get to know the users and understand what they want out of their experience. I created an interview guide that allowed me to follow a structured interview processing, ensuring that I cover all functionalities and benefits of the “Shut Up” app. With this guide I conducted 5 user interviews and recorded my findings on a Miro board.</p>
                    <div className="mt-6 flex justify-center">
                        <img className='py-6' src="/images/shutup-7.png" alt="persona" />
                    </div>
                    <p className="mt-10"><b className='text-primary text-[25px] italic'>Interview Guide:</b></p>
                    <p>I conducted interviews with five individuals from diverse demographic backgrounds to gain insights into their usage of the "Shut Up" app. This opportunity allowed me to develope deeper into their preferences and needs, helping shape the app's features and functionalities. <br /> <br />Key findings from the user research include:</p>
                    <ol className='list-decimal ml-8'>
                        <li>Overwhelming frustration with the need to manually create their schedules.</li>
                        <li>Concerns regarding the loss of focus during the day.</li>
                        <li>Decreased motivation to work due to frequent interruptions from annoying individuals</li>
                    </ol>
                    <div className="mt-6 flex justify-center">
                        <img className='py-6 w-full' src="/images/shutup-8.png" alt="interview1" />
                    </div>
                    <div className="mt-6 flex justify-center">
                        <img className='py-6 w-full' src="/images/shutup-9.png" alt="interview2" />
                    </div>
                    <div className="mt-6 flex justify-center">
                        <img className='py-6 w-full' src="/images/shutup-10.png" alt="interview3" />
                    </div>
                    <div className="mt-6 flex justify-center">
                        <img className='py-6 w-full' src="/images/shutup-11.png" alt="interview4" />
                    </div>
                    <div className="mt-6 flex justify-center">
                        <img className='py-6 w-full' src="/images/shutup-12.png" alt="interview5" />
                    </div>
                    <p className="mt-10"><b className='text-primary text-[25px] italic'>IDEATE</b></p>
                    <p className="mt-10"><b className='text-primary text-[25px] italic'>Flow Map:</b></p>
                    <p>During the flow mapping stage, I created diagrams to visualize the steps a user will take to accomplish specific tasks, based on their preference. This step helped me to understand the logical progression of screens and interactions, ensuring that users can navigate through the app efficiently.</p>
                    <div className="my-6 flex justify-center">
                        <img className='py-6 w-full' src="/images/shutup-2.png" alt="flow map" />
                    </div>
                    <div className="my-6 flex justify-center">
                        <img className='py-6 w-full' src="/images/shutup-3.png" alt="user flow map" />
                    </div>
                    <p className="mt-10"><b className='text-primary text-[25px] italic'>Cart Sorting:</b></p>
                    <p>Then I continued with card sorting phase. <br /> Cart sorting helped me to determine the product’s features and benefits, by <br /> explaining the value of the product. I have brainstormed the features and benefits of the app with the <br /> needs of the users. The card-sorting process helped me to ensure that the navigation and menu <br /> structure aligned with users’ mental models and expectations.</p>
                    <div className="my-6 flex justify-center">
                        <img className='py-6 w-full' src="/images/shutup-4.png" alt="cart sorting" />
                    </div>
                    <p className='mt-10'><b className='text-primary text-[25px] italic'>Site Map :</b></p>
                    <p>Site Map helped to create visual representation of the hierarchy. This hierarchy represents how the user will navigate throughout the site.</p>
                    <div className="my-6 flex justify-center">
                        <img className='py-6 lg:w-2/3' src="/images/shutup-5.png" alt="site map" />
                    </div>
                    <p className="mt-10"><b className='text-primary text-[25px]'>Design System:</b></p>
                    <p>I came up with a design system to add consistency, structure and communication. I choose Lora Font typeface as a well-balanced contemporary serif with roots in calligraphy. The color palette, I have selected vibrant yellow and dynamic red. Yellow embodies positivity, warmth, and energy, while red symbolizes passion, urgency, and excitement. Yellow has been my primary choice, as it’s evoking the emotional response for the app.</p>
                    <div className="grid grid-cols-2 gap-12">
                        <img className='py-20 px-2 pt-30' src="/images/color-shut up.png" alt="color choice" />
                        <img className='py-6 px-2 pt-30' src="/images/shutup-13.png" alt="font choice" />
                    </div>
                    <p className="mt-10"><b className='text-primary text-[25px]'>PROTOTYPE </b></p>
                    <p className="mt-10"><b className='text-primary text-[25px] italic'>Sketch:</b></p>
                    <p>The next steps were to do a lo-fi sketch using new user-flow I created. Here quickly I incorporated my brainstorming ideas into rough sketches and outlined the different “Shut Up” screens. </p>
                    <div className='mt-4'>
                        <img className='py-6' src="/images/shutup-14.png" alt="hand sketch" />
                    </div>
                    <p className="mt-10"><b className='text-primary text-[25px] italic'>Lo -Fi Wireframing:</b></p>
                    <p>The next steps were to do a lo-fi sketch using new user-flow I created. Here quickly I incorporated my brainstorming ideas into rough sketches and outlined the different “Shut Up” screens.</p>
                    <div className='mt-4'>
                        <img className='py-6' src="/images/shutup-15.png" alt="lo-fi wireframing" />
                    </div>
                    <p className="mt-10"><b className='text-primary text-[25px] italic'>Hi -Fi Wireframing:</b></p>
                    <p>I integrated all the elements from the entire design process to craft an app that exudes warmth, functionality, and approachability. My primary tool for this project was Figma, which I utilized extensively for both creating and collaborating on the user interface design of the "Shut Up" app. In the final stages, I conducted user tests using prototypes through InVision and Figma to gather feedback. Thankfully, the seamless performance of the app meant that no further modifications were necessary.</p>
                    <div className='mt-4'>
                        <img className='py-6' src="/images/shutup-16.png" alt="hi-fi wireframing" />
                    </div>
                    <p className="mt-10"><b className='text-primary text-[25px]'>VALIDATE</b></p>
                    <p>I conducted tests with "Shut Up" involving five users who experienced genuine enjoyment while exploring the mobile app's features. Following these tests, I made enhancements to the Whitelist and Blacklist dropdown functionality, enabling users to swiftly select the most distracting individuals. This improvement in app usability has resulted in users achieving better focus and significantly boosting their daily productivity.</p>
                    <p className="mt-10"><b className='text-primary text-[25px]'>FINAL THOUGHTS: </b></p>
                    <p>In summary, the "Shut Up" app has shown great promise in my user testing. Users not only found it enjoyable but also experienced increased productivity and focus after using the app's enhanced features, particularly the Whitelist and Blacklist functionality. As I continue to refine and develop this app, it holds the potential to be a valuable tool for helping individuals manage distractions and improve their daily work performance. Further user feedback and fine-tuning will be essential in ensuring its continued success.</p>
                </div>
            </div>
        </div>
    );
};

export default ShutupContent;