import React from 'react';
import {Box, Button, Flex, Heading, Image} from '@chakra-ui/react';
import Link from 'next/link';
import Register from './Register';
import Login from './Login';

export default function Header() {
    return (
        <Box  pos={'fixed'} top={0} w='full' >
            <Flex justifyContent='space-around' alignItems='center' py={2} bgColor={'#FF5DB2'} >
                <Link href='/'>
                    <Box w='180px' h='75px'>
                        <Image src={'/Images/logo-color(1).png'} alt={'logo'} w='180px' h='75px' />
                    </Box>
                </Link>
                <Link href='/products'>
                    <Button colorScheme={'yellow'}>All Videos</Button>
                </Link>
                {/* <Link>
                    <Button colorScheme={'yellow'}>About Us</Button>
                </Link> */}
                <Flex gap={10}>
                    <Register />
                    <Login />
                </Flex>
            </Flex>
        </Box>
    )
};
