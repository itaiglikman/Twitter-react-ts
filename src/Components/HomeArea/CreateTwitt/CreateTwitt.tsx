import { Button, Container, Text, Textarea } from '@mantine/core';
import { useState } from 'react';
import "./CreateTwitt.css";
import classes from './CreateTwitt.module.css';

export function CreateTwitt() {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState('');
    const isDisabled = value.trim() === "" || value.trim().length > 140;
    const floating = value.trim().length !== 0 || focused || undefined;
    return (
        <div className="CreateTwitt">
            <Textarea
                styles={{ input: { width: "300px", height: '100px' } }}
                label="Tell the world what you're thinking about"
                placeholder="Write here your tweet"
                required
                classNames={classes}
                value={value}
                onChange={(event) => setValue(event.currentTarget.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                mt="md"
                autoComplete="nope"
                data-floating={floating}
                labelProps={{ 'data-floating': floating }}
            />
            <Container className='bottom-area'>
                <Text
                    color={value ? (isDisabled ? 'red' : 'green') : ''}
                    fz={'sm'}
                >
                    {value.trim().length}/140
                </Text>
                <Button p={'xs'} disabled={isDisabled}>Post</Button>
            </Container>
        </div>
    );
}
