import React, { Component } from 'react'
import Heading from '../Headings/heading'
import insta from './images/Instagram.png'
import linkedin from './images/linkedin.png'
import github from './images/github.png'
import axios from 'axios'
import logo from '../../s_logo.png'

class Contact extends Component{
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            subject: "",
            message: ""
        }
    }

    inputHandler = (key, value) => {
        const currentState = { ...this.state };
        currentState[key] = value;

        this.setState(currentState);
    }

    submitHandler = (e) => {
        e.preventDefault()
        const data = {
            name:this.state.name,
            email:this.state.email,
            subject:this.state.subject,
            message:this.state.message
        };

        axios.post('https://portfolio-11202.firebaseio.com/message.json',
        {
            data
        })
        .then(response => {
            console.log(response)
            alert("Thank You");
        })
        .catch(err => {
            console.log(err);
        })
    }

    render(){
        return(
            <div className="contact" id="Contact">
                <svg viewBox="0 0 1400 100" class="svg-top">
                    <polygon points="0,100 200,0 1200,0 1400,100 1400,0 0,0 0,100" style={{fill:"#000000",stroke:"#000000",strokeWidth:5}}>
                </polygon></svg>

                <div className="contactHeading">
                    <Heading small="Contact Me" big="Contact" tl="65%" bt="-30px"/>
                </div>
                <div className="contactBox">
                    <form >
                        <div className="row">
                            <div className="col-75">
                                <input type="text" id="name" name="name" placeholder="Your Name.." onChange={event => this.inputHandler("name", event.target.value)}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-75">
                                <input type="email" id="email" name="email" placeholder="Your Email.." onChange={event => this.inputHandler("email", event.target.value)}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-75">
                                <input type="text" id="subject" name="subject" placeholder="Subject.." onChange={event => this.inputHandler("subject", event.target.value)}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-75">
                                <textarea id="msg" name="msg" placeholder="Write something.." style={{height:'200px'}} onChange={event => this.inputHandler("message", event.target.value)}></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <button className="subm" onClick={this.submitHandler} value="SEND MESSAGE">SEND MESSAGE</button>
                        </div>
                    </form>
                </div>
                <div className="contactHandles">
                    <a href="https://www.instagram.com/__deucalion_/" target="_blank">
                        <div className="flex">
                            <img src={insta} alt ="..."/>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/shashank-a-27055b123/" target="_blank" >
                        <div className="flex">
                            <img src={linkedin} alt ="..."/>
                        </div>
                    </a>
                    <a href="https://github.com/Sshashank18" target="_blank">
                        <div className="flex">
                            <img src={github} alt ="..."/>
                        </div>
                    </a>
                    
                </div>
                <img src={logo} style={{width:'40px',display:'flex',margin:'0 auto'}}/>
                <div className="contactFooter">
                    Made with 💖 by Shashank Aggarwal
                </div>
            </div>
        )
    }
}

export default Contact;