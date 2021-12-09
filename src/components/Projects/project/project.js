import React, { Component } from 'react'
import Tags from '../tags/tags'
import classes from './project.module.css'


class project extends Component{

    
    render(){

        let tags = []
        if(this.props.projectTags){
            for (let i=0; i<this.props.projectTags.tags.length; i++){
                tags.push(<Tags name={this.props.projectTags.tags[i]} backgroundColor={this.props.projectTags.color[i]}/>)
            }
        }

    return(
        <div className={classes.projectBox}>
            <div className={classes.projectImg}>
                <img src={this.props.projectImage} width="100%" height="350px"/>
            </div>
            <div className={classes.projectText}>
                <div className={classes.projectDescr}>
                    <div className={classes.projectHead}>
                        {this.props.projectName}
                    </div>
                    <div className={classes.projectDescription}>
                        <p>{this.props.projectDescription}</p>
                        <p><u>Github Link:</u> &nbsp; <a href={this.props.projectGLink} target="_blank">{this.props.projectGLink}</a></p>
                        {this.props.projectWLink ? <p><u>Website Link:</u> &nbsp;<a href={this.props.projectWLink} target="_blank">{this.props.projectWLink}</a></p>:null}
                    </div>
                </div>
                <div className={classes.projectTags}>
                    {tags}
                </div>
            </div>
        </div>
    )
}
}

export default project