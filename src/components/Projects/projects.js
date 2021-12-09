import React, { Component } from 'react'
import Heading from '../Headings/heading';
import Project from './project/project'
import Tags from './tags/tags'
import classes from './projects.module.css'
import Button from './Button/button'

import { projects } from './projectdata';

class Projects extends Component{

    constructor(props){
        super(props)
        this.state = {
            index: 0,
            disableNext:false,
            disablePrev:true,
            currentTab:"all"
        }
    }
    
    toggleNext(e){
        e.preventDefault()
        this.setState({disableNext:true})
        let index = 4
        if (index>8){
            index = 4
        }
        else{
            this.setState({index:index})
        }
        this.setState({disablePrev:false})
    }

    togglePrev(e){
        e.preventDefault()
        this.setState({disableNext:false})
        if (this.state.index>0){
            this.setState({disablePrev:false})
        }
        let index = 0
        this.setState({disablePrev:true})
        if (index<0){
            index = 0
        }
        else{
            this.setState({index:index})
        }
    }

    changeTabHandler = tab => {        
        this.setState({
            currentTab: tab,
            index:0,
            disableNext: projects[tab].length > 4 ? false : true,
            disablePrev:true,
        });

        
    }



    render(){

            let items = []

            let data = null;

            {(() => {
                switch (this.state.currentTab) {
                    case "all":
                        data = projects.all.map(project => (
                            <Project
                                key={project.id}
                                projectImage={project.projectImage}
                                projectGLink={project.projectGLink}
                                projectWLink={project.projectWLink}
                                projectName={project.projectName}
                                projectDescription={project.projectDescription}
                                projectTags={project.projectTags}
                            />
                        ));

                        return data;

                    case "react":
                        data = projects.react.map(project => (
                            <Project
                                key={project.id}
                                projectImage={project.projectImage}
                                projectGLink={project.projectGLink}
                                projectWLink={project.projectWLink}
                                projectName={project.projectName}
                                projectDescription={project.projectDescription}
                                projectTags={project.projectTags}
                            />
                        ));
                        return data;

                    case "native":
                        data = projects.native.map(project => (
                            <Project
                                key={project.id}
                                projectImage={project.projectImage}
                                projectGLink={project.projectGLink}
                                projectWLink={project.projectWLink}
                                projectName={project.projectName}
                                projectDescription={project.projectDescription}
                                projectTags={project.projectTags}
                            />
                        ));
                        return data;

                    case "js":
                        data = projects.js.map(project => (
                            <Project
                                key={project.id}
                                projectImage={project.projectImage}
                                projectGLink={project.projectGLink}
                                projectWLink={project.projectWLink}
                                projectName={project.projectName}
                                projectDescription={project.projectDescription}
                                projectTags={project.projectTags}
                            />
                        ));
                        return data;

                    default:
                        return "";
                }
            })()}


        let x = 0;

        // if (data.length<4){
        //     this.setState({disableNext:true})
        // }

        for (let i = this.state.index;i<=data.length;i++) {
            if (x<4){
                items.push(<div>{data[i]}</div>)
            }
            else{
                break
            }
            x++;
        }

                
        return(
            <div className = "projects" id="Projects">
            <div className = "projectHeading">
                <Heading small="My Projects" big="Projects" tfs='47px' tl="66%" bt="-30px"/>
                <div className={classes.ButtonContainers}>
                    <Button classes={classes.Button} onClick={() => this.changeTabHandler("all")} selected={this.state.currentTab === "all"}>All</Button>
                    <Button classes={classes.Button} onClick={() => this.changeTabHandler("react")} selected={this.state.currentTab === "react"}>React + Redux</Button>
                    <Button classes={classes.Button} onClick={() => this.changeTabHandler("native")} selected={this.state.currentTab === "native"}>React Native</Button>
                    <Button classes={classes.Button} onClick={() => this.changeTabHandler("js")} selected={this.state.currentTab === "js"}>Javascript</Button>
                </div>
            </div>
            <div className="projectContainer">
                {items}
            </div>
            <div className="Buttons">
                {this.state.disablePrev?<button onClick={this.togglePrev.bind(this)} style={{cursor:'not-allowed'}}><Tags name="< Prev" backgroundColor='rgb(207, 53, 15)' color="white" borderR='5px'  fontFamily='Raleway'/></button>:<button onClick={this.togglePrev.bind(this)}><Tags name="< Prev" borderR='5px' fontFamily='Raleway' /></button>}
                {this.state.disableNext?<button onClick={this.toggleNext.bind(this)} style={{cursor:'not-allowed'}}><Tags name="Next >" backgroundColor='rgb(207, 53, 15)'  color="white" borderR='5px'  fontFamily='Raleway'/></button>:<button onClick={this.toggleNext.bind(this)}><Tags name="Next >" borderR='5px' fontFamily='Raleway'/></button>}
            </div>
            </div>
        )

    }
}

export default Projects