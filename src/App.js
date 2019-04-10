import React, { Component } from 'react';
import logo from './logo.svg';
import Icon from '@material-ui/core/Icon';
import { Star } from '@material-ui/icons'
import { ArrowDropDown } from '@material-ui/icons'
import { Close } from '@material-ui/icons'
import { FormatQuote } from '@material-ui/icons'
import Fab from '@material-ui/core/Fab';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Avatar from '@material-ui/core/Avatar';

import './App.css';
import { IconButton, TextField, Card, CardHeader, CardMedia, CardContent, Typography, CardActionArea, Chip} from '@material-ui/core';

const SilkScroll = require('silk-scroll');
SilkScroll.active();

const projects = [
  {
    title: 'IIFYM Macro Calculator',
    thumb: 'iifym.png',
    skills: ['HTML', 'CSS', 'React.js', 'PostgresQL', 'Express.js']
  },
  {
    title: 'Samsung ARTIK IoT-VR Demo',
    thumb: 'iifym.png',
    skills: ['HTML', 'CSS', 'React.js', 'PostgresQL', 'Express.js']
  }
]

class RectButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false
    }
    this.startHover = this.startHover.bind(this)
    this.endHover = this.endHover.bind(this)
    this.onClick = this.onClick.bind(this);
  }

  startHover() {
    this.setState({hover: true})
  }

  endHover() {
    this.setState({hover: false})
  }

  onClick() {
    this.props.onClick();
    this.endHover();
  }

  render() {
    return (
      <div className="RectButton" onMouseEnter={this.startHover} onMouseLeave={this.endHover} onTouchStart={this.endHover} onClick={this.onClick} onTouchMove={this.endHover}>
        <div style={{color: this.state.hover ? '#607D8B' : 'white'}}>
          {this.props.children}
        </div>
        <span style={{backgroundColor: 'white', width: this.state.hover ? '100%' : '0%'}}/>
      </div>
    )
  }
}

const Divider = () => (
  <div style={{display: 'flex', alignItems: 'center', maxWidth: '300px', margin: '0 auto'}}>
  <div style={{width: '100%', backgroundColor: 'white', height: '2px', lineHeight: '100%', margin: '5px'}}/>
  <div style={{color: 'white'}} className="foo">
    <Star/>
  </div>
  <div style={{width: '100%', backgroundColor: 'white', height: '2px', lineHeight: '100%', margin: '5px'}}/>
</div>
)

class Projects extends Component {
  constructor(props) {
    super(props);
    this.renderProject = this.renderProject.bind(this);
    this.getTileWidth = this.getTileWidth.bind(this);
  }

  renderProject() {

  }

  getTileWidth() {
    let rowNum = 4
    if (this.props.width < 600) {
      rowNum = 1
    }
    else if (this.props.width < 800) {
      rowNum = 2
    }
    else if (this.props.width < 1200) {
      rowNum = 3
    }

    return `calc(100% / ${rowNum})`
  }

  render() {

    return (
      <div style={{width: '100%', textAlign: 'left'}}>
        {this.props.projects.map((project, i) => 
            <div style={{width: this.getTileWidth(), display: 'inline-block'}} onClick={() => this.props.openProject(i)}>
              <img src={project.thumb} style={{width: '100%', height: 'auto'}}/>
            </div>
          )
        }
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
          <h3>Mason Young</h3>
          <h4>Owner - MetaHobby</h4>
          <FormatQuote/>
          <p style={{textAlign: 'left'}}>
          I lead a team with Ryley Matos for a year and we accomplished 5 major launches all while putting out the fires of continuous changing products, marketing teams and sales tactics along with related tech integrations! His skill in React and Node and PostgreSQL makes him a valuable asset for any company. His ability to learn new skills makes me sad to see him go. I would love to continue working with Ryley Matos and would recommend his talent for your consideration.
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
        y: 0
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
      selectedProject: 0,
      modal: false
    }
    this.handleMobile = this.handleMobile.bind(this)
    this.openProject = this.openProject.bind(this)
    this.closeProject = this.closeProject.bind(this);
    this.renderProject = this.renderProject.bind(this);
    this.getTopPicturePosition = this.getTopPicturePosition.bind(this);
  }

  handleMobile() {
    let state = {}
    if (window.innerWidth <= 600 && !this.state.mobile) {
      console.log('mobile')
      state.mobile = true
    }
    else if (window.innerWidth > 600 && this.state.mobile) {
      console.log('desktop')
      state.mobile = false
    }
    state.width = window.innerWidth;
    this.setState(state)
  }

  componentWillMount() {
    this.handleMobile()
    window.addEventListener('resize', this.handleMobile)
    window.addEventListener('scroll', () => this.setState({y: window.scrollY}))
  }
  componentDidMount() {
    // this.setState({modal: true})
    // setTimeout(() => this.setState({modal: true}), 1000)
  }

  renderProject() {
    let project = projects[this.state.selectedProject]
    return (
        <Card style={{width: '100vw', maxWidth: '1000px', maxHeight: '100vh', margin: '0 auto', position: 'relative', textAlign: 'left', overflow: 'auto'}}>
          <div style={{textAlign: 'right'}}>
            <IconButton style={{}} onClick={this.closeProject}>
              <Close/>
            </IconButton>
          </div>
          <CardActionArea>
          <CardMedia><img src={project.thumb} style={{width: '100%', maxWidth: '500px', padding: '5px', boxSizing: 'border-box'}}/></CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            {project.skills.map((skill) => 
              <span>
                <Chip label={skill} style={{marginRight: '5px', marginBottom: '5px'}}/>
              </span>
            )}
          </CardContent>
          </CardActionArea>
        </Card>
    )
  }

  openProject(i) {
    this.setState({selectedProject: i, modal: true})
  }

  closeProject() {
    this.setState({modal: false})
  }

  gotoSection(id) {
    var elem = document.getElementById(id);
    elem.scrollIntoView({behavior: 'smooth'})
  }

  getTopPicturePosition() {
    if (this.state.width < 770) {
      return -250;
    }
    return 0;
  }

  render() {
    return (
      <div className="App">
        <header>
          <h2 style={{margin: 0, fontWeight: 'normal'}}>Ryley Matos</h2>
        </header>
        <div className="Modal" style={{top: this.state.modal ? '0px' : '-100%'}}>
          {this.renderProject()}
        </div>
        <div className="TopSection">
          <div style={{position: 'absolute', zIndex: '-1', width: '100%', top: 0, left: 0, height: '100%', overflow: 'hidden'}}>
            <div style={{position: 'absolute', backgroundColor: 'rgba(0, 0, 0, .5)', minWidth: '100%', minHeight: '100%', zIndex: '-2'}}/>
            <img src="speedyboi.png" style={{ minHeight: '100%', minWidth: '100%', position: 'absolute', left: this.getTopPicturePosition(), zIndex: '-3', top: this.state.y / 5}}/>
          </div>
          <h1>Hey, I'm a fullstack engineer living in San Francisco. I build highly scalable systems that reach thousands of customers.</h1>
          <RectButton onClick={() => this.gotoSection('projects')}>
             View My Work <ArrowDropDown/>
          </RectButton>
        </div>
        <div  style={{backgroundColor: '#2B303B', color: 'white', position: 'relative', textAlign: 'center'}} id="projects">
          {/* <Fab style={{position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', backgroundColor: '#212121'}}><ArrowDropDown/></Fab> */}
            <h2 style={{margin: '0px', padding: '30px'}}>
              stuff i've done.
            </h2>
        <Projects projects={projects} mobile={this.state.mobile} width={this.state.width} openProject={this.openProject} closeProject={() => {}}/>
        </div>
        <div  style={{backgroundColor: '#607D8B', color: 'white', position: 'relative', textAlign: 'center'}}>
            <h2 style={{margin: '0px', padding: '30px'}}>
              people i've worked with.
            </h2>
        <Testimonials/>
        </div>
        <div  style={{backgroundColor: '#2B303B', color: 'white', position: 'relative', textAlign: 'center', padding: '30px'}}>
            <h2 style={{margin: '0px', paddingBottom: '30px'}}>
              contact me.
            </h2>
        <Contact/>
        </div>
      </div>
      
    )
  }
}

export default App;
