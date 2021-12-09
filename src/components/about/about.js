import React from 'react'
import profile from './image.png'
import Heading from '../Headings/heading'
import CountUpSyn from '../countup/countup'

const about = () => {
    return(
        <div className = "about" id="About">
            <br/>
            <div className="aboutBigbox">
                <div className="aboutContainer">
                    <div className="aboutImage">
                        <img src={profile} style={{width:"40%",marginTop:'15%',marginRight:'20%',float:'right',objectFit:'cover'}} alt="Here i come...."/>
                    </div>
                    <div className = "aboutContent">
                        <Heading small="About Me" big="About" bl='0%' tl="5%"/>
                        <div className="content">
                            <h2>Developer &amp; Machine Learning Enthusiast</h2>

                            I am a full stack developer. I design, build &amp; sometimes rescue applications and Skilled in languages/frameworks like JavaScript , NodeJs , ReactJs , MongoDb , Bootstrap , Sql , Postgresql etc.
                            <br/>
                            <br/>
                            I also love Data Structures and Algorithms , the crux of CS and parallely learn it along with my side-projects.
                            <br/><br/>
                            <div className="left">
                                <CountUpSyn end={100000} duration={10} content={'Lines of Code'}/>
                            </div>
                            <CountUpSyn end={100} duration = {13} content={'Sense of Humour'}/>
                            <br/>
                            <CountUpSyn end={587} duration={10} content={'Cups of Coffee'}/>
                            
                        </div>
                    </div>
                </div>
            
            </div>
           
        </div>
    )
}

export default about