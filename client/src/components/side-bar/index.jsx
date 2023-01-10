import { Tab, Box, Tabs, Text } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CustomTabs from "../tab"
import { pick } from '../../state/reducer/PickMenu'
const listMenu = [
    {
        name: "Room",
        to: "/"
    },
    {
        name: "Chat",
        to: "/chat"
    },
    {
        name: "Setting",
        to: "/"
    },
]
export default () => {
    const menuActive = useSelector(state => state.PickMenuReducer.value);
    const dispath = useDispatch();
    const pickMenu = (ind) => {
        dispath(pick(ind))
    }
    return (
        <Tabs variant={'unstyled'} aria-orientation={"vertical"}>
            {listMenu.map((val, ind) => (
                < Box key={ind} >
                    <Link to={val.to}>
                        <CustomTabs width={"100%"} borderRadius={"10px"} _selected={{
                            backgroundColor: "rgba(242,252,138,255)"
                        }} isActive={ind == menuActive ? true : false} onClick={() => pickMenu(ind)} >
                            <Text marginLeft={"2"}>{val.name}</Text>
                        </CustomTabs>
                    </Link>
                </Box>
            ))
            }
        </Tabs >
    )
}