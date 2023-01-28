import React from "react";
import {Box, Heading, Text, VStack} from '@chakra-ui/react'
import Carousals from "./Carousals";
import blogs from "./blogsArray";

export default function HomePage() {
    return (
        <Box py={10} bgColor={'#ffdb99'} bgImage={'/Images/colorful-make-up.webp'} bgBlendMode={"color-burn"} mt={20}>
            <VStack m='auto' color={'#1f0f53'} textAlign='center' py={10} gap={6} w='80vw' >
                <Heading fontSize='60px'>Welcome to BeautyHub</Heading>
                <Text fontWeight='semibold' fontSize='35px'>A Makeup Tutorial Website</Text>
                <Text fontWeight='semibold' fontSize='20px'>We have a variety of Makeup Tutorial videos which a user can watch in the website itself. No need to install any video player or switch tabs to watch video.</Text>
                <Text fontWeight='semibold' fontSize='20px'>Learn at your own pace, no need to hurry. Increase/Decrease the Playback Speed as per your convenience.</Text>
                <Text fontWeight='semibold' fontSize='20px'>Learn anytime from any place. All you need is a device with internet connection.</Text>
            </VStack>
            <Box w='90vw' m='auto'>
                <Carousals blogs={blogs} />
            </Box>
        </Box>
    )
};
