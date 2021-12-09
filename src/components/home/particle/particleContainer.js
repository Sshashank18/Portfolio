import React from 'react'
import Particles from 'react-particles-js'

const particles = () => {
    return (
        <div className ="particle">
                <Particles 
                    height = "621px"
                    params={{
                    "particles": {
                        "number": {
                            "value": 160,
                            "density": {
                                "enable": false,
                            }
                        },
                        "size": {
                            "value": 10,
                            "random": true
                        },
                        "move": {
                            "direction": "bottom",
                            "out_mode": "out"
                        },
                        "line_linked": {
                            "enable": false
                        }
                    },
                    
                }}
               
            />

        </div>
            


    )
}

export default particles