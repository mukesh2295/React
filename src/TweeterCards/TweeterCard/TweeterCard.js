import React, { Component } from 'react';
import { Card, CardImg, CardHeader,CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';
import DuckDuckGo_logo from '../../assests/images/DuckDuckgo.svg';
import Twitter_logo from '../../assests/images/twitter_logo.svg';
import Twitter_verified from '../../assests/images/twitter_verified.svg';
import classes from './Tweetercard.css';

const tweeterCard = (props) => (

      <div className="TweeterCard">

      <Card className = "Card">
        <CardHeader>
          <div className = "CardHeader_logo">
          <img src = {DuckDuckGo_logo}/></div>
          <div className = " "> <a href="https://twitter.com/duckduckgo" class="tweeterCardName">DuckDuckGo</a></div>
          <img src={Twitter_verified} class="tw-card__verified" aria-hidden="true" />
          <a href="https://twitter.com/duckduckgo" class="tw-card__username tw-card__link">@DuckDuckGo</a>
        </CardHeader>
        <CardBody>
        </CardBody>
        <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
          <CardLink href="#">Card_Link</CardLink>
          <CardLink href="#">Another_Link</CardLink>
        </CardBody>
      </Card>
    </div>
      
    );
  

export default tweeterCard;
