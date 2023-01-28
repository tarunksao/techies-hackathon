import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Blogs} from './blogsArray';
import {Box, Heading, Text} from '@chakra-ui/react';

type BlogsType = {
    blogs:Blogs[]
}

export default function Carousals({blogs}:BlogsType) {
    // console.log(blogs);
    return (
        <div className='Carousel' style={{margin:'auto', width:'100%'}}>
        <Carousel
            autoPlay={true}
            centerSlidePercentage={50}
            centerMode
            infiniteLoop
            swipeable
            showArrows={true}
            showStatus={false}
            emulateTouch
            thumbWidth={100}
            interval={3000}
            transitionTime={1500}
            width={1380}
            useKeyboardArrows
            stopOnHover
            showThumbs={false}
            >
                {blogs.map((el:Blogs, i:number) => 
                <div
                    style={{
                    margin: "10px",
                    height: "400px",
                    background: "#ffdb99",
                    color: "#1f0f53",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    padding: "25px",
                    fontFamily: "cursive",
                    boxShadow: "rgba(255, 93, 178, 0.5) 2px 2px 2px 2px",
                    }}
                    key={i}
                >
                <Heading mb={10}>{el.heading}</Heading>
                <Text>{el.desc}</Text>
              </div>)}
        </Carousel>
        </div>
    )
};
