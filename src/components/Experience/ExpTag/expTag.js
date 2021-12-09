import React from 'react'

const expTag = (props) => {
    return(
        <div className="expTag" style={{color:'White',fontFamily:"Titillium Web"}}>
            <img style={{float: "left",margin:"10px",height:"26px",width:'26px'}} src={props.image} alt="logo" />
            <div className="job" >
                <a href={props.tag} target="_blank"  className="ExpTagA"
                    style={{textDecoration:'none',lineHeight:'inherit',color:'White',transition: 'all 0.3s ease-in-out',
                            position:'relative',fontWeight:'bold',fontSize:'17px'}}>{props.name}</a>
                <p className="expP" style={{margin:'0',padding:'0',fontSize:'15px'}}> 
                    {props.position}
                    <span style={{color: '#555555'}}>&nbsp;&nbsp;{props.time}</span>
                </p>
            </div>
        </div>
    )
}

export default expTag;