import { Box } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import { Pages } from "../../../Lib/Types/types";
import { HomePage } from "../../../Pages/HomePage/HomePage";
import { PageNotFound } from "../../../Pages/PageNotFound/PageNotFound";
import { Login } from "../../AuthArea/Login/Login";
import { Register } from "../../AuthArea/Register/Register";
import "./Routing.css";

export function Routing() {
    return (
        <Box className="Routing" p={'sm'} w={'100%'}>
            <Routes>
                <Route path={Pages.Home} element={<HomePage />} />
                <Route path={Pages.Login} element={<Login />} />
                <Route path={Pages.Register} element={<Register />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Box>
    );
}
