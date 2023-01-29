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
  } from '@chakra-ui/react';

const initForm = {
    name:"",
    email:'',
    password:'',
    age:''
}

export default function Register() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef(null);
    const [registerForm, setRegisterForm] = React.useState(initForm);

    const handleChange = (e:Event) => {
        e.preventDefault();
        setRegisterForm({...registerForm, [e.target.name]:e.target.value});
    }

    const handleClick = () => {
        console.log(registerForm);
        setRegisterForm(initForm);
    }

    const {name, email, password, age} = registerForm;

    return (
        <Box>
            <Button ref={btnRef} onClick={onOpen} colorScheme={'yellow'}>Register</Button>
            <Drawer isOpen={isOpen} onClose={onClose} placement="right" size={'md'}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Heading textAlign='center' color='#1f0f53'>
                            Register Here
                        </Heading>
                    </DrawerHeader>
                    <DrawerBody mt='0px'>
                        <VStack gap={6}>
                            <FormControl isRequired>
                                <FormLabel>Name</FormLabel>
                                <Input focusBorderColor='gold' _placeholder={{color:'pink.500'}} type='text' placeholder="Enter Name" name='name' value={name} onChange={(e:Event)=>handleChange(e)} />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Email Address</FormLabel>
                                <Input focusBorderColor='gold' _placeholder={{color:'pink.500'}} type='text' placeholder="Enter Email Address" name='email' value={email} onChange={(e:Event)=>handleChange(e)} />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Password</FormLabel>
                                <Input focusBorderColor='gold' _placeholder={{color:'pink.500'}} type='password' placeholder="Enter Password" name='password' value={password} onChange={(e:Event)=>handleChange(e)} />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Age</FormLabel>
                                <Input focusBorderColor='gold' _placeholder={{color:'pink.500'}} type='text' placeholder="Enter Age" name='age' value={age} onChange={(e:Event)=>handleChange(e)} />
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
