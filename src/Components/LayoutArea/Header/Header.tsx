import { Burger, Container, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import { useNavigate } from 'react-router-dom';
import { supabaseDB } from '../../../../DB/supabaseConfig';
import { useActivePageContext } from '../../../Lib/Context/ActivePageContext';
import { useUserContext } from '../../../Lib/Context/UserContext';
import { Pages } from '../../../Lib/Types/types';
import classes from './Header.module.css';

type Item = {
    link: string,
    label: string
}

export function Header() {

    const [userName, setUserName] = useUserContext();
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useActivePageContext()
    const navigate = useNavigate();

    const homeItem = { link: Pages.Home, label: 'Home' }
    const loginItem = { link: Pages.Login, label: 'Login' }
    const logoutItem = { link: Pages.Login, label: 'Logout' }
    
    const displayedUserName = userName.length ? userName : 'Guest';

    const item = (link: Item) => (
        <a
            key={link.label}
            className={classes.link}
            href={link.link}
            data-active={active === link.link || undefined}
            onClick={(e) => handleItemClick(e, link)}
        >
            {link.label}
        </a>
    )

    function handleItemClick(event: React.MouseEvent<HTMLAnchorElement>, link: Item) {
        event.preventDefault();
        setActive(link.link as Pages);
        if (link.label === 'Logout') handleLogout();
        navigate(link.link);
    }

    async function handleLogout() {
        await supabaseDB.auth.signOut();
        setUserName('');
        setActive(Pages.Login);
    }

    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner}>
                <MantineLogo size={28} />
                <Group gap={5} visibleFrom="xs">
                    <Text className={classes.link}>
                        Hello {displayedUserName}
                    </Text>
                    {item(homeItem)}
                    {item(userName.length ? logoutItem : loginItem)}
                </Group>

                <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
            </Container>
        </header>
    );
}