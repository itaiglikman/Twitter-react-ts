import { Box } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../../Pages/HomePage/HomePage";
import { ProfilePage } from "../../../Pages/ProfilePage/ProfilePage";
import "./Routing.css";
import { Login } from "../../AuthArea/Login/Login";
import { Pages } from "../../../Lib/Types/types";
import { Register } from "../../AuthArea/Register/Register";

export function Routing() {
    return (
        <Box className="Routing" p={'sm'} w={'100%'}>
            <Routes>
                <Route path={Pages.Home} element={<HomePage />} />
                {/* <Route path="/profile" element={<ProfilePage />} /> */}
                <Route path={Pages.Login} element={<Login />} />
                <Route path={Pages.Register} element={<Register />} />

                {/* add 404 */}
            </Routes>
        </Box>
    );
}
