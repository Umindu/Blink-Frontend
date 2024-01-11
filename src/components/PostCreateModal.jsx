import React from 'react';
import { Modal, Button, Textarea, Group, ActionIcon, Container, Text, ColorInput, Avatar, Divider, Select } from '@mantine/core';
import { IconVideo, IconPhoto, IconMoodHappy, IconMapPin, IconMoodSmile  } from '@tabler/icons-react';

const mockdata = {
    userAvatar: '/src/assets/avatar.avif',
    name: 'Kehlani Summer',
  };

export function PostCreateModal({ isOpen, onClose }) {
    const { userAvatar, name} = mockdata;

  return (
    <Modal opened={isOpen} onClose={onClose} centered radius='lg' title='Create post' size="lg"overlayProps={{ backgroundOpacity: 0.55, blur: 3, }}>
        <Divider variant="solid" />
        <Group mt={10} justify='end'>  
            <Avatar  size={'md'} src={userAvatar} alt="it's me"/>
            <Text fz="md" fw={500} style={{flex : 1}}>{name}</Text>
            <Select radius='lg' placeholder="Select #tag"
            data={[
                { value: 'react', label: 'React' },
                { value: 'ng', label: 'Angular' },
                { value: 'svelte', label: 'Svelte' },
                { value: 'vue', label: 'Vue' },
            ]}
            />
        </Group>
        <Textarea variant="filled" radius="lg" size="lg" mt={10} placeholder="What's on your mind ?" autosize minRows={6} maxRows={10} />
        <Group mt={10} justify='space-between'>  
            <ColorInput size="xs" radius="lg" placeholder="Select Color"/>
            <ActionIcon variant="transparent" aria-label="noti">
                <IconMoodSmile   style={{ width: '100%', height: '100%' }} stroke={1.5} />
            </ActionIcon>
        </Group>
        <Container mt={10} pt={5} pb={5} style={{border: '1px solid #e1e1e1', borderRadius: '15px'}}>
            <Group justify='flex-end'>  
                <Text fz="sm" fw={500} mb={5} style={{ flex: 1 }}>Add to your post</Text>
                <ActionIcon variant="transparent" size="md" aria-label="noti">
                    <IconPhoto   style={{ width: '100%', height: '100%' }} stroke={1.5} />
                </ActionIcon>
                <ActionIcon variant="transparent" size="md" aria-label="noti">
                    <IconVideo   style={{ width: '100%', height: '100%' }} stroke={1.5} />
                </ActionIcon>
                <ActionIcon variant="transparent" size="md" aria-label="noti">
                    <IconMoodHappy   style={{ width: '100%', height: '100%' }} stroke={1.5} />
                </ActionIcon>
                <ActionIcon variant="transparent" size="md" aria-label="noti">
                    <IconMapPin   style={{ width: '100%', height: '100%' }} stroke={1.5} />
                </ActionIcon>
            </Group>
        </Container>
        <Button mt={10} size="sm" radius='lg'>
            Upload Post
        </Button>
    </Modal>
  );
}
