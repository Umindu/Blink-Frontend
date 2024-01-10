import { Card, Image, Text, Group, Badge, Button, ActionIcon, Avatar, Flex, Divider, Title } from '@mantine/core';

const mockdata = {
    userImage: '/src/assets/avatar.avif',
    coverImage:'/src/assets/cover.jpg',
    name: 'Kehlani Summer',
    username: '@kehlaniS',
    description:'😂Completely renovated dfgds for the season 2020❤️',
};

export function NavBar() {
  const { userImage, coverImage, name, description, username } = mockdata;
  
  return (
    <Card withBorder radius="lg" p="md" mr={8}>
      <Card.Section >
        <Flex justify="center" align="center"  direction="column">
            <Image src={coverImage} alt={name} height={100}/>
            <Avatar  size={'xl'} mt={-45} src={userImage} alt="it's me"/>
        </Flex>
      </Card.Section>

      <Card.Section  mt="xs">
        <Group justify="center" align='center'>
            <Text fz="lg" fw={500}>
                {name}
            </Text>
            <Badge size="sm" variant="light">
                {username}
            </Badge>
            <Text fz="sm" ta="center">
                {description}
            </Text>
        </Group >
      </Card.Section>
      <Divider my='xs' />
      <Group justify="space-between">
        <Group display={'block'} ml={35}>
            <Text fz="sm" fw={500}>Following</Text>
            <Text fz="sm" fw={500} ta={'center'}>1k</Text>
        </Group>
        <Divider orientation="vertical" />
        <Group display={'block'} mr={35}>
            <Text fz="sm" fw={500}>Followers</Text>
            <Text fz="sm" fw={500} ta={'center'}>1000</Text>
        </Group>
      </Group>
      <Divider my='xs' />

      <Group >
        <Button variant="transparent" h={20} style={{ flex: 1 }}>
          My Profile
        </Button>
      </Group>
    </Card>
  );
}