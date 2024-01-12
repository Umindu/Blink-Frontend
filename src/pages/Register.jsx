import React, {useState} from 'react'
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { IconArrowLeft } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { Center, TextInput , PasswordInput, Button, Title, Divider, Box} from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { register } from '../utility/api/user.api';

export default function Register() {

  const [formData, setFormData] = useState({name:"", dob:"", email:"", username:"", password:""});

  async function handleRegister() {
    try {
      const res = await register(formData);
      if (res.status === 200) {
        alert("Successfully registered");
        window.location.replace("/Login");
      } 
    } catch (error) {
      alert("Unable to register");
    }
  } 

  return (
    <div style={{ height: '100vh', width: '100vw', backgroundColor : '#EDEBFF'}}>
        <Center style={{ height: '100vh' }}>
                <Box  w={{base: 300, sm: 400, lg:400}} h={600} p={20} style={{display: "flex", justifyContent: "center", flexDirection: "column", borderRadius: 10, backgroundColor : '#fff' }}>
                    <Title size="h2" c={'#7960fb'}>Create new account</Title>

                    <TextInput onChange={(e)=>e && e.target && setFormData({...formData, name:e.target.value})} size="md" radius="md" label="Full name" placeholder="Your name"pt={15}  />

                    <DatePickerInput onChange={(e) => setFormData({ ...formData, dob: e.toLocaleDateString("en-US") })}  size="md" defaultValue={new Date()} maxDate={new Date()} radius="md" label="Date of birth" placeholder="Pick date" pt={10} />

                    <TextInput onChange={(e)=>e && e.target && setFormData({...formData, email:e.target.value})} size="md" radius="md" label="Email" placeholder="Your email"pt={10} />

                    <TextInput onChange={(e)=>e && e.target && setFormData({...formData, username:e.target.value})} size="md" radius="md" label="Username" placeholder="Your username" pt={10} />

                    <PasswordInput onChange={(e)=>e && e.target && setFormData({...formData, password:e.target.value})} size="md" radius="md" label="Password" placeholder="Your password" pt={10}/>

                    <Button onClick={()=> handleRegister()} variant="filled" color="#7960fb" size="md" radius="md" fw={500} mt={20}>Create account</Button>

                    <Divider my="md" />

                    <Button component={Link} to={"/Login"} leftSection={<IconArrowLeft size={14} />} variant="outline" color="#7960fb" size="md" radius="md" fw={500}>Back to Login</Button>
                </Box>
        </Center>
    </div>
  )
}
