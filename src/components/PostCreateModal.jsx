import React from 'react';
import { Modal, Button, Textarea, Group, ActionIcon, Container, Text, ColorInput } from '@mantine/core';
import { IconVideo, IconPhoto, IconMoodHappy, IconMapPin, IconMoodSmile  } from '@tabler/icons-react';

export function PostCreateModal({ isOpen, onClose }) {
  return (
    <Modal opened={isOpen} onClose={onClose} radius='lg' size="lg" title="Create post" overlayProps={{ backgroundOpacity: 0.55, blur: 3, }}>
        <Group mt={10} justify='end'>  
            <ActionIcon variant="transparent" aria-label="noti">
                <IconMoodSmile   style={{ width: '100%', height: '100%' }} stroke={1.5} />
            </ActionIcon>
        </Group>
        <Textarea variant="filled" radius="lg" size="lg" mt={10} placeholder="What's on your mind ?" autosize minRows={4} maxRows={10} />
        <Group mt={10} justify='space-between'>  
            <ColorInput size="xs" radius="xl" placeholder="Select Color"/>
            <ActionIcon variant="transparent" aria-label="noti">
                <IconMoodSmile   style={{ width: '100%', height: '100%' }} stroke={1.5} />
            </ActionIcon>
        </Group>
        <Container mt={10} pt={5} pb={5} style={{border: '1px solid #e1e1e1', borderRadius: '10px'}}>
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
        <Button mt={10} size="sm" style={{ flex: 1 }}>
            Upload Post
        </Button>
    </Modal>
  );
}
