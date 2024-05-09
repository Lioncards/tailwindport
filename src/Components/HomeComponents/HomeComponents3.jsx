'use client'

import { useState } from "react"
import Image from "next/image"
import React from "react"
import dimage from '@/Components/Images/Gallery Section.png'
import eimage from '@/Components/Images/Testimonial Section.png'
import fimage from '@/Components/Images/Contact Section.png'

const HomeComponents3=()=>{

    return(
        <div className="bg-white text-black p-7">
            <div className="grid justify-center items-center">
                <Image src={dimage}/>
                <Image src={eimage}/>
                <Image src={fimage}/>
            </div>
        </div>
    )
}

export default HomeComponents3