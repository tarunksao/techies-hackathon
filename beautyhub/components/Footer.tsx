import React from "react";
import {Box, Flex, Text} from '@chakra-ui/react';

export default function Footer() {
    return (
        <Box borderTop='1px solid lightgray' bgColor='#ffdb99' py={6}>
            <Flex justifyContent='center' alignItems='center' >
                <Text fontSize='20px' color='#1f0f53' fontWeight='semibold'>We will soon be available on Social Media as well</Text>
            </Flex>
        </Box>
    )
};
