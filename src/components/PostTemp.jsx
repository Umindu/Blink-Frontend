import { Card, Image, Text, Group, Badge, Button, Avatar, Flex, Divider, ActionIcon } from '@mantine/core';
import { IconDotsVertical } from '@tabler/icons-react';

// const mockdata = {
//     userAvatar: '/src/assets/avatar.avif',
//     name: 'Kehlani Summer',
//     dateTime: '2h ago',
//     postImage:'/src/assets/post.png',
//     tag: 'mantine',
//     description:'😂Completely renovated dfgds for the season 2020❤️',
//   };

export function PostTemp({mockdata}) {
    const { userAvatar, name, dateTime, postImage, tag, description } = mockdata;
  
    return (
      <Card withBorder radius="lg" p={30} mt={10} mr={8} >
        <Card.Section >
            <Group justify="space-between">
                <Avatar  size={'md'} src={userAvatar} alt="it's me"/>
                <Group justify="space-between" display={'inline-block'} style={{ flex: 1 }}>
                    <Text fz="md" fw={500}>{name}</Text>
                    <Text fz="xs" fw={500}>{dateTime}</Text>
                </Group>
                <ActionIcon variant="transparent" size="md" aria-label="noti" >
                    <IconDotsVertical style={{ width: '75%'}} stroke={1.5} />
                </ActionIcon>
            </Group>
        </Card.Section>
  
        <Card.Section  mt={5}>
          <Group display={'block'}>
              <Badge size="sm" variant="light">
                  {tag}
              </Badge>
              <Text fz="sm">
                  {description}
              </Text>
          </Group >
        </Card.Section>
        
        <Card.Section mt={10} >
          <Flex justify="center" align="center"  direction="column">
              <Image radius="lg" src={postImage} alt={name} mah={600} fit='contain'/>
          </Flex>
        </Card.Section>
        
  
        
      </Card>
    );
}