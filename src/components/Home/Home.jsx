import React, { useRef } from 'react';
import Projects from './Projects/Projects';
import Hero from './Hero/Hero';
import { ScrollRestoration } from 'react-router-dom';

const Home = () => {

    const ref = useRef(null)

    const scrollToTarget =() => {

    ref.current?.scrollIntoView({ behaviour: 'smooth'}); 
}
    return (
        <div className='container mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] md:px-0 px-4'>
            <Hero scrollToTarget={scrollToTarget} />
            <Projects reference={ref}/>
            <ScrollRestoration/>
        </div>
    );
};

export default Home;