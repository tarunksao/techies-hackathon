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

export default function Register() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef(null);

    return (
        <Box>
            <Button ref={btnRef} onClick={onOpen} colorScheme={'yellow'}>Register</Button>
            <Drawer isOpen={isOpen} onClose={onClose} placement="right">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Register Here</DrawerHeader>
                    <DrawerBody>
                        <Input type='text' placeholder="Enter Name" />
                        <Input type='text' placeholder="Enter Gender" />
                        <Input type='number' placeholder="Enter Age" />
                        <Input type='text' placeholder="Enter Email"/>
                        <Input type='Password' placeholder="Enter Password"/>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
};
