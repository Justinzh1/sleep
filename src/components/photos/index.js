import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Gallery from 'react-grid-gallery';
import './photos.css';

const IMAGES = [{
						src: "1.jpg",
						thumbnail: "1.jpg",
						thumbnailWidth: 2550,
						thumbnailHeight: 3300,
		},
		{
						src: "2.png",
						thumbnail: "2.png",
						thumbnailWidth: 714,
						thumbnailHeight: 847,
		},
		{
						src: "3.jpg",
						thumbnail: "3.jpg",
						thumbnailWidth: 900,
						thumbnailHeight: 2395,
		},
		{
						src: "4.jpg",
						thumbnail: "4.jpg",
						thumbnailWidth: 931,
						thumbnailHeight: 1200,
		},
		{
						src: "5.jpg",
						thumbnail: "5.jpg",
						thumbnailWidth: 960,
						thumbnailHeight: 719,
		},
		{
						src: "6.jpg",
						thumbnail: "6.jpg",
						thumbnailWidth: 360,
						thumbnailHeight: 432,
		},
		{
						src: "7.jpg",
						thumbnail: "7.jpg",
						thumbnailWidth: 971,
						thumbnailHeight: 2430,
		},
		{
						src: "8.PNG",
						thumbnail: "8.PNG",
						thumbnailWidth: 1200,
						thumbnailHeight: 1681,
		},
		{
						src: "9.PNG",
						thumbnail: "9.PNG",
						thumbnailWidth: 1836,
						thumbnailHeight: 1406,
		},
		{
						src: "10.PNG",
						thumbnail: "10.PNG",
						thumbnailWidth: 816,
						thumbnailHeight: 796,
		},
		{
						src: "11.JPG",
						thumbnail: "11.JPG",
						thumbnailWidth: 1494,
						thumbnailHeight: 1803,
		},
		{
						src: "12.GIF",
						thumbnail: "12.GIF",
						thumbnailWidth: 997,
						thumbnailHeight: 1820,
		},
		{
						src: "13.jpg",
						thumbnail: "13.jpg",
						thumbnailWidth: 4642,
						thumbnailHeight: 2756,
		},
		{
						src: "14.png",
						thumbnail: "14.png",
						thumbnailWidth: 1500,
						thumbnailHeight: 1039,
		},
		{
						src: "15.jpg",
						thumbnail: "15.jpg",
						thumbnailWidth: 638,
						thumbnailHeight: 479,
		},
		{
						src: "16.jpeg",
						thumbnail: "16.jpeg",
						thumbnailWidth: 225,
						thumbnailHeight: 225,
		},
		{
						src: "17.png",
						thumbnail: "17.png",
						thumbnailWidth: 1080,
						thumbnailHeight: 1080,
		},
		{
						src: "18.jpg",
						thumbnail: "18.jpg",
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
