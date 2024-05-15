import React from 'react'
import image1 from './../assets/images/Banner03.jpg';
import './BackgroundOverlay.css'

export default function BackgroundOverlay() {
    return (

        <div className='d-flex mainBg'>
            <div className='bgContainer'>
                <img className='img-fluid  overlayImg' src={image1} alt="" />


               
            </div>
            <div className='bgText'>
                    <h3>QUE DICEN NUESTROS CLIENTES?</h3> <br />
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Dolore reiciendis explicabo similique beatae ipsa eius qui facere quaerat atque quia nam, accusantium,
                          </h6> <br />
                    <div > Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iusto ipsum cupiditate.</div>
                </div>
        </div>
    )
}
