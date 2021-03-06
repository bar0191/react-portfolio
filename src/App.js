import React from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, 
		 Row, Card, Button, CardImg, CardTitle, CardText,
 		 CardSubtitle, CardBlock, CardGroup } from 'reactstrap'
import Particles from 'react-particles-js'
import FaAngleDoubleDown from 'react-icons/lib/fa/angle-double-down'
import FaUser from 'react-icons/lib/fa/user'
import FaCode from 'react-icons/lib/fa/code'
import FaBlackTie from 'react-icons/lib/fa/black-tie'
import FaExternalLink from 'react-icons/lib/fa/external-link'
import FaGithub from 'react-icons/lib/fa/github'
import FaGraduationCap from 'react-icons/lib/fa/graduation-cap'
import FaEnvelopeO from 'react-icons/lib/fa/envelope-o'
import FaLinkedin from 'react-icons/lib/fa/linkedin'
import Typist from 'react-typist'

//styles
import './App.scss'

import { particleConfig } from './particlesjs-config.js'

//import TWHeader from './components/tw-header'

var Scroll  = require('react-scroll')

var Link       = Scroll.Link
var Element    = Scroll.Element
var Events     = Scroll.Events
var scroll     = Scroll.animateScroll
var scrollSpy  = Scroll.scrollSpy

class App extends React.Component {
	constructor(props) {
		super(props)

    	this.toggle = this.toggle.bind(this)
    	this.state = {
    	  isOpen: false,
    	  headerStrings: [
  			"Junior Developer",
  			"Student and Researcher",
  			"Passionate and Hard Working"
  			],
    	  headerArrayPos: 0
    	}
  	}

  	componentDidMount() {

    	Events.scrollEvent.register('begin', function(to, element) {
    	 	//console.log("begin", arguments)
    	})

    	Events.scrollEvent.register('end', function(to, element) {
      		//console.log("end", arguments)
    	})

    	scrollSpy.update()
    	//this.interval = setInterval(() => this.loopHeaderStrings(), 6000)
  	}

  	componentWillUnmount() {
    	Events.scrollEvent.remove('begin')
    	Events.scrollEvent.remove('end')
    	//clearInterval(this.interval)
  	}

  	scrollToTop() {
    	scroll.scrollToTop()
  	}

  	scrollToBottom() {
  	  scroll.scrollToBottom()
  	}

  	scrollTo() {
  	  scroll.scrollTo(100)
  	}

  	scrollMore() {
  	  scroll.scrollMore(100)
  	}

  	handleSetActive(to) {
  	  console.log(to)
  	}

  	toggle() {
    	this.setState({
      		isOpen: !this.state.isOpen
    	})
  	}

  	loopHeaderStrings() {
  		if (this.state.headerArrayPos === 3) {
  			this.setState({headerArrayPos: 0})
  			console.log(this.state.headerArrayPos)
  		} else {
  			this.setState({headerArrayPos: this.state.headerArrayPos+1})
  			console.log(this.state.headerArrayPos)
  		}
  	}

	render() {

    	return (
        <div>	
				<Navbar fixed="top" color="faded" full toggleable>
					<NavbarToggler right onClick={this.toggle} />
			 		<NavbarBrand href="/react-portfolio">Brandon Reid</NavbarBrand>
					<Collapse isOpen={this.state.isOpen} navbar>
		 			<Nav className="ml-auto" navbar>
				 		<NavItem>
				   			<NavLink className="cursor"><Link activeClass="active" className="welcome" to="welcome" spy={true} smooth={true} duration={500} ><h5>Welcome</h5></Link></NavLink>
						</NavItem>
			     		<NavItem>
			  				<NavLink className="cursor"><Link activeClass="active" className="about" to="about" spy={true} smooth={true} duration={500} ><h5>About</h5></Link></NavLink>
				    	</NavItem>
				    	<NavItem>
			  				<NavLink className="cursor"><Link activeClass="active" className="skills" to="skills" spy={true} smooth={true} duration={500} ><h5>Skills</h5></Link></NavLink>
				    	</NavItem>
				    	<NavItem>
			  				<NavLink className="cursor"><Link activeClass="active" className="portfolio" to="portfolio" spy={true} smooth={true} duration={500} ><h5>Portfolio</h5></Link></NavLink>
				    	</NavItem>
				    	<NavItem>
			  				<NavLink className="cursor"><Link activeClass="active" className="education" to="education" spy={true} smooth={true} duration={500} ><h5>Education</h5></Link></NavLink>
				    	</NavItem>
				    	<NavItem>
			  				<NavLink className="cursor"><Link activeClass="active" className="contact" to="contact" spy={true} smooth={true} duration={500} ><h5>Contact</h5></Link></NavLink>
				    	</NavItem>
				    	<NavItem>
				    		<a href="https://drive.google.com/file/d/0B1uaZFI6UYNVVE4tWlUtTjdnU1U/view?usp=sharing">
			  					<NavLink className="cursor"> <h5>Resume</h5></NavLink>
			  				</a>
				    	</NavItem>
			   		</Nav>
			    	</Collapse>
				</Navbar>
				
		

		   	<Element name="welcome" className="element" >
          		<div className="App">
		    	  	<div className="App-header">
		    	  		<Particles 
		    	  		height="100vh" width="100vw"
		    	  		params={particleConfig}
		    	  		/>
		    	  		{/*<h3 className="subTitleMiddle2">Brandon Reid</h3>*/}
		    	  		
			    	  	<Typist className="display-2 titleMiddle">
			    	  	{this.state.headerStrings[this.state.headerArrayPos]}
			    	  	</Typist>
			    	  	{/*<TWHeader className="display-2 titleMiddle" header={this.state.headerStrings[this.state.headerArrayPos]} />*/}
			    	  	<h3 className="subTitleMiddle">Welcome to my portfolio!</h3>
			    	  	<div className="bounce">
			    	  		<Link activeClass="active" className="about" to="about" spy={true} smooth={true} duration={500} >
			    	  			<FaAngleDoubleDown size="50" color="#FFF"/>
			    	  		</Link>
			    	  	</div>
			    	  	
		   	  		</div>
		   		</div>
        	</Element>

        	<Element name="about" className="aboutElement" >
          		<div className="Title">
		    	  	<div className="Title-header d-flex align-items-center">
		    	  		<FaUser size="45" color="#FFF"/>
		    	  		<h1 className="ml-2 mt-3">About</h1>
		   	  		</div>
		   		</div>

		   		<Card className="ml-4 mr-4 mt-4 mb-4">
		   			<CardBlock>
		   				<h2>Junior Developer / Code Monkey</h2>
		   				<div className="mt-4 line"></div>
		   				<br></br>
		   				<blockquote className="blockquote">
		                	<p className="mb-0 aboutElement-blockFont">"When something is important enough, you do it even if the odds are not in your favor." - Elon Musk</p>
		            	</blockquote>
		            	<p className="mt-4 aboutElement-aboutFont">Brandon joined the LevelTen team as a summer intern in 2017. He is currently pursuing a bachelors degree in Information Technology with a security concentration at the University of North Texas, and is going on his senior year. His interests are in full stack development, cyber security, and drone technology. Brandon has lived in the DFW area all of his life, and grew up absorbed in technology. His father introduced him to an apple II at the age of 3, and his father swears he was hooked ever since.  </p>
		            	<p className="mt-4 aboutElement-aboutFont">He has always had a passion for technology, and considers himself a generalist and futurist. In his free time, he enjoys attending hackathons, working on react.js projects, and has recently started building his first racing drone. As a generalist, Brandon enjoys using his keen learning abilities, and his vigorous work ethic to achieve any task or accomplish any goal.</p>
		            	<br></br>
		            	<h2>Facts you dont really need (or want) to know</h2>
		   				<div className="mt-4 line"></div>
		            	
		            	<p className="mt-4">Party Trick: I’d be the guy to solve the random Rubix cube laying around. </p>
		            	
		            	<p className="mt-4">Guiltiest pleasure: Binge playing some new video game I shouldn’t have bought. </p>
		            	
		            	<p className="mt-4">PPick your poison: Cookie Dough. </p>
		            	
		            	<p className="mt-4">Voted most likely to: Not get the joke. </p>
		            	
		   			</CardBlock>
		   		</Card>
        	</Element>

        	<Element name="skills" className="skillsElement" >
          		<div className="Title">
		    	  	<div className="Title-header d-flex align-items-center">
		    	  		<FaCode size="45" color="#FFF"/>
		    	  		<h1 className="ml-2 mt-3">Skills</h1>
		   	  		</div>
		   		</div>

		   		
		   		<Card className="ml-5 mr-5 mt-5 mb-5">
		   			<CardTitle className="ml-4 mt-4 h3 text-uppercase">Front-End</CardTitle>
		   			<div className="mt-3 ml-4 line"></div>
		   			<CardBlock>	
		   					<Row className="ml-2 mt-3">
		   						<div className="mr-4">
		   							<img height="85" width="85" src={require('./images/HTML5_Badge.png')} role="presentation"/>
		   							<p className='text-center'>HTML</p>
		   						</div>
		   						<div className="mr-4">
		   							<img height="85" width="85" src={require('./images/Css3.png')} role="presentation"/>
		   							<p className='text-center'>CSS</p>
		   						</div>
		   						<div className="mr-4">
		   							<img height="85" width="85" src={require('./images/sass.png')} role="presentation"/>
		   							<p className='text-center'>Sass/Scss</p>
		   						</div>
		   						<div className="mr-4">
		   							<img height="85" width="85" src={require('./images/logo-bootstrap-4.png')} role="presentation"/>
		   							<p className='text-center'>Bootstrap 4</p>
		   						</div>
		   					</Row>	
		   			</CardBlock>
		   		</Card>

		   		<Card className="ml-5 mr-5 mt-5 mb-5">
		   			<CardTitle className="ml-4 mt-4 h3 text-uppercase">Back-End</CardTitle>
		   			<div className="mt-3 ml-4 line"></div>
		   			<CardBlock>	
		   					<Row className="ml-2 mt-3">
		   						<div className="mr-4">
		   							<img height="85" width="85" src={require('./images/cb_logo.png')} role="presentation"/>
		   							<p className='text-center'>Couchbase</p>
		   						</div>
		   						<div className="mr-4">
		   							<img height="85" width="85" src={require('./images/expressjs.png')} role="presentation"/>
		   							<p className='text-center'>Express</p>
		   						</div>
		   					</Row>	
		   			</CardBlock>
		   		</Card>

		   		<Card className="ml-5 mr-5 mt-5 mb-5">
		   			<CardTitle className="ml-4 mt-4 h3 text-uppercase">Javascript</CardTitle>
		   			<div className=" mt-3 ml-4 line"></div>
		   			<CardBlock>	
		   					<Row className="ml-2 mt-3">
		   						<div className="mr-4">
		   							<img height="85" width="100" src={require('./images/logo_javascript.png')} role="presentation"/>
		   							<p className='text-center'>Javascript</p>
		   						</div>
		   						<div className="mr-4">
		   							<img height="85" width="85" src={require('./images/nodejs_logo.png')} role="presentation"/>
		   							<p className='text-center'>NodeJS</p>
		   						</div>
		   						<div className="mr-4">
		   							<img height="85" width="85" src={require('./images/react-logo.png')} role="presentation"/>
		   							<p className='text-center'>ReactJS</p>
		   						</div>
		   					</Row>	
		   			</CardBlock>
		   		</Card>

		   		<Card className="ml-5 mr-5 mt-5 mb-5">
		   			<CardTitle className="ml-4 mt-4 h3 text-uppercase">Languages</CardTitle>
		   			<div className=" mt-3 ml-4 line"></div>
		   			<CardBlock>	
		   					<Row className="ml-2 mt-3">
		   						<div className="mr-4">
		   							<img height="85" width="85" src={require('./images/c-logo.png')} role="presentation"/>
		   							<p className='text-center'>C/C++</p>
		   						</div>
		   						<div className="mr-4">
		   							<img height="85" width="85" src={require('./images/Java.png')} role="presentation"/>
		   							<p className='text-center'>Java</p>
		   						</div>
		   						<div className="mr-4">
		   							<img height="85" width="85" src={require('./images/App-Terminal.png')} role="presentation"/>
		   							<p className='text-center'>Bash/Shell</p>
		   						</div>
		   					</Row>	
		   			</CardBlock>
		   		</Card>

		   		<Card className="ml-5 mr-5 mt-5 mb-5">
		   			<CardTitle className="ml-4 mt-4 h3 text-uppercase">Other</CardTitle>
		   			<div className=" mt-3 ml-4 line"></div>
		   			<CardBlock>	
		   					<Row className="ml-2 mt-3">
		   						<div className="mr-4">
		   							<img height="85" width="85" src={require('./images/Git-Icon.png')} role="presentation"/>
		   							<p className='text-center'>Git</p>
		   						</div>
		   						<div className="mr-4">
		   							<img height="85" width="85" src={require('./images/heroku.png')} role="presentation"/>
		   							<p className='text-center'>Heroku</p>
		   						</div>
		   						<div className="mr-4">
		   							<img height="85" width="85" src={require('./images/wordpress.png')} role="presentation"/>
		   							<p className='text-center'>Wordpress</p>
		   						</div>
		   						<div className="mr-4">
		   							<img height="85" width="85" src={require('./images/tumblr.png')} role="presentation"/>
		   							<p className='text-center'>Tumblr</p>
		   						</div>
		   						<div className="mr-4">
		   							<img height="85" width="85" src={require('./images/Digitalocean.png')} role="presentation"/>
		   							<p className='text-center'>Digital Ocean</p>
		   						</div>
		   						<div className="mr-4">
		   							<img height="85" width="85" src={require('./images/android.png')} role="presentation"/>
		   							<p className='text-center'>Android</p>
		   						</div>
		   					</Row>	
		   			</CardBlock>
		   		</Card>	
        	</Element>

        	<Element name="portfolio" className="portfolioElement" >
          		<div className="Title">
		    	  	<div className="Title-header d-flex align-items-center">
		    	  		<FaBlackTie size="45" color="#FFF"/>
		    	  		<h1 className="ml-2 mt-3">Portfolio</h1>
		   	  		</div>
		   		</div>

		   		<Row className="ml-2 mt-3 d-flex">
				      <Card className="cardSize ml-4 mr-4 mt-4 mb-4">
				        <CardImg top width="100%" src={require('./images/latherby.png')} alt="Card image cap" />
				        <CardBlock>
				          <CardTitle>Lather by Nature</CardTitle>
				          <CardSubtitle>Built with Wordpress</CardSubtitle>
				          <CardText>A simple e-commerce site built from wordpress, and wordpress themes.</CardText>
				          <a href="https://latherbynature.com">
				          	<Button className="btn-fab" size="lg"><FaExternalLink size="26" color="#336B87"/></Button>
				          </a>
				          <Button className="btn-fab" size="lg"><FaGithub size="26" color="#336B87"/></Button>
				        </CardBlock>
				      </Card>

				      <Card className="cardSize ml-4 mr-4 mt-4 mb-4">
				        <CardImg top width="100%" src={require('./images/codeblue.png')} alt="Card image cap" />
				        <CardBlock>
				          <CardTitle>Code Blue Portal</CardTitle>
				          <CardSubtitle>Admin Panel for Statistics built on CERN Stack</CardSubtitle>
				          <CardText>Private project done in conjunction with Presbytarian Hospital and University of North Texas.</CardText>
				          <a href="http://portal.cprlifeguard.com">
				          	<Button className="btn-fab" size="lg"><FaExternalLink size="26" color="#336B87"/></Button>
				          </a>
				          <a href="https://github.com/bar0191/heroku-cpr-portal">
				          	<Button className="btn-fab" size="lg"><FaGithub size="26" color="#336B87"/></Button>
				          </a>
				        </CardBlock>
				      </Card>

				      <Card className="cardSize ml-4 mr-4 mt-4 mb-4">
				        <CardImg top width="100%" src={require('./images/portfolio.png')} alt="Card image cap" />
				        <CardBlock>
				          <CardTitle>This Portfolio</CardTitle>
				          <CardSubtitle>Build on React JS</CardSubtitle>
				          <CardText>This portfolio was build with ReactJS, and Bootstrap 4.</CardText>
				          <a href="#">
				          	<Button className="btn-fab" size="lg"><FaExternalLink size="26" color="#336B87"/></Button>
				          </a>
				          <a href="https://github.com/bar0191/react-portfolio">
				          	<Button className="btn-fab" size="lg"><FaGithub size="26" color="#336B87"/></Button>
				          </a>
				        </CardBlock>
				      </Card>
		   		</Row>	
        	</Element>

        	<Element name="education" className="edElement" >
          		<div className="Title">
		    	  	<div className="Title-header d-flex align-items-center">
		    	  		<FaGraduationCap size="45" color="#FFF"/>
		    	  		<h1 className="ml-2 mt-3">Education</h1>
		   	  		</div>
		   		</div>

		   		<CardGroup className="ml-5 mr-5 mt-5 mb-5">
		   		<Card className="edCardSize mr-5 mb-5">
		   			<CardBlock>
		   				<CardTitle className="text-uppercase">The University of North Texas</CardTitle>
		   				<br/>
				        <CardSubtitle>Denton, TX | 2014 - 2018</CardSubtitle>
				        <br/>
				        <CardText>
				        <ul>
						  <li>B.A. in Information Technology and Engineering</li>
						  <li>Federal Security certificate administered by the NSA</li>
						  <li>Member of Cyber Security Association - 2 years</li>
						  <li>Undergraduate research assistant with Computer Science Dept.</li>
						</ul>
				        </CardText>
		   			</CardBlock>
		   		</Card>

		   		<Card className="edCardSize mb-5">
		   			<CardBlock>
		   				<CardTitle className="text-uppercase">North Central Texas College</CardTitle>
		   				<br/>
				        <CardSubtitle>Corinth, TX | 2012 - 2014</CardSubtitle>
				        <br/>
				        <CardText>
				        <ul>
						  <li>Dean's list Spring/Fall 2013</li>
						  <li>Basic courses done here</li>
						</ul>
				        </CardText>
		   			</CardBlock>
		   		</Card>
		   		</CardGroup>
        	</Element>

        	<Element name="contact" className="contactElement" >
          		<div className="Title">
		    	  	<div className="Title-header d-flex align-items-center">
		    	  		<FaEnvelopeO size="45" color="#FFF"/>
		    	  		<h1 className="ml-2 mt-3">Contact</h1>
		   	  		</div>
		   		</div>

		   		
		   			<CardBlock>
		   				<a href="https://github.com/bar0191/">
				        	<Button className="btn-fab mr-4" color="info" size="lg"><FaGithub size="26" color="#FFF"/></Button>
				        	github.com/bar0191/
				        </a>
		   			</CardBlock>
		   			<CardBlock>
		   				<a href="https://www.linkedin.com/in/brandon-reid/">
				        	<Button className="btn-fab mr-4" color="info" size="lg"><FaLinkedin size="26" color="#FFF"/></Button>
				        	linkedin.com/in/brandon-reid/
				        </a>
		   			</CardBlock>
		   			<CardBlock>
		   				<a href="mailto:brandonreid2@my.unt.edu">
				        	<Button className="btn-fab mr-4" color="info" size="lg"><FaEnvelopeO size="26" color="#FFF"/></Button>
				        	brandonreid2@my.unt.edu
				        </a>
		   			</CardBlock>
		   		
        	</Element>
        </div>
    )
  }
}

export default App
