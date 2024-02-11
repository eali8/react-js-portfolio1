import React, { useRef } from 'react';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

const Gallery = ({ item }) => {
    const { name, short_description } = item;

    const illustration = [
        {
            src: "/images/illus.png",
            caption: " Adobe Illustrator 2023"
        },
        {
            src: "/images/illus-5.png",
            caption: 'Adobe InDesign 2023'
        },
        {
            src: "/images/illus-2.png",
            caption: 'Adobe Photoshop 2023'
        },
        {
            src: "/images/illus-4.png",
            caption: 'Adobe Photoshop 2023'
        },
        {
            src: "/images/illus-3.png",
            caption: 'Adobe Photoshop 2023'
        },
        {
            src: "/images/illus-6.png",
            caption: 'Adobe Photoshop 2023'
        },
    ];

    const photos = [
        {
            src: "/images/photo-7.png",
            caption: "Coron, Phillipines"
        },
        {
            src: "/images/photo-5.png",
            caption: 'Moraine Lake, Banff'
        },
        {
            src: "/images/photo-2.png",
            caption: 'Port Moody, British Columbia'
        },
        {
            src: "/images/photo-4.png",
            caption: 'Burnaby, British Columbia'
        },
        {
            src: "/images/photo-3.png",
            caption: 'Estepona, Spain'
        },
        {
            src: "/images/photo-6.png",
            caption: 'Montreal, Quebec'
        },
    ];

    return (
        <div className='my-10'>
            <div className='mb-5 mt-32'>
                <h1 className='text-xl text-center font-bold uppercase'>{name}</h1>
                <p className='text-md text-center'>{short_description}</p>
            </div>
            {
                name === 'Illustration' &&
                <LightGallery
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                    elementClassNames="carousel carousel-center max-w-full p-4 space-x-4 rounded-box"
                    key={0}
                >
                    {
                        illustration.map((image, index) => (
                            <a className="carousel-item my-auto" href={image.src} key={index}>
                                <div className='text-center'>
                                    <img className='mx-2 rounded-box' src={image.src} alt={`Illustration - ${image.caption}`} />
                                    <p className='text-center inline'>{image.caption}</p>
                                </div>
                            </a>
                        ))
                    }
                </LightGallery>
            }
            {
                name === 'Photography' &&
                <LightGallery
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                    elementClassNames="carousel carousel-center max-w-full p-4 space-x-4 rounded-box"
                    key={1}
                >
                    {
                        photos.map((image, index) => (
                            <a className="carousel-item my-auto" href={image.src} key={index}>
                                <div className='text-center'>
                                    <img className='mx-2 rounded-box' src={image.src} alt={`Photography - ${image.caption}`} />
                                    <p className='text-center inline'>{image.caption}</p>
                                </div>
                            </a>
                        ))
                    }
                </LightGallery>
            }
        </div>
    );
};

export default Gallery;