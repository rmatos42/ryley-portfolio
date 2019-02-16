import React, { Component } from 'react';
import logo from './logo.svg';
import Icon from '@material-ui/core/Icon';
import { Star } from '@material-ui/icons'
import { ArrowDropDown } from '@material-ui/icons'
import { FormatQuote } from '@material-ui/icons'
import Fab from '@material-ui/core/Fab';

import './App.css';
import { IconButton, TextField, Card} from '@material-ui/core';

const Divider = () => (
  <div style={{display: 'flex', alignItems: 'center', maxWidth: '300px', margin: '0 auto'}}>
  <div style={{width: '100%', backgroundColor: 'white', height: '2px', lineHeight: '100%', margin: '5px'}}/>
  <div style={{}} className="foo">
    <Star/>
  </div>
  <div style={{width: '100%', backgroundColor: 'white', height: '2px', lineHeight: '100%', margin: '5px'}}/>
</div>
)

class Projects extends Component {
  constructor(props) {
    super(props);
    this.renderProject = this.renderProject.bind(this);
  }

  renderProject() {

  }

  render() {

    return (
      <div style={{display: 'flex', width: '100%'}}>
        <div style={{width: '100%'}}>
          <img src='iifym.png' style={{width: '100%', height: 'auto'}}/>
        </div>
        <div style={{width: '100%'}}>
          <img src='iifym.png' style={{width: '100%', height: 'auto'}}/>
        </div>
        <div style={{width: '100%'}}>
          <img src='iifym.png' style={{width: '100%', height: 'auto'}}/>
        </div>
      </div>
    )
  }
}

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.renderTestimonial = this.renderTestimonial.bind(this)
  }

  renderTestimonial(testimoinal) {

  }

  render() {
    return (
      <div style={{textAlign: 'center', maxWidth: '400px', margin: '0 auto'}}>
        <div style={{padding: '30px', margin: '0 auto'}}>
          <h3>Damon Hernandez</h3>
          <h4>Product Manger - Samsung Research America</h4>
          <FormatQuote/>
          <p style={{textAlign: 'left'}}>
            I was fortunate to work with Ryley at Samsung Research on a project that combined IoT and Web based virtual reality. Not only is he a super talented developer, he is a pleasure to work with and very professional. I highly recommend him to any that are looking for a quality engineer.
          </p>
        </div>
        <Divider/>
        <div style={{padding: '30px', margin: '0 auto'}}>
          <h3>Damon Hernandez</h3>
          <h4>Product Manger - Samsung Research America</h4>
          <FormatQuote/>
          <p style={{textAlign: 'left'}}>
            I was fortunate to work with Ryley at Samsung Research on a project that combined IoT and Web based virtual reality. Not only is he a super talented developer, he is a pleasure to work with and very professional. I highly recommend him to any that are looking for a quality engineer.
          </p>
        </div>
        <Divider/>
        <div style={{padding: '30px', margin: '0 auto'}}>
        <h3>Damon Hernandez</h3>
        <h4>Product Manger - Samsung Research America</h4>
        <FormatQuote/>
        <p style={{textAlign: 'left'}}>
          I was fortunate to work with Ryley at Samsung Research on a project that combined IoT and Web based virtual reality. Not only is he a super talented developer, he is a pleasure to work with and very professional. I highly recommend him to any that are looking for a quality engineer.
        </p>
      </div>
      </div>
    )
  }
}

class TypeText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      n: 0
    }
    this.revealNext = this.revealNext.bind(this)
  }

  revealNext() {
    let n = this.state.n
    if (n != this.props.text.length) {
      n += 1;
      setTimeout(() => {
        this.setState({n}, () => this.revealNext())
      }, 100)
    }
  }

  componentWillMount() {
    setTimeout(() => this.revealNext(), this.props.delay || 0)
  }

  render() {
    return (
      <div>
        {this.props.text.substring(0, this.state.n)}
        <div style={{backgroundColor: 'black', minWidth: '10px', display: 'inline-block'}}></div>
      </div>
    )
  }
}

class Tags extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.renderTags = this.renderTags.bind(this);
  }

  renderTags() {
    let tags = this.props.tags || [];
    let jsx = [];        
    for (var i in tags) {
      jsx.push(<span style={this.props.tagStyle}>{tags[i]}</span>);
      if (i != tags.length - 1) {
        //not last one, push gap
        jsx.push(<div/>);
      }
    }
    return jsx
  }

  render() {
    return (
      <div className="TagBox">
        {this.renderTags()}
      </div>
    )
  }
}

class Contact extends Component {
  constructor(props) {
    super(props)
      this.state = {

      }
  }

  render() {
    return (
      <Card style={{margin: '30px', maxWidth: '450px', margin: '0 auto', padding: '30px'}}>
        <TextField style={{width: '100%'}} placeholder='your name.'/>
        <TextField style={{width: '100%'}} placeholder='your email.'/>
        <TextField style={{width: '100%'}} placeholder='your message.' rows="5" multiline/>
      </Card>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }



  render() {
    return (
      <div className="App">
        <div style={{position: 'relative', height: '80vh', textAlign: 'center', color: 'white',overflow: 'hidden', }}>
          <img className="speedyboi" src='speedyboi.png' style={{zIndex: -2, position: 'absolute', top: 0 }}/>
          <div style={{width: '100%', backgroundColor: 'rgba(0,0,0,.6)', position: 'absolute', height: '100%'}}/>
          <div style={{textAlign: 'right', height: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', position: 'absolute', right: 0, paddingRight: '30px'}}>
            <h1>
              my name is ryley.
            </h1>
            <h2>
              i create user interfaces.
            </h2> 
          </div>
        </div>
        <div  style={{backgroundColor: '#2B303B', color: 'white', position: 'relative', textAlign: 'center'}}>
          <Fab style={{position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', backgroundColor: '#212121'}}><ArrowDropDown/></Fab>
            <h2 style={{margin: '0px', padding: '30px'}}>
              stuff i've done.
            </h2>
        <Projects/>
        </div>
        <div  style={{backgroundColor: '#607D8B', color: 'white', position: 'relative', textAlign: 'center'}}>
            <h2 style={{margin: '0px', padding: '30px'}}>
              people i've worked with.
            </h2>
        <Testimonials/>
        </div>
        <div  style={{backgroundColor: '#2B303B', color: 'white', position: 'relative', textAlign: 'center'}}>
            <h2 style={{margin: '0px', padding: '30px'}}>
              contact me.
            </h2>
        <Contact/>
        </div>
      </div>
      
    )
  }
}

export default App;
