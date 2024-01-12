import React, {useState} from 'react'
import '@mantine/core/styles.css';
import { Center, Container, TextInput , PasswordInput, Button, Group, Text, Title, Divider, Box } from '@mantine/core';
import { Link } from 'react-router-dom';
import { login } from '../utility/api/user.api';

export default function Login() {

  const [formData, setFormData] = useState({username:"", password:""});

  async function handleLogin() {
    try {
      const res = await login(formData);
      console.log(res);
      if (res.status === 200 && res.data.token) {
        alert("Successfully logged in");
        window.location.replace("/");
        localStorage.setItem("token", res.data.token);
      } 
    } catch (error) {
      alert("Unable to login");
    }
  }

  return (
    <div style={{ height: '100vh', width: '100vw', backgroundColor : '#EDEBFF'}}>
        <Center style={{ height: '100vh' }}>
                <Box  w={{base: 300, sm: 400, lg:400}} h={410} p={20} style={{display: "flex", justifyContent: "center", flexDirection: "column", borderRadius: 10, backgroundColor : '#fff' }}>
                    <Title size="h1" c={'#7960fb'}>Sign in</Title>

                    <Text component="label" htmlFor="your-username" size="md" fw={500} mt={15}> Username </Text>
                    <TextInput onChange={(e)=> setFormData({...formData, username:e.target.value})} size="md" radius="md" placeholder="Your username"pt={7} />

                    <Group justify="space-between" mb={5} pt={10}>
                    <Text component="label" htmlFor="your-password" size="md" fw={500}> Password </Text>
                    <Link to="/frgt-password" style={{textDecoration: "none", color: "black", fontSize : "12pt"}}>Forgot your password?</Link>
                    </Group>
                    <PasswordInput onChange={(e)=> setFormData({...formData, password:e.target.value})} size="md" radius="md" placeholder="Your password"/>

                    <Button onClick={() => handleLogin()} variant="filled" color="#7960fb" size="md" radius="md" fw={500} mt={20}>Login</Button>

                    <Divider my="md" />
                
                    <Button component={Link} to={"/Register"} variant="outline" color="#7960fb" size="md" radius="md" fw={500} >Create new account</Button>
                </Box>
        </Center>
    </div>
  )
}
