import { Button, TextInput } from '@mantine/core';
import { useState } from 'react';
import classes from './input.module.css';
import "./ProfilePage.css";
import { useUserContext } from '../../Lib/Context/UserContext';

function formatAndValidateUserName(input: string): { value: string; error: string } {
    // Trim and check length
    const trimmed = input.trim();
    if (trimmed.length > 10) {
        return { value: '', error: 'too long' };
    }
    // Capitalize first letter of each word, allow numbers/symbols, replace spaces with _
    const formatted = trimmed
        .split(' ')
        .map(word => word.length > 0 ? word[0].toUpperCase() + word.slice(1) : '')
        .join('_');
    return { value: formatted, error: '' };
}

export function ProfilePage() {
    const [focused, setFocused] = useState(false);
    const [,setUserName] = useUserContext();
    const [rawUserName, setRawUserName] = useState('');
    const { value: formattedUserName, error: errMsg } = formatAndValidateUserName(rawUserName);
    const isDisabled = rawUserName.trim() === "" || errMsg.length > 0;
    const floating = rawUserName.trim().length !== 0 || focused || undefined;

    function handleSave() {
        if (!errMsg) {
            setUserName(formattedUserName);
        }
    }

    return (
        <div className="ProfilePage">
            <h2>Profile</h2>
            <div className="input-area">
                <TextInput
                    label="User Name"
                    required
                    classNames={classes}
                    value={rawUserName}
                    onChange={(event) => setRawUserName(event.currentTarget.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    autoComplete="nope"
                    data-floating={floating}
                    labelProps={{ 'data-floating': floating }}
                    error={errMsg}
                />
                <Button p={'xs'} disabled={isDisabled} onClick={handleSave}>Save</Button>
            </div>
        </div>
    );
}
