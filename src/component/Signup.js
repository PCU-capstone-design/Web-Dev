import * as React from 'react';
import { Box, Container } from "@mui/system";
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import { Button, Checkbox, FormControlLabel, TextField, Typography, MenuItem,  } from "@mui/material";
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const currencies = [ //naver 기준
    {
        value: 'sex',
        label: '성별',
    },
    {
        value: 'male',
        label: '남성',
    },
    {
        value: 'female',
        label: '여성',
    },
    {
        value: 'none',
        label: '선택안함',
    },

]; // 성별

const Month = [
    {
        value: 'none',
        label: '월',
    },
    {
        value: '1',
        label: '1월',
    },
    {
        value: '2',
        label: '2월',
    },
    {
        value: '3',
        label: '3월',
    },
    {
        value: '4',
        label: '4월',
    },
    {
        value: '5',
        label: '5월',
    },
    {
        value: '6',
        label: '6월',
    },
    {
        value: '7',
        label: '7월',
    },
    {
        value: '8',
        label: '8월',
    },
    {
        value: '9',
        label: '9월',
    },
    {
        value: '10',
        label: '10월',
    },
    {
        value: '11',
        label: '11월',
    },
    {
        value: '12',
        label: '12월',
    },
]; //월 (생년월일)

const user = [
    { id: "kbs", pw: "1234", pwcheck: "1234", name: "권보성", phonenum: "01012341234", sex: "male", year: "1999", mm: "1", dd: "25"},
    { id: "logsh2", pw: "1234", pwcheck: "1234" },
    { id: "logsh3", pw: "1234", pwcheck: "1234" },
    { id: "logsh4", pw: "1234", pwcheck: "1234" },
];

const checkSignup = (id, pw, pwcheck, sex) => {
    var success = false;

    const value = user.forEach((e) => {
        if (e["id"] === id) {
            if (e["pw"] === pw && e["pw"] === pwcheck ) {
                if(e["sex"] === sex){ //메뉴아이템 데이터값 확인 위해
                    success = true;
                }
            }

        }
    });



    return { success: success};
};


function Signup() {



    const [currency, setCurrency] = React.useState('sex');
    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    const [month, setMonth] = React.useState('none');
    const handleChange2 = (event) => {
        setMonth(event.target.value);
    };

    const [email, setEmail] = useState("");


    const onEmailChange = (e) => {
        //e : 이벤트 객체
        setEmail(e.target.value); //이벤트를 받는 타겟의 value값으로 변경

    }

    const [pwd, setPwd] = useState("");

    const onPwdChange = (e) => {
        //e : 이벤트 객체
        setPwd(e.target.value); //이벤트를 받는 타겟의 value값으로 변경
    }

    const [pwdcheck, setPwdcheck] = useState("");

    const onPwdcheckChange = (e) => {
        //e : 이벤트 객체
        setPwdcheck(e.target.value); //이벤트를 받는 타겟의 value값으로 변경
    }

    const [name, setName] = useState("");
    const onNameChange = (e) => {
        //e : 이벤트 객체
        setName(e.target.value); //이벤트를 받는 타겟의 value값으로 변경
    }

    const [phoneNum, setphoneNum] = useState("");

    const onphoneNumChange = (e) => {
        //e : 이벤트 객체
        setphoneNum(e.target.value); //이벤트를 받는 타겟의 value값으로 변경
    }

    const [year, setYear] = useState("");

    const onYearChange = (e) => {
        //e : 이벤트 객체
        setYear(e.target.value); //이벤트를 받는 타겟의 value값으로 변경
    }

    const [day, setDay] = useState("");

    const onDayChange = (e) => {
        //e : 이벤트 객체
        setDay(e.target.value); //이벤트를 받는 타겟의 value값으로 변경
    }

    const [mm, setMm] = useState("");
    const [sex, setSex] = useState("");

    const navigate = useNavigate();

    const MoveLogin = () => {
        navigate(`/login`); // 로그인 페이지로 이동
    };



    return (
        <Box sx={{ mt: 5 }}>
            <Container sx={{ textAlign: 'center', border: 2, borderRadius: 10, borderColor: 'primary.main', width: 1 / 2 }}>
                <Box>
                    <CloudCircleIcon sx={{ fontSize: 50, color: 'primary.main', mt: 1 }} />
                </Box>
                <Typography component="h1" variant="h5">
                    회원가입
                </Typography>
                <TextField sx={{
                    width: 1, mt: 1,
                    '.MuiInputBase-root': {
                        borderRadius: 5,
                        borderColor: "primary.main",
                    },
                }}
                           label="이메일 아이디"
                           name="email"
                           onChange={onEmailChange}
                           value={email}
                           error={email === ""}
                           helperText={email === "" ? '이메일 아이디를 입력해주세요 ' : ' '}

                />
                <TextField sx={{
                    width: 1, mt: 2,
                    '.MuiInputBase-root': {
                        borderRadius: 5,
                        borderColor: "primary.main",
                    },

                }}
                           label="비밀번호"
                           type="password"

                           name="password"
                           onChange={onPwdChange}
                           value={pwd}
                           error={pwd === ""}
                           helperText={pwd === "" ? '비밀번호를 입력해주세요 ' : ' '}
                />

                <TextField sx={{
                    width: 1, mt: 1,
                    '.MuiInputBase-root': {
                        borderRadius: 5,
                        borderColor: "primary.main",
                    },

                }}
                           label="비밀번호 확인"
                           type="password"
                           name="pwdCheck"
                           onChange={onPwdcheckChange}
                           value={pwdcheck}
                           error={pwd !== pwdcheck}
                           helperText={pwd !== pwdcheck ? '비밀번호가 다릅니다. ' : ' '}
                />


                <TextField sx={{
                    width: 0.3, mt: 2,
                    '.MuiInputBase-root': {
                        borderRadius: 5,
                        borderColor: "primary.main",
                    },

                }}
                           label="이름"
                           type="name"
                           name="name"
                           onChange={onNameChange}
                           value={name}
                />
                <TextField sx={{
                    width: 0.4, mt: 2,
                    '.MuiInputBase-root': {
                        borderRadius: 5,
                        borderColor: "primary.main",
                    },

                }}
                           label="전화번호"
                           type="number"

                           name="phone"
                           onChange={onphoneNumChange}
                           value={phoneNum}
                />

                <TextField sx={{
                    width: 0.3, mt: 2,
                    '.MuiInputBase-root': {
                        borderRadius: 5,
                        borderColor: "primary.main",
                    },

                }}
                           id="sex"
                           select
                           label="성별"
                           value={currency}
                           onChange={handleChange}


                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value} onClick={(e) => {

                            setSex(option.value);

                        }}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <Typography sx={{
                    mt: 1,
                    display: 'flex',
                    justifyContent: 'flex'
                }}
                            component="h3" variant="h7">
                    생년월일
                </Typography>

                <TextField
                           sx={{
                    width: 0.4, mt: 1,
                    '.MuiInputBase-root': {
                        borderRadius: 5,
                        borderColor: "primary.main",
                    },

                }}
                           label="년도(4자)"
                           type="number"
                           name="year"
                           inputProps={{ maxLength: 4 }}
                           onChange={onYearChange}
                           value={year}
                />
                <TextField sx={{
                    width: 0.3, mt: 1,
                    '.MuiInputBase-root': {
                        borderRadius: 5,
                        borderColor: "primary.main",
                    },

                }}
                           id="month"
                           select
                           label="월"
                           value={month}
                           onChange={handleChange2}


                >
                    {Month.map((option) => (
                        <MenuItem key={option.value} value={option.value} onClick={(event) => {event.preventDefault();

                                setMm(option.value)

                        }}

                        >
                            {option.label}

                        </MenuItem>
                    ))}
                </TextField>

                <TextField sx={{
                    width: 0.3, mt: 1,
                    '.MuiInputBase-root': {
                        borderRadius: 5,
                        borderColor: "primary.main",
                    },

                }}
                           label="일"
                           type="number"

                           name="day"
                           onChange={onDayChange}
                           value={day}
                />



                <Box sx={{ mt: 1, display: 'flex', justifyContent: 'flex-end'}}>
                    <FormControlLabel control={<Checkbox defaultChecked sx={{ color: 'primary.main' }} />} label="회원가입 약관에 동의합니다." sx={{ display: 'inline', alignSelf: 'left', color: 'primary.main'}} />
                </Box>

                <Box>
                    <Button variant="outlined" sx={{ width: 1 / 2, mt: 2,   mb: 5}} onClick={(event) => {event.preventDefault();
                        {
                            if (checkSignup(email, pwd, pwdcheck, sex)["success"]) {
                             alert('회원가입 성공')
                                MoveLogin()
                            }
                            else if(pwd !== pwdcheck) {
                                alert('비밀번호가 일치하지 않습니다')
                                setEmail('');
                                setPwd('');
                                setPwdcheck('');}
                            else {
                            alert('회원가입 실패')
                            setEmail('');
                            setPwd('');
                            setPwdcheck('');
                        }}}}> 가입하기 </Button>
                </Box>

            </Container>
        </Box>
    );
}

export default Signup;