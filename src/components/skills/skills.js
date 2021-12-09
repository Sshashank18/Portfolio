import React from 'react';
import Heading from '../Headings/heading';
import SkillBar from 'react-skillbars';
import styled from 'styled-components'

const skills = () => {

    const StyledSpan = styled.span`
        position:relative;
        top:170px;

        @media (max-width: 375px){
            position:initial;
        }
        `
    const skills = [
        {type: "Python", level: 85},
        {type: "Data Structures", level: 90},
        {type: "Javascript", level: 70},
        {type: "NodeJS", level: 75},
        {type: "HTML", level: 90},
        {type: "CSS", level: 90},
        {type: "ReactJS", level: 70},
        {type: "React Native", level: 30},
        ];


    return(
        <div className="skills" id="Skills">
            <div className="heads">
                <Heading small="My Skills" big="skills"/>
            </div>
            <div style={{textAlign:"center",paddingBottom:"30px"}}>
            <StyledSpan>I possess knowledge about c++ and advanced data structures. I am also a full stack web engineer.</StyledSpan>
            </div>
            <div className='skillcontainer'>
                <div className="skillmeter">
                    {/* <SkillMeter name="Python" level="Proficient" width={80} />
                    <SkillMeter name="Data Structures" level="Proficient" width={80}/>
                    <SkillMeter name="Javascript" level="Intermediate" width={60}/>
                    <SkillMeter name="NodeJS" level="Intermediate" width={70}/>
                    <SkillMeter name="HTML" level="Proficient" width={90}/>
                    <SkillMeter name="CSS" level="Proficient" width={90}/>
                    <SkillMeter name="ReactJS" level="Intermediate" width={70}/>
                    <SkillMeter name="React Native" level="Beginner" width={30}/> */}

                    <SkillBar skills={skills}/>
                </div>
            </div>
        </div>
    );
}

export default skills