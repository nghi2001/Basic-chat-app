import { useSelector } from "react-redux"
import { Box, Flex, Input, Icon, Text, Button, background } from '@chakra-ui/react'
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import config from '../../config/config.json';
import { socket } from '../../socket';
import { useRef } from "react"

export default () => {
    const roomId = useSelector((state) => state.RoomReducer.value);
    let message = useRef("");
    let userId = JSON.parse(localStorage.getItem("user_info"));
    userId = userId.id
    let [messages, setMessage] = useState([])
    useEffect(() => {
        if (roomId) {
            let token = localStorage.getItem("accessToken");
            axios.get(`${config.url}/v1/message`, {
                params: {
                    room_id: roomId
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(data => {
                    setMessage(data.data)
                })
        }
    }, [roomId])
    const sendMessage = async () => {
        let data = message.current.value;
        let result = await axios.post(`${config.url}/v1/message`, {
            room_id: roomId,
            message: data
        }, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("accessToken")
            }
        })
        message.current.value = ""
        setMessage([...messages, result.data])
    }
    socket.on("new-message", (data) => {
        setMessage([...messages, data])
    })
    return (

        <Box width={"80%"} height={"100vh"} color="white" padding={"2"}
            overflow="hidden"
            background={"rgba(27,30,37,255)"}>
            <Flex direction={"column"} height="100%" justifyContent={"space-between"}>
                <Box height={"90%"} overflow="scroll" style={{
                    display: "flex",
                    flexFlow: "column",
                }} id="chat-box">
                    {messages.map((message) => (

                        <>
                            {(message.user_id._id == userId) ?
                                <Box key={message._id} alignSelf="flex-end">
                                    <Text fontSize={"15"} fontStyle="italic" textAlign={"right"}>{message.user_id.name}</Text>
                                    <Text
                                        padding={2}
                                        minHeight={"40px"} minWidth="200px" maxWidth="400px" borderRadius={"10px 0px 10px 10px"} background={"rgba(88,81,220,255)"}
                                    >{message.message}</Text>
                                </Box>
                                : <Box key={message._id}>
                                    <Text fontSize={"15"} fontStyle="italic">{message.user_id.name}</Text>
                                    <Text
                                        padding={2}
                                        minHeight={"40px"} minWidth="200px" maxWidth="400px" borderRadius={"0 10px 10px 10px"} background={"grey"}
                                    >{message.message}</Text>
                                </Box>}

                        </>
                    ))}
                </Box>
                <Box height={"10%"} style={{
                    display: "flex",
                    flexFlow: "row",
                    overflow: "hidden",
                    alignItems: "center",
                    padding: "10px"
                }}>
                    <Input
                        background={"rgba(22,23,28,255)"}
                        border="none"
                        ref={message}
                    >
                    </Input>
                    <Button background={"rgba(242,252,138,255)"}
                        color="rgba(121,128,43,255)"
                        borderRadius={"10px"}
                        _hover={{
                            background: "rgba(242,252,138,255)"
                        }}
                        onClick={sendMessage}
                    >
                        <Icon viewBox="0 0 500 500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>
                        </Icon>
                    </Button>


                </Box>
            </Flex>
        </Box>
    )
}