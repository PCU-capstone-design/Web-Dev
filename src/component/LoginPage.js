import React, { useState } from "react";
import CloudCircleIcon from "@mui/icons-material/CloudCircle";
import { Box, Container } from "@mui/system";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const user = [
    { id: "logsh1", pw: "1234" },
    { id: "logsh2", pw: "1234" },
    { id: "logsh3", pw: "1234" },
    { id: "logsh4", pw: "1234" },
];

const checkLogin = (id, pw) => {
    var success = false;

    const value = user.forEach((e) => {
        if (e["id"] === id) {
            if (e["pw"] === pw) {
                success = true;
            }
        }
    });

    return { success: success };
};

function LoginPage(props) {
    const navi = useNavigate();
    
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    return (
        <Box sx={{ mt: 5 }}>
            <Container
                sx={{
                    textAlign: "center",
                    border: 2,
                    borderRadius: 10,
                    borderColor: "primary.main",
                    width: 1 / 2,
                }}
            >
                <Box>
                    <CloudCircleIcon
                        sx={{ fontSize: 200, color: "primary.main", mt: 5 }}
                    />
                </Box>
                <TextField
                    sx={{
                        width: 1,
                        mt: 10,
                        ".MuiInputBase-root": {
                            borderRadius: 5,
                            borderColor: "primary.main",
                        },
                    }}
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                >
                    {" "}
                </TextField>
                <TextField
                    sx={{
                        width: 1,
                        mt: 5,
                        ".MuiInputBase-root": {
                            borderRadius: 5,
                            borderColor: "primary.main",
                        },
                    }}
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                />

                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                defaultChecked
                                sx={{ color: "primary.main" }}
                            />
                        }
                        label="로그인을 유지하겠습니까?"
                        sx={{
                            display: "inline",
                            alignSelf: "left",
                            color: "primary.main",
                        }}
                    />
                    <Button>비밀번호 찾기</Button>
                </Box>

                <Box>
                    <Button
                        variant="outlined"
                        sx={{ width: 1 / 2, mt: 5 }}
                        onClick={() => {
                            if (checkLogin(id, pw)["success"]) {
                                alert('로그인 성공')
                                navi('/')
                            } else {
                                alert('로그인 실패')
                                setId('')
                                setPw('')
                            }
                        }}
                    >
                        로그인
                    </Button>
                </Box>
                <Button sx={{ mb: 3 }}>OTL에 처음인가요?</Button>
            </Container>
        </Box>
    );
}

export default LoginPage;
