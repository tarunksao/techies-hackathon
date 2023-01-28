import React from "react";
import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input,
    useDisclosure,
  } from '@chakra-ui/react'

export default function Login() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef(null);

    return (
        <Box>
            <Button ref={btnRef} onClick={onOpen} colorScheme={'yellow'}>Login</Button>
            <Drawer isOpen={isOpen} onClose={onClose} placement="right">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Login</DrawerHeader>
                    <DrawerBody>
                        <Input type='text' placeholder="Enter Email"/>
                        <Input type='Password' placeholder="Enter Password"/>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
};
