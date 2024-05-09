'use client'

import React from "react"
import { useState } from "react"
import HomeComponents1 from "@/Components/HomeComponents/HomeComponents1"
import HomeComponents2 from "@/Components/HomeComponents/HomeComponents2"
import HomeComponents3 from "@/Components/HomeComponents/HomeComponents3"

const page=()=>{

  return(
    <div>
        <HomeComponents1/>
        <HomeComponents2/>
        <HomeComponents3/>
    </div>
  )
}

export default page