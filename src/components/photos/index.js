import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Gallery from 'react-grid-gallery';
import './photos.css';

const IMAGES = [{
						src: "photos/1.jpg",
						thumbnail: "photos/1.jpg",
						thumbnailWidth: 2550,
						thumbnailHeight: 3300,
		},
		{
						src: "photos/2.png",
						thumbnail: "photos/2.png",
						thumbnailWidth: 714,
						thumbnailHeight: 847,
		},
		{
						src: "photos/3.jpg",
						thumbnail: "photos/3.jpg",
						thumbnailWidth: 900,
						thumbnailHeight: 2395,
		},
		{
						src: "photos/4.jpg",
						thumbnail: "photos/4.jpg",
						thumbnailWidth: 931,
						thumbnailHeight: 1200,
		},
		{
						src: "photos/5.jpg",
						thumbnail: "photos/5.jpg",
						thumbnailWidth: 960,
						thumbnailHeight: 719,
		},
		{
						src: "photos/6.jpg",
						thumbnail: "photos/6.jpg",
						thumbnailWidth: 360,
						thumbnailHeight: 432,
		},
		{
						src: "photos/7.jpg",
						thumbnail: "photos/7.jpg",
						thumbnailWidth: 971,
						thumbnailHeight: 2430,
		},
		{
						src: "photos/8.PNG",
						thumbnail: "photos/8.PNG",
						thumbnailWidth: 1200,
						thumbnailHeight: 1681,
		},
		{
						src: "photos/9.PNG",
						thumbnail: "photos/9.PNG",
						thumbnailWidth: 1836,
						thumbnailHeight: 1406,
		},
		{
						src: "photos/10.PNG",
						thumbnail: "photos/10.PNG",
						thumbnailWidth: 816,
						thumbnailHeight: 796,
		},
		{
						src: "photos/11.JPG",
						thumbnail: "photos/11.JPG",
						thumbnailWidth: 1494,
						thumbnailHeight: 1803,
		},
		{
						src: "photos/12.GIF",
						thumbnail: "photos/12.GIF",
						thumbnailWidth: 997,
						thumbnailHeight: 1820,
		},
		{
						src: "photos/13.jpg",
						thumbnail: "photos/13.jpg",
						thumbnailWidth: 4642,
						thumbnailHeight: 2756,
		},
		{
						src: "photos/14.png",
						thumbnail: "photos/14.png",
						thumbnailWidth: 1500,
						thumbnailHeight: 1039,
		},
		{
						src: "photos/15.jpg",
						thumbnail: "photos/15.jpg",
						thumbnailWidth: 638,
						thumbnailHeight: 479,
		},
		{
						src: "photos/16.jpeg",
						thumbnail: "photos/16.jpeg",
						thumbnailWidth: 225,
						thumbnailHeight: 225,
		},
		{
						src: "photos/17.png",
						thumbnail: "photos/17.png",
						thumbnailWidth: 1080,
						thumbnailHeight: 1080,
		},
		{
						src: "photos/18.jpg",
						thumbnail: "photos/18.jpg",
						thumbnailWidth: 1189,
						thumbnailHeight: 873,
		},
	];

class Photos extends Component {

	componentDidMount() {
	}
	
	render () {
		return (
			<div className="container">
					<h1 style={{
						"font-family":"crimson text",
						"margin": "0"
						}}>
						Sleep is important, heres why.
					</h1>
					<p style={{
						"margin": 0
						}}>
						The following graphics do a good job capturing the importance of sleep and the consequences of not getting enough. 
						</p>
					<br />
					<br />
					<Gallery
						images={IMAGES}
						rowHeight={220}
						margin={5}
						enableImageSelection={false}
					/>
			</div>
		);
	}
}

export default Photos;
