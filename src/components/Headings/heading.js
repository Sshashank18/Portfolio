import React from 'react'
import Aux from '../../auxi'
import classes from './heading.module.css'

const Heading = (props) => {
    return(
        <Aux>
            <h2 className={classes.topHead} style={{fontSize:props.tfs,left:props.tl,color:props.col}}>{props.small}</h2>
            <h1 className={classes.baseHead} style={{top:props.bt,left:props.bl}}>{props.big}</h1>
        </Aux>        
    )
}

export default Heading