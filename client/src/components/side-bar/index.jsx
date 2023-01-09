import { Tab, Box, Tabs, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
export default () => {
    return (
        <Tabs variant={'unstyled'} aria-orientation={"vertical"}>
            <Box>
                <Link to={"/"}>
                    <Tab width={"100%"} borderRadius={"10px"} _selected={{
                        backgroundColor: "rgba(242,252,138,255)"
                    }}>
                        <Text marginLeft={"2"}>Room</Text>
                    </Tab>
                </Link>
            </Box>
            <Box>
                <Link to="/chat">
                    <Tab width={"100%"} borderRadius={"10px"} _selected={{
                        backgroundColor: "rgba(242,252,138,255)"
                    }}>
                        <Text marginLeft={"2"}>Chat</Text>
                    </Tab>
                </Link>
            </Box>
            <Box>
                <Tab width={"100%"} borderRadius={"10px"} _selected={{
                    backgroundColor: "rgba(242,252,138,255)"
                }}>
                    <Text marginLeft={"2"}>Setting</Text>
                </Tab>
            </Box>
        </Tabs>
    )
}