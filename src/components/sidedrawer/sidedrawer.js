import React, { Component } from 'react'
import logo from '../../s_logo.png'
import { Link, animateScroll as scroll } from "react-scroll";

class sideDrawer extends Component{
        
        constructor(props){
                super(props)
                this.state = {
                        disp:'none',
                        color:"black",
                }
        }
        
        listenScrollEvent = e =>{
                if(window.scrollY>590){
                    this.setState({color:"white"})
                }else{
                    this.setState({color:"black"})
                }
            }
        
        componentDidMount(){
        window.addEventListener('scroll',this.listenScrollEvent)
        }


        toggleHandler = e => {
                
                if (this.state.disp == 'none'){
                        this.setState({disp:'block'})
                }else{
                        this.setState({disp:'none'})
                }
        }
        
        render(){
                return(
                        <div className="sideDrawerToggle">
                        <i className="fas fa-bars" style={{color:this.state.color}} onClick={()=>this.toggleHandler()}></i>
                        <nav className="sideDrawer" style={{display:this.state.disp}}>
                        <i className="fas fa-times cross" onClick={()=>this.toggleHandler()}></i>
                        <ul >
                        <li className="nav-item"><Link activeClass="active"
                        spy={true}
                        smooth={true}
                        duration={500} 
                        onClick={()=>this.toggleHandler()}
                        to="Home">Home</Link></li>
                        <li className="nav-item"><Link 
                        onClick={()=>this.toggleHandler()}
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        duration={500} 
                        to="About">About</Link></li>
                        <li className="nav-item" ><Link 
                        onClick={()=>this.toggleHandler()}
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        duration={500} 
                        to="Skills">Skills</Link></li>
                        <li className="nav-item" ><Link 
                        onClick={()=>this.toggleHandler()}
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        duration={500} 
                        to="Experience">Experience</Link></li>
                        <li className="nav-item" ><Link 
                        onClick={()=>this.toggleHandler()}
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        duration={500} 
                        to="Projects">Projects</Link></li>
                        <li className="nav-item" ><Link 
                        onClick={()=>this.toggleHandler()}
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        duration={500} 
                        to="Contact">Contact</Link></li>
                        </ul>
                        <img src={logo} style={{float:'left',width:'40px',marginLeft:'25%',marginTop:'10%'}}/>
                        </nav>
                        </div>
                        )
                }
        }
        
        export default sideDrawer