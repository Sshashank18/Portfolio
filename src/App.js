import React,{Component} from 'react';
import './App.css'
import Main from './Main'
import loading from './loading.gif'

class App extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
    
    window.setTimeout(()=>{
      this.setState({loading:false})
    },2000)
  }

  render(){


    let app = null
    if(this.state.loading === true){
      app=(
      <div className="app" style={{backgroundColor:'black',height:'100vh',paddingTop:'10%',paddingBottom:'100%'}}>
        <img className="App2" src={loading} style={{marginLeft:'35vw',paddingBottom:'10%',position:'fixed'}}/>
      </div>
      )
    }
    else {
      app = (
        <div className="App">
          <Main />
        </div>
      );
    }

    return(
      app
    );
  }
}

export default App;
