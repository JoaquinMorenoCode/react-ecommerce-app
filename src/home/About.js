import React from 'react';
import image1 from './../assets/images/Banner02.jpg';

import './About.css';

export default function About() {
    return (
        <div className='mainAbout' id='AboutSection'>
            <div className='d-flex justify-content-center '>
                <div className='About'>
                    <h1>NOSOSTROS <span>SOMOS</span> </h1>
                    <section>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum minima vitae commodi harum animi sunt temporibus,
                        ut magnam ullam a consequuntur quae at totam facere nobis nemo corrupti. Dolorum, corrupti!

                        <br /><br />
                        similique expedita architecto laudantium numquam. Molestias
                        quidem laudantium cumque quas repellendus magnam corrupti? Doloribus.

                        <br /><br />
                        similique expedita architecto laudantium numquam. Molestias
                        quidem laudantium cumque quas repellendus magnam corrupti? Doloribus.
                    </section>
                </div>

                <div className='AboutImage'>
                    <img src={image1} alt="" />
                </div>

            </div>

        </div>





    )
}
