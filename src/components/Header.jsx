import { Container, Group, useMantineTheme, Image, TextInput, ActionIcon, Avatar, Button} from '@mantine/core';
import { IconMailFilled ,IconBellFilled, IconGridDots, IconHome  } from '@tabler/icons-react';

export function Header() {
  const theme = useMantineTheme();
  return (
    <div style={{width: '100vw', paddingTop: 5, paddingBottom:5, paddingRight:10, paddingLeft:10, display : 'flex', justifyContent : 'space-between', alignItems:'center'}}>
        <Group justify="flex-start" align='center' gap="lg" >
          <Image height={35} src="/src/assets/logo.png"/>
          <TextInput size="sm" radius="xl" placeholder="# Search"/>
        </Group>
        <Group justify="flex-start" align='center' gap="lg">
          <Button radius="xl" leftSection={<IconHome  size={20} />}>
            Home
          </Button>
          <ActionIcon variant="transparent" size="md" aria-label="mail">
            <IconMailFilled   style={{ width: '100%', height: '100%' }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant="transparent" size="md" aria-label="noti">
            <IconBellFilled   style={{ width: '100%', height: '100%' }} stroke={1.5} />
          </ActionIcon>
          {/* <Space w="md" /> */}
          <Avatar src="/src/assets/avatar.avif" alt="it's me"/>
          <ActionIcon variant="transparent" size="md" aria-label="noti">
            <IconGridDots   style={{ width: '100%', height: '100%' }} stroke={1.5} />
          </ActionIcon>
        </Group>
    </div>
  );
}