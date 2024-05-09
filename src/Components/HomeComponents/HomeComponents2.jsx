'use client'

import { useState } from "react"
import Image from "next/image"
import React from "react"
import bimage from '@/Components/Images/Logo Bar.png'
import cimage from '@/Components/Images/Skills Section.png'

const HomeComponents2=()=>{

    return(
        <div className="bg-white text-black p-7">
            <div className="grid justify-center items-center py-5">
                <Image src={bimage} className="flex justify-center items-center"/>
                <Image src={cimage} className="flex justify-center items-center py-3"/>
            </div>
        </div>
    )
}

export default HomeComponents2