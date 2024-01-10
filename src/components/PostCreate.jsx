import { IconHeart } from '@tabler/icons-react';
import { Card, TextInput, Avatar, Group, Button } from '@mantine/core';
import { IconVideo  ,IconPhoto , IconMoodHappy , IconMapPin   } from '@tabler/icons-react';

export function PostCreate() {
    return (
    <Card withBorder radius="lg" mr={8} p="xl">
      <Card.Section >
        <Group>
          <Avatar size={'md'} src="/src/assets/avatar.avif" alt="it's me"/>
          <TextInput size="sm"  style={{ flex: 1 }} radius="xl" placeholder="What's happening ?"/>
        </Group>
        <Group pt={10} justify='flex-end'>
          <Button radius="lg" size="xs" variant="outline" leftSection={<IconPhoto  size={16} />}>
            Photos/Video
          </Button>
          <Button radius="lg" size="xs" variant="outline" leftSection={<IconVideo  size={16} />}>
            Live
          </Button>
          <Button radius="lg" size="xs" variant="outline" leftSection={<IconMoodHappy  size={16} />}>
            Feeling/activity
          </Button>
          <Button radius="lg" size="xs" variant="outline" leftSection={<IconMapPin  size={16} />}>
            Location
          </Button>
        </Group>
      </Card.Section>
    </Card>
    );
}