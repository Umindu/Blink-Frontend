import { AppShell, Burger, Group, Skeleton, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import { Header } from '../components/Header';
import { NavBar } from '../components/Navbar';
import { PostCreate } from '../components/PostCreate';

export default function Home() {
  const [opened, { toggle }] = useDisclosure();

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
        <ScrollArea type="always" scrollbarSize={8} scrollHideDelay={500}>
          <NavBar/>
        </ScrollArea>
      </AppShell.Navbar>
      <AppShell.Main>
        <ScrollArea type="always" scrollbarSize={8} scrollHideDelay={500}>
          <PostCreate/>
        </ScrollArea>
      </AppShell.Main>
      <AppShell.Aside p="md">
        Aside
      </AppShell.Aside>
    </AppShell>
  );
}

