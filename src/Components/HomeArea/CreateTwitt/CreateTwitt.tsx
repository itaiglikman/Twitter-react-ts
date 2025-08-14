import { Button, Container, Text, Textarea } from '@mantine/core';
import { useState } from 'react';
import { useTwitterContext } from '../../../Lib/Context/TwitterContext';
import twittsUtils from '../../../Lib/Utils/twittsUtils';
import "./CreateTwitt.css";
import classes from './CreateTwitt.module.css';
import axios from 'axios';
import { apiURL } from '../../../Lib/Constants';

export function CreateTwitt() {
    // mantine:
    const [focused, setFocused] = useState(false);
    const [content, setContent] = useState('');
    const [errMsg,setErrMsg] = useState('');
    const floating = content.trim().length !== 0 || focused || undefined;

    const [twitts, setTwitts] = useTwitterContext();
    const isDisabled = // don't allow posting
        content.trim() === "" // no content
        || content.trim().length > 140 // over max chars
        //not working
        || !twitts; //while loading posts 

    async function handlePost() {
        try {
            // create object for database:
            const postToSend = { content: content, userName: 'john', date: new Date().toISOString() }
            const result = await axios.post(apiURL, postToSend);
            console.log(result);
            const post = twittsUtils.createPost(content);
            //should get twitts from server
            setTwitts([...twitts, post]);
            setContent('');
            setErrMsg('');
        } catch (error: any) {
            setErrMsg("Couldn't post the tweet...");
            console.log(error);
        }
    }

    return (
        <div className="CreateTwitt">
            <Textarea
                styles={{ input: { width: "300px", height: '100px' } }}
                label="Tell the world what you're thinking about"
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
