import {
    Button,
    Container,
    Paper,
    PasswordInput,
    Text,
    TextInput,
    Title
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabaseDB } from '../../../../DB/supabaseConfig';
import { useActivePageContext } from '../../../Lib/Context/ActivePageContext';
import { useUserContext } from '../../../Lib/Context/UserContext';
import { Pages } from '../../../Lib/Types/types';
import validateUtils from '../../../Lib/Utils/validateUtils';
import "./Login.css";
import classes from './Login.module.css';
import notifyService from '../../../Lib/Services/NotifyService';

export function Login() {
    const [, setActivePage] = useActivePageContext()
    setActivePage(Pages.Login);
    const [, setUser] = useUserContext();
    const [formError, setFormError] = useState<string | null>();
    const navigate = useNavigate();

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: { email: '', password: '' },
        validate: {
            email: (value) => validateUtils.validateEmail(value),
            password: (value) => validateUtils.validatePassword(value)
        },
    });

    async function handleSubmit(values: { email: string; password: string }) {
        try {
            // If there are no errors, navigate
            if (form.validate().hasErrors)
                throw form.errors;

            const credentials = { email: values.email, password: values.password };
            const { data, error } = await supabaseDB.auth.signInWithPassword(credentials);
            if (error)
                return setFormError(error.message);
            if (data.user.email)
                // throw error if no user name
                setUser(data.user.email)

            notifyService.success(`Successfully logged-in`)
            navigate(Pages.Home);
        } catch (error: any) {
            notifyService.error("Login failed. Please try again.");
            console.log(error);
        }
    }

    return (
        <div className="Login">
            <Container size={420} my={40}>
                <Title ta="center" className={classes.title}>
                    Welcome back!
                </Title>
                <Text className={classes.subtitle}>
                    Do not have an account yet? <Link to={Pages.Register}>Create account</Link>
                </Text>
                <form onSubmit={form.onSubmit(handleSubmit)}>
                    <Paper withBorder shadow="sm" p={22} mt={30} radius="md">
                        <TextInput
                            label="Email"
                            type='email'
                            placeholder="you@gmail.com"
                            withAsterisk
                            radius="md"
                            key={form.key('email')}
                            {...form.getInputProps('email')}
                            onBlur={() => form.validateField('email')}
                        />
                        <PasswordInput
                            label="Password"
                            type='password'
                            placeholder="Your password"
                            withAsterisk
                            mt="md"
                            radius="md"
                            key={form.key('password')}
                            {...form.getInputProps('password')}
                            onBlur={() => form.validateField('password')}
                        />
                        {formError && (
                            <Text color="red" mb="sm" >
                                {formError}
                            </Text>
                        )}
                        <Button type='submit' fullWidth mt="xl" radius="md" onClick={() => setFormError(null)}>
                            Log in
                        </Button>
                    </Paper>
                </form>
            </Container>
        </div>
    );
}
