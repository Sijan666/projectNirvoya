import React from 'react'
import Images from '../Images'
import Footertop1 from '/src/assets/ft1.png'
import Footertop2 from '/src/assets/ft2.png'
import Footertop3 from '/src/assets/ft3.png'
import Footertop4 from '/src/assets/ft4.png'

const FooterTop = () => {
  return (
   <>
   <div className="">
    <div className="flex items-center">
        <Images imgSrc={Footertop1}/>
        <Images imgSrc={Footertop1}/>
        <Images imgSrc={Footertop1}/>
        <Images imgSrc={Footertop1}/>
    </div>
   </div>
   </>
  )
}

export default FooterTop