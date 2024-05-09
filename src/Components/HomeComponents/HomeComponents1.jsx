'use client'

import React from "react"
import { useState } from "react"
import Image from "next/image"
import aimage from '@/Components/Images/HeaderImage 1.png'

const HomeComponents1=()=>{

  return(
    <div className="bg-white text-black p-7">
        <div className="flex">
          <h3>Logo</h3>
          <ul className="ml-auto flex gap-7">
            <li>About</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-12 py-16 px-3">
          <div className="w-full justify-center flex flex-col">
            <p className="font-medium text-lg">Branding | Image making</p>
            <h2 className="text-7xl pt-7 font-semibold">Visual Designer</h2>
            <p className="pt-7">This is a template Figma file, turned into code using Anima.</p>
            <p className="pb-10">Learn more at AnimaApp.com</p>

            <div>
              <button className="bg-black text-white font-medium px-12 py-5">Contact</button>
            </div>
          </div>

          <div className="w-full justify-center grid">
            <Image src={aimage}/>
          </div>
        </div>
    </div>
  )
}

export default HomeComponents1