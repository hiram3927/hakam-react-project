import React from 'react'
import Image from '../img/img1.png'
import { KeyboardArrowDown } from "@material-ui/icons";

function About() {
  return (
    <div className="container">
      <div className="box">
        <div className="img">
        <img src={Image}/>
        </div>
        <p className="text">이케빈</p>
        <p className="subtext">개발자 지망생<br></br><br></br>
        안녕하세요 이케빈이라고 해용!<br></br>
        저는 개발자가 되고싶어용!</p>
        <div className="button"><KeyboardArrowDown></KeyboardArrowDown> 더보기</div>
        </div>
    </div>
  )
}

export default About