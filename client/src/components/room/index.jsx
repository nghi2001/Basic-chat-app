import { Box, Tabs, Tab, Avatar, Text, useToast } from '@chakra-ui/react';
import { useState, useEffect } from 'react'
import axios from 'axios';
import config from '../../config/config.json'
import { useDispatch, useSelector } from 'react-redux';
import { pickRoom } from '../../state/reducer/Room';
import { socket } from '../../socket';

const RoomComponent = () => {
    let [listRoom, setLisRoom] = useState([])
    const dispath = useDispatch();
    const roomId = useSelector((state) => state.RoomReducer.value);
    const toast = useToast();

    useEffect(() => {
        let userInfo = localStorage.getItem("user_info");
        userInfo = JSON.parse(userInfo);
        axios.get(`${config.url}/v1/rooms`, {
            params: {
                user_id: userInfo.id
            }
        })
            .then(data => {
                console.log(data);
                setLisRoom(data.data)
            })

        socket.on("new-message", (data) => {
            console.log(data.room_id !== roomId && data.user_id._id !== userInfo.id);
            console.log(data);
            if (data.room_id !== roomId && data.user_id._id !== userInfo.id) {
                return toast({
                    colorScheme: 'pink.100',
                    title: data.user_id.name,
                    description: data.message,
                    duration: 1000,
                    position: 'bottom-right',
                    status: "info"
                })
            }
        })
    }, [])
    const handlePickRoom = (id) => {
        dispath(pickRoom(id))
    }
    return (
        <Box width={"20%"} height={"100vh"} color="rgba(98,101,108,255)">
            <Tabs variant={'unstyled'} aria-orientation={"vertical"}>
                {listRoom.map((room) => (
                    <Box key={room._id} onClick={() => handlePickRoom(room._id)}>
                        <Tab width={"100%"} borderRadius={"10px"} _selected={{
                            backgroundColor: "rgba(26,29,36,255)"
                        }}
                            padding="5px"
                            style={{
                                display: "flex",
                                alignItems: "flex-start",
                                justifyContent: "left"
                            }}>
                            <Avatar name={room.name} size={'sm'} />
                            <Text marginLeft={"2"}>{room.name}</Text>
                        </Tab>
                    </Box>
                ))}
            </Tabs>
        </Box>
    )
}
export default RoomComponent