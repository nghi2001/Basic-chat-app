import {
    Flex,
    Spacer,
    Square,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useToast, Text, Tab, TabList, Tabs, Box
} from '@chakra-ui/react';
import {
    ChatIcon,
    LinkIcon,
    DragHandleIcon,
    SettingsIcon
} from '@chakra-ui/icons'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

export default () => {
    const toast = useToast();
    let [name, setName] = useState("Account");
    const navigator = useNavigate();
    useEffect(() => {
        let userInfo = localStorage.getItem("user_info");
        if (userInfo) {
            userInfo = JSON.parse(userInfo);
            setName(userInfo.name);
        }
    }, [])

    const logout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user_info");
        toast({
            title: "Logout success",
            status: "success",
            duration: 900,
            position: "bottom-right"

        })
        return navigator("/login")
    }
    return (
        <Flex color={'rgba(126,129,138,255)'} padding="2" background={'rgba(32,35,44,255)'}>
            <Square>
                <Flex gap={"4"} alignItems={"center"}>
                    <Box>
                        <Text>Chat App</Text>
                    </Box>
                    <Tabs variant={'unstyled'}>
                        <TabList>
                            <Box>
                                <Tab _selected={{
                                    color: "rgba(242,252,138,255)"
                                }}>
                                    <LinkIcon />
                                    <Text marginLeft={"2"}>Contact</Text>
                                </Tab>
                            </Box>
                            <Box>
                                <Link to={"/chat"}>
                                    <Tab _selected={{
                                        color: "rgba(242,252,138,255)"
                                    }}>
                                        <ChatIcon />
                                        <Text marginLeft={"2"}>Chat</Text>
                                    </Tab>
                                </Link>
                            </Box>
                            <Box>
                                <Tab _selected={{
                                    color: "rgba(242,252,138,255)"
                                }}>
                                    <SettingsIcon />
                                    <Text marginLeft={"2"}>Setting</Text>
                                </Tab>
                            </Box>
                        </TabList>
                    </Tabs>
                </Flex>
            </Square>
            <Spacer />
            <Square>
                <Menu>
                    <MenuButton as={Button} background={"transparent"}
                        _hover={{
                            backgroundColor: "transparent"
                        }}
                        _expanded={{ bg: 'transparent' }}
                        _focus={{
                            backgroundColor: "transparent"
                        }}>
                        {name}
                    </MenuButton>
                    <MenuList background={"transparent"} color={'white'}>
                        <Link to={"/login"} >
                            <MenuItem background={"transparent"}>
                                Login
                            </MenuItem>
                        </Link>
                        <MenuItem onClick={logout} background={"transparent"}>
                            Logout
                        </MenuItem>
                        <Link to={"/register"} >
                            <MenuItem background={"transparent"}>
                                Register Account
                            </MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
            </Square>
        </Flex >
    )
}