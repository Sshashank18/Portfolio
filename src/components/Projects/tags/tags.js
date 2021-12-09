import React from 'react'
import classes from './tag.module.css'

const tags = (props) => {
    return(
        <div className={classes.tag} style={{backgroundColor:props.backgroundColor,borderRadius:props.borderR,fontFamily:props.fontFamily,color:props.color}}>
            {props.name}
        </div>
    )
}

export default tags