import Header from '../head'
import { Flex, Box, FormControl, FormLabel, Input, FormHelperText, Button, useToast } from '@chakra-ui/react'
import { useRef } from 'react'
import { useCallback } from 'react';
import axios from 'axios';
import config from '../../config/config.json'
import { useNavigate } from 'react-router-dom';
export default () => {
    const username = useRef("");
    const name = useRef("");
    const password = useRef("");
    const toast = useToast();
    const navigator = useNavigate();
    const handleRegister = useCallback(async () => {
        let dataCreate = {
            username: username.current.value,
            name: name.current.value,
            password: password.current.value
        };
        let [data, err] = await axios.post(`${config.url}/v1/users`, dataCreate).then(data => [data, null]).catch(err => [null, err]);
        if (err) {
            return toast({
                colorScheme: 'pink.100',
                title: "Register fail",
                duration: 1000,
                position: 'bottom-right',
                status: "error"
            })
        }
        toast({
            colorScheme: 'pink.100',
            title: "Login success",
            duration: 1000,
            position: 'bottom-right',
            status: "success"
        });
        return navigator("/login")
    }, []);
    return (
        <>
            <Header />
            <Flex color='white' justifyContent={'center'} height="100vh" background={"rgba(27,30,37,255)"}>
                <Box w='500px' color={"white"}>
                    <FormControl>
                        <FormLabel>Full Name</FormLabel>
                        <Input type='text' color={"black"} backgroundColor={"white"} ref={name} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>User Name</FormLabel>
                        <Input type='email' color={"black"} backgroundColor={"white"} ref={username} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input type='password' color={"black"} backgroundColor={"white"} ref={password} />
                    </FormControl>
                    <FormControl>
                        <Button colorScheme={'purple'} onClick={handleRegister}>Login</Button>
                    </FormControl>
                </Box>
            </Flex>
        </>
    )
}