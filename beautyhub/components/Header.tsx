import React from 'react';
import {Box, Flex, Heading, Image} from '@chakra-ui/react';
import CustomImage from './CustomInage';
import Link from 'next/link';
import Register from './Register';
import Login from './Login';

export default function Header() {
    return (
        <>
        <Box  pos={'fixed'} top={0} w='full' >
            <Flex justifyContent='space-evenly' alignItems='center' py={2} bgColor={'#FF5DB2'} >
                <Box w='150px' h='75px'>
                    <Image src={'/Images/logo-color(1).png'} alt={'logo'} w='150px' h='75px' />
                </Box>
                <Register />
                <Login />
            </Flex>
        </Box>
        </>
    )
};
