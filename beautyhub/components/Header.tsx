import React from 'react';
import {Box, Button, Flex, Heading, Image} from '@chakra-ui/react';
import Link from 'next/link';
import Register from './Register';
import Login from './Login';
import { useAppDispatch, useAppSelector } from '@/pages/redux-arch/store';
import { logoutUser } from '@/pages/redux-arch/users/users.actions';

export default function Header() {
    const {isAuth, login} = useAppSelector(store => store.users);
    const dispatch = useAppDispatch();

    console.log('navbar', login);
    const handleClick = () => {
        dispatch(logoutUser);
    }

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
                {!isAuth?(<Flex gap={10}>
                    <Register />
                    <Login />
                </Flex>) : <Flex gap={10}>
                <Button colorScheme={'yellow'}>{login.payload?.name}</Button>
                <Button colorScheme={'yellow'} onClick={handleClick}>Logout</Button>
                    </Flex>}
            </Flex>
        </Box>
    )
};
