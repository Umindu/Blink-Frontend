import { AppShell, Container, Flex, Group, ScrollArea, Center } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Header } from '../components/Header';
import { NavBar } from '../components/Navbar';
import { PostCreate } from '../components/PostCreate';
import { PostTemp } from '../components/PostTemp';

export default function Home() {
  const [opened, { toggle }] = useDisclosure();

  const mockdata = [{
    userAvatar: '/src/assets/avatar.avif',
    name: 'Kehlani Summer',
    dateTime: '2h ago',
    postImage:'/src/assets/post.png',
    tag: 'mantine',
    description:'😂Completely renovated dfgds for the season 2020❤️',
},{
    userAvatar: '/src/assets/avatar.avif',
    name: 'Kehlani Summer',
    dateTime: '2h ago',
    postImage:'/src/assets/cover.jpg',
    tag: 'mantine',
    description:'😂Completely renovated dfgds for the season 2020💕💕',
},{
    userAvatar: '/src/assets/avatar.avif',
    name: 'Kehlani Summer',
    dateTime: '2h ago',
    postImage:'/src/assets/avatar.avif',
    tag: 'mantine',
    description:'😂Completely renovated dfgds for the season 2020❤️',
}];

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 350, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      aside={{ width: 400, breakpoint: 'md', collapsed: { desktop: false, mobile: true } }}
      padding="md">

      <AppShell.Header>
        <Group h="100%" >
          <Header/>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <ScrollArea type="always" scrollbarSize={8} scrollHideDelay={500} mr={-8}>
          <NavBar/>
        </ScrollArea>
      </AppShell.Navbar>
      
      <Center>
      <AppShell.Main maw={1400}>
          <ScrollArea type="always" scrollbarSize={8} scrollHideDelay={500} mr={-8}>
            <PostCreate/>

            {/* map  post */}
            {mockdata && mockdata.map((item, index) => (
              <PostTemp mockdata={item} key={index}/>
            ))}

          </ScrollArea>
      </AppShell.Main>
      
      </Center>
      <AppShell.Aside p="md">
        Aside
      </AppShell.Aside>
    </AppShell>
  );
}

