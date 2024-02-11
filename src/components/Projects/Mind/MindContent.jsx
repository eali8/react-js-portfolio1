import React from 'react';

const MindContent = () => {
    return (
        <div className="container mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] md:px-0 px-4">
            <div className='grid md:grid-cols-12 gap-4'>
                <div className='md:col-span-10 md:col-start-2 text-justify'>
                    <div className="my-6 bg-gradient-to-b from-[#ACFFFA] to-[#ACFFFA00] py-20 md:px-32 px-12">
                        <video className='md:rounded-[70px] rounded-[50px] mx-auto max-h-screen p-4' src="/videos/MSRA-App.mov" playsInline loop autoPlay muted></video>
                    </div>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px]'>EMPATHIZE</b></p>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px]'>The Problem:</b></p>
                    <p>We live in a noisy and hectic world, full of distraction. To find our inner peace and balance, we need to learn to meditate and be present. It happens to everyone once in a while to be depressed or feel overwhelmed. Being able to manage the stress and cut distractions is vital for increasing productivity at workplace and with achieving our personal goals.<br /></p>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px]'>The Solution:</b></p>
                    <p>With Mindfulness Stress Reduction App, I am aiming to support every user to improve their abilities of coping with stress, pain and problems in every day life, learn to breath deeply, meditate, deal with disturbing events and be fully present and alive in this moment. Research shows that mindfulness training can have significant therapeutic benefits for those experiencing stress, anxiety, high blood pressure, depression, heart disease, diabetes and other ailments.<br /></p>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px]'>Brainstroming Process:</b></p>
                    <p>During the brainstorming phase, I compiled a wholesome business idea. I have conducted market and competitor research by comparing four of the biggest Mindfulness apps like InsightTimer, HeadSpace, Calm and Meditopia. I have also identified user and business goals, and completed interviews with 9 personas, to gain valuable insights.</p>
                    <div className="my-6 flex justify-center">
                        <img className='my-6 lg:w-2/3 mx-auto' src="/images/mind-2.svg" alt="5 stage UX process" />
                    </div>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px]'>DEFINE</b></p>
                    <p>My next step was to define user and business goals.</p>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px] italic'>User Goals:</b></p>
                    <ul className='list-disc ml-8 z-10 relative'>
                        <li>Main User Goals is to overcome stress through a user-friendly app.</li>
                        <li>Practicing guided meditation.</li>
                        <li>Improve the quality of sleep, by practicing mindfulness.</li>
                        <li>Increasing resilience and the ability to cope with the life’s challenges effectively.</li>
                        <li>Improved focus and concentration.</li>
                        <li>Be present, in the moment. Stress Reduction and cultivating a sense of calm and relaxation.</li>
                        <li>Reducing the symptoms of depression.</li>
                        <li>Progress tracking and report to keep users motivated and consistent.</li>
                    </ul>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px] italic'>Business Goals:</b></p>
                    <ul className='list-disc ml-8 z-10 relative'>
                        <li>Make the product unique as possible in order to stand out from competitors.</li>
                        <li>Including external experts, yoga and Pilates teachers, coaches and psychologists.</li>
                        <li>Provide data to provide effectiveness of the application.</li>
                        <li>Leave a positive impact on users mental health and well-being.</li>
                        <li>Establishing strong brand presence.</li>
                        <li>Partnership and collaboration with other experts and influencers.</li>
                    </ul>
                    <div className="relative mt-4">
                        <div style={{ backgroundImage: "url('/images/mind-text-bg.png')" }} className="w-80 h-72 absolute top-0 right-0 bg-cover -translate-y-full z-0"></div>
                        <p className='mt-10 mb-4'><b className='text-primary text-[25px] italic'>Scenario:</b></p>
                        <p className='z-10'>Cindy is a full time student with New Media Design and Web Development with BCIT and often feels very depressed due to the workload and stressful schedule. She is struggling often from anxiety and sleeping disorder. <br /> <br /> After trying different meditation apps, she was always giving up using them, because of lack of consistency and motivation. Finally she found Mindfulness Stress Reduction App and started connecting with other individuals with similar problems. She started connecting with them on a daily basis, before her classes, and saw tremendous change in her mood and day. For her most important was to connect with teachers and community with the same issue, so she felt that she is not alone in this. Having the sense of belonging is quite important in order to feel part of the community.</p>
                    </div>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px]'>Competitor Analysis:</b></p>
                    <p>As part of the Competitive Analysis., I conducted an analysis of four different “Mindfulness” apps – InsightTimer, HeadSpace, Calm, Meditopia. I focused my research on User Interface elements and functionalities, so I was able to identify the areas where they excel or fall short. This gave me an opportunity for differentiation and improvement. <br /> After my research, I found that InsightTimer had many functions and was feeling overwhelming for users. Calm by itself was not user-friendly, and users might feel lost while using it. Meditopia had overloaded structure. So, I was determined to create easy to navigate and more personal meditation app.</p>
                    <div className="my-6 flex justify-center">
                        <img className='my-6 lg:w-2/3 mx-auto' src="/images/Comp An.png" alt="competitor analysis" />
                    </div>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px]'>Interview Guide:</b></p>
                    <p>I have interviewed 9 people from different demographics, asking them the same questions. After the interviews, I analyzed the responses to identify common themes, pain points, and opportunities for improvement. This data helped me to inform the development and refinement of the app strategy. The goal was to clearly identify user goals and frustrations, and according to that I have created a user journey map.</p>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <img className='my-6 w-full' src="/images/mind-4.png" alt="interview results1" />
                        <img className='my-6 w-full' src="/images/mind-5.png" alt="interview results2" />
                    </div>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px] italic'>Persona:</b></p>
                    <p>To further understand the mindfulness app target audience, I have developed personas. This allowed me to design features, content, and experiences that cater specifically to their needs, preferences, and pain points.</p>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <img className='my-6 w-full' src="/images/mind-6.png" alt="persona1" />
                        <img className='my-6 w-full' src="/images/mind-7.png" alt="persona2" />
                        <img className='my-6 w-full' src="/images/mind-8.png" alt="user story1" />
                        <img className='my-6 w-full' src="/images/mind-9.png" alt="userstory2" />
                    </div>
                    <div className="my-6 flex justify-center">
                        <img className='my-6 lg:w-2/3 mx-auto' src="/images/mind-10.png" alt="user_journey" />
                    </div>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px]'>IDEATE:</b></p>
                    <p>Then I moved to User Flow, Brainstorming and Information Architecture.</p>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px]'>Brainstorming:</b></p>
                    <div className="my-6 flex justify-center">
                        <img className='my-6 w-full' src="/images/mind-11.png" alt="brainstorming" />
                    </div>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px]'>User Flow Map:</b></p>
                    <p>Then I created a user flow map for MSRA, which helped me to visualize the user's journey through the app.</p>
                    <div className="mt-6 flex justify-center">
                        <img className='my-6 lg:w-2/3 mx-auto' src="/images/mind-12.png" alt="user flow map" />
                    </div>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px] italic'>Card Sorting:</b></p>
                    <p>Card Sorting helped me to organize and structure information, such as content or features, in a way that aligns with user’s mental model and expectations. In the context of a Mindfulness Stress Reduction App, I used the card sorting to help me determine how to categorize and organize various features, meditation sessions, and content within the app.</p>
                    <div className="mt-6 flex justify-center">
                        <img className='my-6' src="/images/mind-13.png" alt="cart sorting" />
                    </div>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px]'>Site Map:</b></p>
                    <p>Site Map helped me to visualize the basic structure of mindfulness app, covering features like guided practices, meditation timers, mindfulness courses, progress tracking, and community engagement.</p>
                    <div className="mt-6 flex justify-center">
                        <img className='my-6 lg:w-2/3 mx-auto' src="/images/mind-14.png" alt="site map" />
                    </div>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px]'>Design System:</b></p>
                    <p>I came up with a design system to add consistency, structure and communication. I chose Poppins and DM Sans Font typeface. Poppins is a clean typeface, memorable and unique. DM Sans is mostly used for digital and print applications. It is designed to be a web-safe and screen-first font, making it particularly suitable for web design. DM Sans is open source, which means it can be freely used, modified and distributed, making it a popular choice among the web designers and developers.</p>
                    <div className="mt-6 flex justify-center">
                        <img className='my-6 lg:w-2/3 mx-auto' src="/images/mind-15.png" alt="design system" />
                    </div>
                    <p>My choice for colors is a combination of bright green, bright blue and bright pink color. This combination is great for increasing user’s attention of details. Blue symbolizes strength and masculinity, pink symbolizes lust and desire. Bright green from the other hand symbolizes rebirth and tranquility, all colors necessary for being in the right space.</p>
                    <div className="mt-6 flex justify-center">
                        <img className='my-6 lg:w-2/3 mx-auto' src="/images/mind-17.png" alt="color choice" />
                    </div>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px]'>PROTOTYPE</b></p>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px] italic'>Sketch:</b></p>
                    <p>I sketched 16 mob app pages for MSRA. </p>
                    <div className="grid md:grid-cols-12 gap-4">
                        <div className="md:col-span-5">
                            <img className='my-6 md:h-full' src="/images/mind-18.png" alt="sketch" />
                        </div>
                        <div className="md:col-span-7">
                            <img className='my-6' src="/images/mind-19.png" alt="sketch by hand" />
                        </div>
                    </div>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px] italic'>Lo -Fi Wireframing:</b></p>
                    <p>The next steps were to do a lo-fi sketch using new user-flow I created. Here quickly I incorporated my brainstorming ideas into rough sketches and outlined the different “Mindfulness Stress Reduction app” screens.</p>
                    <div className='mt-4'>
                        <img className='my-6' src="/images/mind-20.png" alt="lo-fi wireframing" />
                    </div>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px] italic'>Hi -Fi Wireframing:</b></p>
                    <p>I integrated all the elements from the entire design process to craft an app that exudes warmth, functionality, and approachability. My primary tool for this project was Figma, which I utilized extensively for both creating and collaborating on the user interface design of the "Shut Up" app. In the final stages, I conducted user tests using prototypes through InVision and Figma to gather feedback. Thankfully, the seamless performance of the app meant that no further modifications were necessary.</p>
                    <div className='mt-4'>
                        <img className='my-6' src="/images/mind-21.png" alt="hi-fi wireframing" />
                    </div>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px]'>VALIDATE</b></p>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px]'>User Testing:</b></p>
                    <p>In the concluding phase, I conducted a usability test for the app I developed to ensure that users are proficient in navigating the product and its UI elements. I diligently collected their feedback, which was overwhelmingly positive, reflecting their high satisfaction with the overall MSRA experience.</p>
                    <div className='mt-4'>
                        <img className='my-6 lg:w-2/3 ml-auto' src="/images/mind-22.png" alt="user testing" />
                    </div>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px]'>FINAL THOUGHTS:</b></p>
                    <p>In my UX research for our stress reduction app, I've gained valuable insights into our users' needs. Through interviews, surveys, and testing, I've identified what causes stress and what users seek in a mindfulness app. I've also created user profiles to make the app more personalized. The key findings show that users value simplicity, diverse content, personalization, and a sense of community within the app. I'm dedicated to continually improving the app, safeguarding user data, and maintaining scientific credibility. Armed with these insights, I'm well-prepared to create an app that empowers users to reduce stress, enhance well-being, and cultivate mindfulness in their daily lives.</p>
                </div>
            </div>
        </div>
    );
};

export default MindContent;