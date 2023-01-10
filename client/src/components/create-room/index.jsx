import Head from '../head';
import { FormControl, Flex, Button, FormLabel, Input, Grid, GridItem, Box } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import axios from 'axios';
import config from '../../config/config.json';
import SideBar from '../side-bar';
import { Navigate } from 'react-router-dom';
export default () => {
    const name = useRef("");
    const [searchMember, setSearchMember] = useState("");
    const [members, setMembers] = useState([]);
    const [membersPinked, setPicked] = useState([]);
    let token = localStorage.getItem("accessToken");
    if (!token) {
        return <Navigate to={"/login"} />
    }
    useEffect(() => {
        let token = localStorage.getItem("accessToken")
        axios.get(`${config.url}/v1/users`, {
            params: {
                name: searchMember
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(data => {
            console.log(data.data);
            setMembers(data.data)
        })
    }, [searchMember])
    const pickMember = async (member) => {
        let find = membersPinked.filter(val => val._id == member._id);
        if (find.length > 0) return;
        setPicked([...membersPinked, member])
    }
    const createRoom = async () => {
        let memberIds = membersPinked.map(val => val._id);
        let token = localStorage.getItem("accessToken")
        axios.post(`${config.url}/v1/rooms`, {
            name: name.current.value || null,
            members: memberIds
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(data => {
            console.log(data);
            setPicked([])
        })
    }
    return (
        <>
            <Head />
            <Grid height={"100vh"}
                templateColumns='repeat(6, 1fr)'
                background={"black"}
            >
                <GridItem colSpan={1} background={"black"} padding={'2'} color={"rgba(86,86,86,255)"}>
                    <SideBar />
                </GridItem>
                <GridItem colSpan={5} marginTop={"1"} background={"rgba(32,35,44,255)"}>

                    <Flex color='white' justifyContent={'center'} height="100vh" background={"rgba(27,30,37,255)"} >
                        <Box w='500px' color={"white"}>
                            <FormControl>
                                <FormLabel>Name</FormLabel>
                                <Input color={"black"} type='text' backgroundColor={"white"} ref={name} />
                            </FormControl>
                            <FormControl>
                                {membersPinked.map(val => (
                                    <Box background={"rgba(242,252,137,255)"} width="70px" color={"black"} height="40px" textAlign={"center"}
                                        lineHeight="40px" borderRadius={"10px"} key={val._id}
                                    >{val.name}</Box>
                                ))}
                                <FormLabel>choice member</FormLabel>
                                <Input color={"black"} type='text' backgroundColor={"white"} value={searchMember} onChange={e => setSearchMember(e.target.value)} />
                                <Box>
                                    <Flex flexFlow={"column"}>
                                        {members.map((val) => (
                                            <Box _hover={{ background: "#363941", cursor: "pointer" }} key={val._id} onClick={() => pickMember(val)}>{val.name}</Box>
                                        ))}
                                    </Flex>
                                </Box>
                            </FormControl>
                            <FormControl>
                                <Button colorScheme={'purple'} onClick={createRoom}>Create</Button>
                            </FormControl>
                        </Box>
                    </Flex>
                </GridItem>
            </Grid>
        </>
    )
}