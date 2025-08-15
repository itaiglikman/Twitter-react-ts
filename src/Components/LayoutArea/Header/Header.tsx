import { Burger, Container, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Header.module.css';
import { useUserContext } from '../../../Lib/Context/UserContext';

const links = [
    { link: '/', label: 'Home' },
    { link: '/profile', label: 'Profile' },
];

export function Header() {
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);
    const [userName] = useUserContext();
    const navigate = useNavigate();

    const displayedUserName = userName.length ? userName : 'Guest';

    const items = links.map((link) => (
        <a
            key={link.label}
            className={classes.link}
            href={link.link}
            data-active={active === link.link || undefined}
            onClick={(event) => {
                event.preventDefault();
                setActive(link.link);
                navigate(link.link)
            }}
        >
            {link.label}
        </a>
    ));

    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner}>
                <MantineLogo size={28} />
                <Group gap={5} visibleFrom="xs">
                    <Text className={classes.link}>
                        Hello {displayedUserName}
                    </Text>
                    {items}
                </Group>

                <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
            </Container>
        </header>
    );
}