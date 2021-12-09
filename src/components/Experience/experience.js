import React from 'react'
import Heading from '../Headings/heading'
import classes from './experience.module.css'
import ExpTag from './ExpTag/expTag'

const experience = () => {
    return(
        <div className="Experience" id="Experience">
            <div className="expHeading">
                <Heading small="My Experience" big="Experience"/>
            </div>
            <div className="ExpContainer">
                <div className="Expcontent">
                    <div className={classes.timelineDivider}>
                        <div className={classes.timelineTraveller}>
                            <i className="fas fa-plane"></i>
                        </div>
                    </div>
                    
                </div>
                <div className={classes.right}>
                    <ExpTag image="https://res.cloudinary.com/deucalion/image/upload/v1598259668/Portfolio/CB_nfwna5.png" name="Coding Blocks" position="Campus Ambassador" time="Dec 2019 - Present" tag="https://codingblocks.com/campus-ambassador-program.html"/>
                    <ExpTag image="https://res.cloudinary.com/deucalion/image/upload/v1598259668/Portfolio/CodingNinjasSquare_nbrjx0.png" name="Coding Ninjas" position="Campus Ambassador" time="Sep 2018 - Present" tag="https://campus.codingninjas.com/"/>
                    <ExpTag image="https://res.cloudinary.com/deucalion/image/upload/v1617448754/shapeYou_lluk1h.png" name="Shape You" position="Developer" time="Oct 2020 - Jan 2021" tag="https://campus.codingninjas.com/"/>
                </div>
            </div>
        </div>
    )
}

export default experience