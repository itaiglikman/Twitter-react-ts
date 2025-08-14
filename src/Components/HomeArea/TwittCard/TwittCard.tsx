import { Avatar, Group, Paper, Text, TypographyStylesProvider } from '@mantine/core';
import type { TwittType } from "../../../Lib/Types/types";
import "./TwittCard.css";
import classes from './TwittCard.module.css';

interface TwittCardProps {
    twitt: TwittType;
}

export function TwittCard({ twitt }: TwittCardProps) {
    const date = new Date(twitt.date);
    return (
        <div className="TwittCard">
            <Paper withBorder radius="md" className={classes.comment}>
                <Group>
                    <Avatar
                        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
                        alt={twitt.userName}
                        radius="xl"
                    />
                    <div>
                        <Text fz="sm">{twitt.userName}</Text>
                        <Text fz="xs" c="dimmed">
                            {date.toLocaleString()}
                        </Text>
                    </div>
                </Group>
                <TypographyStylesProvider className={classes.body}>
                    <div
                        className={classes.content}
                        dangerouslySetInnerHTML={{
                            __html:
                                `<p>${twitt.content}</p>`,
                        }}
                    />
                </TypographyStylesProvider>
            </Paper>

        </div>
    );
}
