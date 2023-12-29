import React from 'react'
import '@mantine/core/styles.css';
import { Center, TextInput , PasswordInput, Button, Group, Text, Title, Divider, Box} from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { DatePickerInput } from '@mantine/dates';

export default function Register() {
  return (
    <div style={{ height: '100vh', width: '100vw', backgroundColor : '#DFDAFF'}}>
        <Center style={{ height: '100vh' }}>
                <Box  w={{base: 300, sm: 400, lg:400}} h={600} p={20} style={{display: "flex", justifyContent: "center", flexDirection: "column", borderRadius: 10, backgroundColor : '#fff' }}>
                    <Title size="h2" c={'#7960fb'}>Create new account</Title>

                    <TextInput size="md" radius="md" label="Full name" placeholder="Your name"pt={15}  />

                    <DatePickerInput defaultValue={new Date()} maxDate={new Date()} radius="md" label="Date of birth" placeholder="Pick date" pt={10} />

                    <TextInput size="md" radius="md" label="Email" placeholder="Your email"pt={10} />

                    <TextInput size="md" radius="md" label="Username" placeholder="Your username" pt={10} />

                    <PasswordInput size="md" radius="md" label="Password" placeholder="Your password" pt={10}/>

                    <Button variant="filled" color="#7960fb" size="md" radius="md" fw={500} mt={20}>Create account</Button>

                    <Divider my="md" />

                    <Button component={Link} to={"/Login"} leftSection={<IconArrowLeft size={14} />} variant="outline" color="#7960fb" size="md" radius="md" fw={500}>Back to Login</Button>
                </Box>
        </Center>
    </div>
  )
}
