import Image from 'next/image'
import React from 'react'
import bgImg from '../../../images/h3-slider3.jpg'
import bgImg2 from '../../../images/h3-slider1-2.png'
export default function Hero() {
    return (
        <div className='top-0 absolute w-full'>
            <div className='flex justify-between bg-[url(https://i.ibb.co.com/LzBr7cyt/h3-slider3.jpg)]' >
            <div></div>
                <Image
                    src={bgImg2}
                    alt='bg slider img'
                    width={1400}
                    height={800}
                />

            </div>
        </div>
    )
}
