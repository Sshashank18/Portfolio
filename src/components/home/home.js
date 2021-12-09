import React from 'react'
import ParticleContainer from './particle/particleContainer'
import Typed from './typed/typed'

const home = () => {
    return (
        <div className = 'home' id="Home">
            <Typed />
            <ParticleContainer />
            
            <svg viewBox="0 0 1400 100" className="svg-bottom">
                <polygon points="0,0 200,100 1200,100 1400,0 1400,100 0,100 0,0" style={{fill:"#000000",stroke:"#000000",strokeWidth:5}}/>
            </svg>
        </div>
    )
}

export default home