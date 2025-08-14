import { Button, Container, Text, Textarea } from '@mantine/core';
import { useState } from 'react';
import { useTwitterContext } from '../../../Lib/Context/TwitterContext';
import twittsUtils from '../../../Lib/Utils/twittsUtils';
import "./CreateTwitt.css";
import classes from './CreateTwitt.module.css';

export function CreateTwitt() {
    // mantine:
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState('');
    const isDisabled = value.trim() === "" || value.trim().length > 140;
    const floating = value.trim().length !== 0 || focused || undefined;

    const [twitts, setTwitts] = useTwitterContext();

    function handlePost() {
        const post = twittsUtils.createPost(value);
        setTwitts([...twitts, post]);
        setValue('');
    }

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
                <Button p={'xs'} disabled={isDisabled} onClick={handlePost}>Post</Button>
            </Container>
        </div>
    );
}
