import React from 'react';

const CharityContent = () => {
    return (
        <div className="container mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] md:px-0 px-4">
            <div className="grid md:grid-cols-12 gap-4">
                <div className='md:col-span-10 md:col-start-2 text-justify'>
                    <div className="my-6 bg-gradient-to-b from-[#FFB6B6B5] to-[#FFFFFF00] py-20 md:px-32 px-12">
                        <video className='bg-[url("/images/video-bg.png")] bg-cover shadow-xl md-auto p-4' src="/videos/Children Charity.mp4" playsInline loop autoPlay muted></video>
                    </div>
                    <div className="image">
                        <img src="/images/1charity-1.png" alt="UX Process" />
                    </div>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px] pt-6'>Brainstroming Process:</b></p>
                    <p>During the brainstorming phase, I started by identifying the short-term goals and long-term goals of the “Children International Charity” website. Goals are important because they establish milestones for me, so I can mind mapping, what exactly needs to be improved on this charity website.<br /></p>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px] pt-6'>Short-term goals:</b></p>
                    <p>- Raising awareness - by increasing the number of volunteers and participants. I would create a company wristband, so more people can wear it to raise awareness.</p>
                    <p>- Improve customer support - Will implement a live chat available 24 hours, so users can have access any time in any location around the world.</p>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px] pt-6'>Long-term goals:</b></p>
                    <p>- Mobile app accessibility - will update the mobility app and will create faster functionality.</p>
                    <p>- Increasing the size of the charity - it is very critical to expand the size of the charity in different countries and create more branches.</p>
                    <p>- Expand marketing division - I will allocate more resources to the marketing division to boost the popularity of the website and increase its user base in the long term.<br /></p>
                    <div className="grid md:grid-cols-2 gap-2">
                        <div className="my-auto">
                            <p className='mt-10 mb-4'><b className='text-primary text-[25px] pt-6'>The Problem:</b></p>
                            <p>Increasing the size of the charity - it is very critical to expand the size of the charity in different countries and create more branches. Before expanding internationally, I conducted a thorough feasibility study to assess the demand for charity services in target countries. Then I analyzed the cultural, economic, and legal differences that may affect the operations.</p>
                        </div>
                        <div className="image">
                            <img src="/images/charity-1.png" alt="Fundraising Events" />
                        </div>
                    </div>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px] pt-6'>Target Audience:</b></p>
                    <span>The ideal Users/ Archetypes for International charity are:</span>
                    <ul className='list-disc ml-10 mb-4'>
                        <li>Wealthy Parents / Families </li>
                        <li>Wealthy Philanthropist </li>
                        <li>Retired Volunteers, who want to make an impact in the community </li>
                        <li>High School Teachers</li>
                        <li>Private businesses, that make donations and/ or encourage staff and customers to take part in charity fundraising. </li>
                    </ul>
                    <span>Archetypes are developed during the audience research portion of the development process, and they are used to focus on the groups of ideal users of a product or service.</span>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px] pt-6'>Research:</b></p>
                    <p>The first thing I focused on was my research strategy. Understanding the unique UX/UI needs and preferences of Children International's diverse user base, including donors, beneficiaries, and volunteers, is essential to enhance the effectiveness and user satisfaction of the charity's online platforms. To identify the flows in the current UX and UI, I conducted a usability test by interviewing Retired Volunteer and Wealthy Family,  that fit my user archetype. Based on that, I created personas. </p>
                    <div className="md:grid md:grid-cols-9 md:gap-8 mt-4 mb-2">
                        <div className="md:col-span-5">
                            <img className='py-6 md:h-full' src="/images/charity-2.png" alt="persona1" />
                        </div>
                        <div className="md:col-span-4">
                            <img className='py-6 md:h-full' src="/images/charity-3.png" alt="persona2" />
                        </div>
                    </div>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px] pt-6'>Competative Analysis:</b></p>
                    <p>A competitive analysis helped me to explore the possibilities with our client's website. Great (competitor) design aesthetics, interesting functionality, and sometimes SEO and Social Media Marketing techniques pushed me to design better. Build better. Art is subjective. Learning what is aesthetically pleasing and functional, to our client and other users within this industry, gave me insight into what to build into the new site and inspiration to create something better than we analyze. I conducted research on Plan International as a primary competitor for my upcoming website, and I employed Website Grader to enhance both SEO and mobile app performance.</p>
                    <div className="my-6 flex justify-center">
                        <img className='py-6 lg:w-2/3' src="/images/charity-4.png" alt="Competative Analysis" />
                    </div>
                    <p>I used Wappalyzer App, to get an instant access to website technology stacks, company and contact details, social media profiles, email verification and more. I also used Nibbler to test the website. It gave me a report scoring the website out of 10 for key areas, including accessibility, SEO, social media, and technology.</p>
                    <div className="mt-6 flex justify-center">
                        <img className='py-6 lg:w-2/3' src="/images/charity-5.png" alt="Nibbler SEO" />
                    </div>
                    <p className='mb-4'>According to Nibbler - the overall experience with this website is fantastic, but Children International is aiming to provide even better functionality and faceted organization in the navigation. Children International will have improved search engine optimization, by considering using descriptive words or phrases (e.g. News, Donate, Support) and etc.</p>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px] pt-6 italic'>Concept Mapping:</b></p>
                    <p>A concept map is a diagram or graphical tool that visually represents relationships between
                        concepts and ideas. The concept map shows the key points during the phrase of reaching client's industry, and how they can be considered when creating a better user experience.</p>
                    <div className="mt-6 flex justify-center">
                        <img className='py-6 lg:w-2/3' src="/images/charity-6.png" alt="concept mapping" />
                    </div>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px] pt-6 italic'>Flow Chart:</b></p>
                    <p>Then I have moved to the Flow Chart. The donation process had some specific requirements I felt were somewhat complex to code. To confirm that I understand the clients requests and articulate to our development team the correct procedure I documented the 'user flow' of the donation process.</p>
                    <div className="mt-6 flex justify-center">
                        <img src="/images/charity-7.png" alt="flow chart" />
                    </div>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px] pt-6'>Site Mapping:</b></p>
                    <p>This is a blueprint of the new website. The symbols represents the core pages of the website.</p>
                    <div className="mt-6 flex justify-center">
                        <img className='py-6 lg:w-2/3' src="/images/charity-8.png" alt="site map" />
                    </div>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px] pt-6'>Design System:</b></p>
                    <p>I developed a comprehensive design system to effectively engage users through appropriate colors and fonts tailored to a Children's Charity Website. This involved creating a more harmonious color palette as the primary focus. I crafted the logo using Illustrator, offering multiple design options that delineated what should and shouldn't be incorporated. To underscore the impact on children, I integrated child imagery into the logo.</p>
                    <div className="grid grid-cols-2 gap-12">
                        <div>
                            <img className='py-6 px-2 py-6' src="/images/charity-9.png" alt="logo" />
                            <img className='py-6 px-2 py-6' src="/images/charity-10.png" alt="font choice" />
                        </div>
                        <div>
                            <img className='py-6 px-2 py-6' src="/images/charity-11.png" alt="buttons" />
                            <img className='py-6 px-2 py-6' src="/images/charity-12.png" alt="colors" />
                        </div>
                    </div>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px] pt-6 italic'>Lo -Fi Wireframing:</b></p>
                    <p>The subsequent steps involved crafting low-fidelity wireframes for both desktop and mobile versions of the website. These wireframes were skillfully designed using Adobe XD to bring my envisioned website layout to life. </p>
                    <div className='mt-4'>
                        <img src="/images/charity-13.png" alt="lo-fi wireframe" />
                    </div>
                    <div className="mt-6 flex justify-center">
                        <img className='py-6 lg:w-2/3' src="/images/charity-14.png" alt="lo-fi wireframe2" />
                    </div>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px] pt-6 italic'>Facets to Browse By:</b></p>
                    <p>Faceted (or navigational) search uses a hierarchy structure (taxonomy) to enable users to browse information by choosing from a predetermined set of categories. This allows a user to type in their simple query, then refine their search options by navigating/drilling down. Think of "filtering" the search results with categories. <br /> I created 5 facets what could be used to filter and organize the search results on this website:</p>
                    <ol className='list-decimal ml-8'>
                        <li>Browse by ways to donate.</li>
                        <li>Browse by Ongoing Upcoming Events</li>
                        <li>Browse by different Languages, website is offered</li>
                        <li>Browse by the sequence of donation</li>
                        <li>Browse by features of gift planning</li>
                    </ol>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px] pt-6 italic'>SEO Meta Data:</b></p>
                    <p>Metadata is data about data. Search engines, such as Google, do not only "read" the content of your website, they look at over 200+ signals (within their algorithm) that help them decide where to place your site in the results. To increase the chances of your content being located in response to a search engine request, we need to add appropriate metadata, such as a search engine title, description, keywords, copyright and event dates.
                        <br />
                        <br />
                        Below is the metadata for the redesigned website.
                        <br />
                        <br />
                        &lt;HEAD&gt;
                        <br />
                        <br />
                        &lt;TITLE&gt;Children International Organization, Vancouver, Canada &lt;/TITLE&gt;
                        <br />
                        <br />
                        &lt;META NAME="description" CONTENT="Children International is a non profit charity organization that helps children break the cycle of the poverty. If we are united, together we can change lives by providing food, shelter, education, proper health care. We are based in Canada and aiming to expand internationally."&gt;
                        <br />
                        <br />
                        &lt;META NAME="keywords" CONTENT="Poverty, Donate, Sponsor, Education, Aiming, Shelter, Together, Internationally, Mission, Vision, Impact, Help, Funds, Healthcare, Programs, Vulnerable, Harsh Circumstances, Better life, Support, Gift, Sponsor a Child in Need, Children International, Kids Charity Organization, United"&gt;
                        <br />
                        <br />
                        &lt;/HEAD&gt;</p>
                    <p className='mt-10 mb-4'><b className='text-primary text-[25px] pt-6'>Final Thoughts:</b></p>
                    <p>During my first term at BCIT, I worked on my first project related to Information Architecture and UX research. In a short period, I gained valuable knowledge, especially in prioritizing tasks and building WordPress websites from scratch. Here are some key lessons from this experience:<br /> <br /></p>
                    <ol className='list-decimal ml-8'>
                        <li>Embrace Diverse Thinking: I learned that spending too much time on the initial design is not recommended. Instead, it's essential to welcome diverse thinking as a crucial step in the design process.</li>
                        <li>Use Competitive Analysis: Analyzing other Charity Foundations thoroughly helped me understand current trends, meet user expectations, and identify areas that could be improved.</li>
                        <li>Tap into Existing Research: I realized that there is already a wealth of research on the best practices in charity UX. Utilizing this existing knowledge is crucial for informing and improving one's work.</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default CharityContent;