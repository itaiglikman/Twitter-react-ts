import { Box } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../../Pages/HomePage/HomePage";
import { ProfilePage } from "../../../Pages/ProfilePage/ProfilePage";
import "./Routing.css";

export function Routing() {
    return (
        <Box className="Routing" p={'sm'} w={'100%'}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/profile" element={<ProfilePage />} />
                {/* add 404 */}
            </Routes>
        </Box>
    );
}
