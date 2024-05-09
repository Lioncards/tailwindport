'use client'

import React from "react"
import { useState } from "react"

const page=()=>{

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
    </div>
  )
}

export default page