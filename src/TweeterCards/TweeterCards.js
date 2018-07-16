import React, { Component } from 'react';
import TweeterCard from './TweeterCard/TweeterCard';
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';
import axios from 'axios';
import classes from './TwitterCard.css';


class TweeterCards extends Component {

	state = {
		posts: [],
		loadedPosts: null
	}

	componentDidMount(){
			
	}

	render() {
		{/*const posts = this.state.posts.map(post => {
			return  <TweeterCard/>
		}); */}

	    return (
	    	<div>
	    	</div>
	    	
	        <div className="TweeterCards">

	          <TweeterCard/>

	        </div>

	        <div>
	        </div>
	    );
	}
}

export default TweeterCards;
