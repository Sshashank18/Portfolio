import React from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor';


const countup = (props) => {
    return(
        <div>
            <span className="count">
            <CountUp end={props.end} duration={props.duration} redraw={true}>
                {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                    </VisibilitySensor>
                )}
            </CountUp>
            </span>
            <br/>
            <span>{props.content}</span>
        </div>
    )
}

export default countup