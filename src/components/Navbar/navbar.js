import React,{Component,useRef} from 'react';
import {NavLink} from 'react-router-dom'
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from '../../s_logo.png'

class Navbar extends Component{

    constructor(props){
        super(props)
        this.state = {
            color:"black",
            background:'rgba(144, 103, 103, 0)'
        }
        this.myRef = React.createRef()  
    }

    listenScrollEvent = e =>{
        if(window.scrollY>590){
            this.setState({color:"white"})
            this.setState({background:'rgba(144, 103, 103, 0.4)'})
        }else{
            this.setState({color:"black"})
            this.setState({background:'rgba(144, 103, 103, 0)'})
        }
    }

    componentDidMount(){
        window.addEventListener('scroll',this.listenScrollEvent)
    }

    render(){
        return(
            <nav className="navbar" style={{background:this.state.background}}>
                <img src={Logo} style={{float:'left',width:'25px',marginLeft:'5%',marginTop:'10px'}}/>
                <ul style={{color:this.state.color,float:'right',marginRight:'50px'}}>
                    <li className="nav-item"><Link activeClass="active"
                            spy={true}
                            smooth={true}
                            duration={500} 
                            to="Home">Home</Link></li>
                    <li className="nav-item"><Link activeClass="active"
                            spy={true}
                            smooth={true}
                            duration={500} 
                            to="About">About</Link></li>
                    <li className="nav-item"><Link activeClass="active"
                            spy={true}
                            smooth={true}
                            duration={500} 
                            to="Skills">Skills</Link></li>
                    <li className="nav-item"><Link activeClass="active"
                            spy={true}
                            smooth={true}
                            duration={500} 
                            to="Experience">Experience</Link></li>
                    <li className="nav-item"><Link activeClass="active"
                            spy={true}
                            smooth={true}
                            duration={500} 
                            to="Projects">Projects</Link></li>
                    <li className="nav-item"><Link activeClass="active"
                            spy={true}
                            smooth={true}
                            duration={500} 
                            to="Contact">Contact</Link></li>
                </ul>
            </nav>
        );
    } 
}

export default Navbar