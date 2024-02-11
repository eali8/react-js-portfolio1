import React from 'react';

const FufuContent = () => {
    return (
        <div className="container mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] md:px-0 px-4">
            <div className='grid md:grid-cols-12 gap-4'>
                <div className='md:col-span-10 md:col-start-2 text-justify'>
                    <div className="my-6 bg-gradient-to-b from-[#FB8F66] to-[#FFFFFF00] py-20 md:px-32 px-12">
                        <video className='bg-[url("/images/video-bg.png")] bg-cover shadow-xl p-4' src="/videos/Fufu Bakery.mp4" playsInline loop autoPlay muted></video>
                    </div>
                    <p>I tackled this project for Fufu Bakery's website using the 5-stage design thinking process. Not only did this allow me to empathize with and understand my user's goals and frustrations, but I was also able to iterate on the designs efficiently.</p>
                    <div className="my-6 flex justify-center">
                        <img className='my-6 lg:w-2/3 mx-auto' src="/images/fufu-1.png" alt="5 stage design thinking" />
                    </div>
                    <p className="mt-10 mb-4"><b className='text-primary text-[25px]'>EMPATHIZE</b></p>
                    <p className="mt-10 mb-4"><b className='text-primary text-[25px]'>The Problem:</b></p>
                    <p>Fufu Bakery, an established brand renowned for its success in the Brentwood area, is embarking on a strategic expansion into Vancouver Downtown. The primary objective is to not only open a new branch but also to attract a distinct and diverse target audience while significantly increasing sales. In parallel, Fufu Bakery acknowledges the imperative need to elevate its digital footprint. This entails enhancing web visibility and accessibility to create a compelling online presence that mirrors the excellence and warmth associated with the physical bakery. Moreover, the company is intent on broadening its monthly event portfolio to forge deeper connections with the community.<br /></p>
                    <p className="mt-10 mb-4"><b className='text-primary text-[25px]'>The Solution:</b></p>
                    <p>I conducted comprehensive market research to understand the demographics, preferences, and behaviors of the Vancouver Downtown audience. Also I developed detailed user personas that summarized the characteristics and needs of the target audience. I implemented a feedback system that encourages customers to provide input on their experiences, both in-store and online. These strategic actions collectively contributed to a successful solution, enhancing the expansion of Fufu Bakery and significantly elevating its web visibility.<br /></p>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px]'>Brainstroming Process:</b></p>
                    <p>During the brainstorming process for Fufu Bakery, I engaged in a creative exploration of ideas and strategies to guide the bakery's expansion into Vancouver Downtown.</p>
                    <div className="my-6 flex justify-center">
                        <img className='my-6 w-full mx-auto' src="/images/fufu-2.png" alt="brainstorming" />
                    </div>
                    <p className='my-4'><b className='text-primary text-[25px]'>DEFINE</b></p>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px]'>GOALS:</b></p>
                    <p>My next step was to define user and business goals.</p>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px] italic'>User Goals:</b></p>
                    <ul className='list-disc ml-8'>
                        <li>Gather customer’s feedback, on the check out of the products.</li>
                        <li>Locate and read product information's easily.</li>
                    </ul>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px] italic'>Business Goals:</b></p>
                    <ul className='list-disc ml-8'>
                        <li>Increase Brand Awareness and Meet Customer Needs.</li>
                        <li>To actively engage with the local community through events, partnerships, and initiatives that align with Fufu Bakery's values.</li>
                    </ul>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px] italic'>Scenario:</b></p>
                    <p>Cameron is Canadian, originally from Saskatchewan, moved to Vancouver 4 years ago. She has a very busy schedule with investment banking and high-profile of investors. Very often, she needs to run for early meetings and is great for her to stop by Fufu and grab her favorite coffee and pastry. Fufu is in a great location in Lower Mainland, exactly next to her office in Burrard. She is a loyal customer of Fufu Bakery, and extremely happy with their expansion.</p>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px]'>Competitor Analysis:</b></p>
                    <p>As a part of our Competitive Analysis, I undertook an in-depth examination of three prominent bakeries located in the Lower Mainland Vancouver area. This analysis involved a comprehensive assessment of their presence in the Apple App Store, an evaluation of their strengths and weaknesses, and a careful study of their market research strategies. This thorough examination provided valuable insights that have been instrumental in shaping the development of Fufu Bakery. It allowed me to pinpoint key areas of focus and improvement based on the competitors' practices and performance.</p>
                    <div className="my-6 flex justify-center">
                        <img className='my-6 lg:w-2/3 mx-auto' src="/images/fufu-3.png" alt="competitor analysis" />
                    </div>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px]'>Interview Guide:</b></p>
                    <p>Following this initial competitive analysis phase, I proceeded to create an interview guide, through which I conducted interviews with five individuals who fell within my target demographic. These interviews formed the basis for the development of User Personas, allowing me to gain a deeper understanding of the potential customers. The target audience for Fufu Bakery encompasses a diverse range of individuals, including families, coffee enthusiasts, local residents, office professionals, small and large corporate entities, students, and anyone with an appreciation for freshly baked pastries and coffee. By delving into their responses and analyzing their behaviors, I've been able to refine the strategies and offerings to better cater to the preferences and needs of this broad and dynamic audience.</p>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <img className='my-6 w-full md:col-span-1 col-span-2' src="/images/fufu-4.png" alt="persona1" />
                        <img className='my-6 w-full md:col-span-1 col-span-2' src="/images/fufu-5.png" alt="persona2" />
                    </div>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px] italic'>Empathy Map:</b></p>
                    <p>I created an empathy map that enabled me to visualize the thoughts, feelings, and perspectives of Fufu Bakery's customers. My focus was on understanding what Cameron, our typical customer, says, thinks, feels, needs, and experiences in terms of both gains and pains. This exercise was instrumental in gaining insights into our customers' experiences, allowing me to identify areas for improvement in Fufu’s products, services, and communication strategies, with the ultimate goal of better meeting our customers' needs and addressing their emotions.</p>
                    <div className="my-6 flex justify-center">
                        <img className='my-6 md:w-2/3 mx-auto' src="/images/fufu-6.svg" alt="empathy map" />
                    </div>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px] italic'>IDEATE</b></p>
                    <p>Then I moved to Cart sorting, User Flow Map & Information Architecture.</p>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px]'>Cart Sorting:</b></p>
                    <p>Card sorting helped me to create a more intuitive and user-friendly information architecture for “Fufu” Bakery Website. By understanding how users naturally group and categorize items, I designed navigation menus and content organization that align with users mental models.</p>
                    <div className="my-6 flex justify-center">
                        <img className='my-6 w-full' src="/images/fufu-7.png" alt="cart sorting" />
                    </div>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px] italic'>Site Map:</b></p>
                    <p>Creating a site map for Fufu Bakery's website was crucial for outlining the structure and navigation of the platform.</p>
                    <div className="mt-6 flex justify-center">
                        <img className='my-6 lg:w-3/4 mx-auto' src="/images/fufu-8.png" alt="site map" />
                    </div>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px] italic'>User Flow Map:</b></p>
                    <p>Creating a user flow map for Fufu Bakery's website helped me to visualize the steps users take as they interact with the platform.</p>
                    <div className="mt-6 flex justify-center">
                        <img className='my-6 lg:w-2/3 mx-auto' src="/images/fufu-9.png" alt="user flow chart" />
                    </div>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px] italic'>Design System:</b></p>
                    <p>Afterward, I transitioned to creating the Design System. In this process, I curated a Mood Board and designed promotional materials for Fufu Bakery's Grand Opening in Lower Mainland Vancouver, which included advertisements for Instagram and Facebook. <br /><br /> My choice of the color orange was deliberate, as it closely aligns with the delightful hues often found in pastries. Orange is a color that invokes feelings of warmth, energy, and creativity, making it a perfect fit for the project. The resulting color palette harmoniously blends warm and neutral tones, creating an inviting and visually appealing experience for the Fufu Bakery website. Incorporating burnt orange allowed me to infuse vitality into specific design elements, serving as attention-grabbers. Meanwhile, the use of a pristine white background was pivotal to ensuring readability and maintaining a clean and polished appearance. The inclusion of brown and light beige tones further added a comforting and earthy dimension, fostering a warm and welcoming ambiance for the bakery's online presence.</p>
                    <div className="mt-6 flex justify-center">
                        <img className='my-6' src="/images/fufu-10.png" alt="color palette" />
                    </div>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px] italic'>Facebook Promotional Adverts:</b></p>
                    <div className="mt-6 flex justify-center">
                        <img className='my-6 lg:w-3/4 mx-auto' src="/images/fufu-11.png" alt="facebook promotional adverts" />
                    </div>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px]'>Instagram Promotional Adverts:</b></p>
                    <div className="mt-6 flex justify-center">
                        <img className='my-6 lg:w-2/3 mx-auto' src="/images/fufu-12.png" alt="instagram promotional adverts" />
                    </div>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px]'>PROTOTYPE </b></p>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px] italic'>Lo -Fi Wireframing:</b></p>
                    <p>Subsequently, I proceeded to create low-fidelity (lo-fi) wireframes. These wireframes served as a preliminary visual representation, offering a basic outline of the webpage's layout and the positioning of its content.</p>
                    <div className='mt-4'>
                        <img className='my-6' src="/images/fufu-13.png" alt="lo wireframing" />
                    </div>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px] italic'>Hi -Fi Wireframing:</b></p>
                    <p>In the final phase of this project, I advanced to the creation of Hi-Fidelity wireframes and Prototypes for Fufu Bakery. My primary emphasis was on delivering a seamless and user-friendly navigation experience, ensuring that visitors could effortlessly explore the extensive array of delectable goods and pastries. Additionally, I prominently featured the exciting Grand Opening event of “Fufu” bakery in the Lower Mainland. <br /> <br /> I conducted thorough testing by engaging with five users to assess the website's functionality and user experience. Remarkably, no modifications were deemed necessary based on their feedback, affirming the effectiveness of my design and navigation enhancements. This outcome underscored my commitment to delivering a top-notch digital platform that aligned with the unique needs and preferences of my target audience.</p>
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-4 p-4">
                        <img className='my-6 w-full md:h-full' src="/images/fufu-14.png" alt="hi-fi wireframing1" />
                        <img className='my-6 w-full md:h-full' src="/images/fufu-15.png" alt="hi-fi wireframing2" />
                        <img className='my-6 w-full md:h-full' src="/images/fufu-16.png" alt="hi-fi wireframing3" />
                        <img className='my-6 w-full md:h-full' src="/images/fufu-17.png" alt="hi-fi wireframing4" />
                        <img className='my-6 w-full md:h-full' src="/images/fufu-18.png" alt="hi-fi wireframing5" />
                        <img className='my-6 w-full md:h-full' src="/images/fufu-19.png" alt="hi-fi wireframing6" />
                    </div>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px]'>VALIDATE</b></p>
                    <p>During my UX research, my primary focus was on creating a user-friendly and aesthetically pleasing website with the main goal of enhancing its online visibility and increasing the frequency of monthly event attendance. To achieve this, I employed user testing methods, utilizing tools such as InVision and Figma to collect valuable feedback. Subsequently, I incorporated user feedback by implementing changes in font styles and background colors in the subsequent iteration of the design. These refinements were made with the aim of improving the overall user experience and driving the desired outcomes for the website.</p>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px]'>FINAL THOUGHTS:</b></p>
                    <p>The feedback received from users was positive, with many noting the improved readability and aesthetics. If this project was to move forward, further user testing and iterations would be implemented before launch. <br /> <br />To measure the success of these recommendations, metrics such as conversion rates, shopping cart abandonment rate, average order value, and gross profit margin would be closely monitored.</p>
                </div>
            </div>
        </div>
    );
};

export default FufuContent;