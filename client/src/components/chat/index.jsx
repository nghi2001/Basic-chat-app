import {
    Grid, GridItem, Text, Box,
    Tabs,
    Tab,
    Flex,
} from "@chakra-ui/react"
import { Link, Navigate } from "react-router-dom";
import Head from "../head";
import Message from "../message";
import Room from '../room';
import SideBar from "../side-bar";

export default () => {
    let token = localStorage.getItem("accessToken");
    if (!token) {
        console.log("-------------------------------------------NGHI-------------");
        return <Navigate to={"/login"} />
    }
    return (
        <>
            <Head></Head>
            <Grid height={"100vh"}
                templateColumns='repeat(6, 1fr)'
                background={"black"}
            >
                <GridItem colSpan={1} background={"black"} padding={'2'} color={"rgba(86,86,86,255)"}>
                    <SideBar />
                </GridItem>
                <GridItem colSpan={5} marginTop={"1"} background={"rgba(32,35,44,255)"}>
                    <Flex>
                        <Room></Room>
                        <Message></Message>
                    </Flex>
                </GridItem>
            </Grid>
        </>
    )
}