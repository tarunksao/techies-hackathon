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
    FormControl,
    FormLabel,
    Heading,
    Input,
    useDisclosure,
    VStack
  } from '@chakra-ui/react'
import { HandleChangeEvent } from "@/Utils/types";

const initForm = {
    email:'',
    password:''
};

export default function Login() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef(null);
    const [loginForm, setLoginForm] = React.useState(initForm);

    const handleChange = (e:HandleChangeEvent) => {
        setLoginForm({...loginForm, [e.target.name]:e.target.value});
    }

    const handleClick = () => {
        console.log(loginForm);
        setLoginForm(initForm);
    }

    const {email, password} = loginForm;

    return (
        <Box>
            <Button ref={btnRef} onClick={onOpen} colorScheme={'yellow'}>Login</Button>
            <Drawer isOpen={isOpen} onClose={onClose} placement="right" size='md'>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Heading textAlign='center' color='#1f0f53'>
                            Login
                        </Heading>
                    </DrawerHeader>
                    <DrawerBody>
                        <VStack gap={6}>
                            <FormControl isRequired>
                                <FormLabel>Email Address</FormLabel>
                                <Input focusBorderColor='gold' _placeholder={{color:'pink.500'}} type='text' placeholder="Enter Email Address" name='email' value={email} onChange={(e:HandleChangeEvent)=>handleChange(e)} />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Password</FormLabel>
                                <Input focusBorderColor='gold' _placeholder={{color:'pink.500'}} type='password' placeholder="Enter Password" name='password' value={password} onChange={(e:HandleChangeEvent)=>handleChange(e)} />
                            </FormControl>
                        </VStack>
                    </DrawerBody>
                    <DrawerFooter mb='40px'>
                        <Button w='full' onClick={handleClick} colorScheme={'yellow'}>Register</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Box>
    )
};
