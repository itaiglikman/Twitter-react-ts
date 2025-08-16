import { Button, Container, Text, Textarea } from '@mantine/core';
import { useState } from 'react';
import { useTwitterContext } from '../../../Lib/Context/TwitterContext';
import twittsUtils from '../../../Lib/Utils/twittsUtils';
import "./CreateTwitt.css";
import classes from './CreateTwitt.module.css';
import { useUserContext } from '../../../Lib/Context/UserContext';
import { dbName, supabaseDB } from '../../../../DB/supabaseConfig';
import notifyService from '../../../Lib/Services/NotifyService';

export function CreateTwitt() {
    // mantine:
    const [focused, setFocused] = useState(false);
    const [content, setContent] = useState('');
    const floating = content.trim().length !== 0 || focused || undefined;

    const [errMsg, setErrMsg] = useState('');
    const [twitts, setTwitts] = useTwitterContext();
    const [userName] = useUserContext();
    const isConnected = userName.length > 0;
    const textAreaLabel = isConnected ? "Tell the world what you're thinking about" : "Please set user before posting"

    const isDisabled = // don't allow posting
        content.trim() === "" // no content
        || content.trim().length > 140 // over max chars
        || !twitts //while loading posts 
        || !userName

    async function handlePost() {
        try {
            // create object for database:
            const post = twittsUtils.createPost(userName, content);
            const { data, error } = await supabaseDB.from(dbName).insert([post]).select();
            if (error) throw error;
            const dbPost = data[0];
            setTwitts([...twitts, dbPost]);
            setContent('');
            setErrMsg('');
        } catch (error: any) {
            notifyService.error("Couldn't post the tweet...");
            console.log(error);
        }
    }

    return (
        <div className="CreateTwitt">
            <Textarea
                styles={{ input: { width: "300px", height: '100px' } }}
                label={textAreaLabel}
                placeholder="Write here your tweet"
                required
                classNames={classes}
                value={content}
                onChange={(event) => setContent(event.currentTarget.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                mt="md"
                autoComplete="nope"
                data-floating={floating}
                labelProps={{ 'data-floating': floating }}
                error={errMsg}
            />
            <Container className='bottom-area'>
                <Text
                    color={content ? (isDisabled ? 'red' : 'green') : ''}
                    fz={'sm'}
                >
                    {content.trim().length}/140
                </Text>
                <Button p={'xs'} disabled={isDisabled} onClick={handlePost}>Post</Button>
            </Container>
        </div>
    );
}
