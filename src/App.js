import { Box } from "@mui/system";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Appbar from "./component/Appbar";
import LoginPage from "./component/LoginPage";
import MainPage from "./component/MainPage";
import Signup from "./component/Signup";
import Rank from "./component/Rank";
import Ranking from "./component/Ranking";

function App() { 

    return (
        <Box>
            <Appbar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/sign" element={<Signup />} />
                <Route path="/rank" element={<Rank />} />
                <Route path="/ranking" element={<Ranking />} />
            </Routes>
        </Box>
    );
}

export default App;
