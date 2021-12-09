import React from 'react'
import Typical from 'react-typical';

const typed = () => {
    return(
        <div className="IntroHome">
            <h3 className="smallHead">Hello!! I am</h3>
            <h1 className="Name1">SHASHANK AGGARWAL</h1>
            <Typical
                loop={Infinity}
                wrapper="h2"
                steps={[
                    'FULL STACK  DEVELOPER', 
                    1000, 
                    'MACHINE  LEARNING  ENTHUSIAST', 
                    1000,
                    'CODER',
                    1000]}
            />
            <a href="https://drive.google.com/file/d/1LlqnRuVq9x5dHiL0QkmxqLOc7LJ_waOL/view?usp=sharing" target="_blank"><button className="resumeB">RESUME</button></a>

        </div>
    )
}

export default typed