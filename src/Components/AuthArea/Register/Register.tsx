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
import twittsUtils from '../../../Lib/Utils/twittsUtils';
import validateUtils from '../../../Lib/Utils/validateUtils';
import "./Register.css";
import classes from './Register.module.css';


export function Register() {

    const [, setActivePage] = useActivePageContext()
    setActivePage(Pages.Register);
    const [, setUser] = useUserContext();
    const [formError, setFormError] = useState<string | null>();
    const navigate = useNavigate();

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: { email: '', userName: '', password: '' },
        validate: {
            email: (value) => validateUtils.validateEmail(value),
            password: (value) => validateUtils.validatePassword(value),
            userName: (value) => validateUtils.validateUserName(value)
        },
    });

    async function handleSubmit(values: { email: string, userName: string, password: string }) {
        try {
            console.log('values: ', values);
            // If there are no errors, navigate
            if (form.validate().hasErrors)
                throw form.errors;
            values.userName = twittsUtils.formatUserName(values.userName);
            const { data, error } = await supabaseDB.auth.signUp({
                email: values.email,
                password: values.password,
                options: {
                    data: { userName: values.userName }
                }
            });
            if (error) {
                console.error(error);
                return setFormError(error.message);
            }
            if (data.user?.user_metadata.userName) {
                console.log('data:', data);
                setUser(data.user?.user_metadata.userName)
            }
            navigate(Pages.Home);
        } catch (error: any) {
            setFormError("Register failed. Please try again.");
            console.log(error);
        }
    }

    return (
        <div className="Register">

            <Container size={420} my={40}>
                <Title ta="center" className={classes.title}>
                    Let's create an account!
                </Title>
                <Text className={classes.subtitle}>
                    Already have an account?<Link to={Pages.Login}>Login</Link>
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
                        <TextInput
                            label="User Name"
                            type='text'
                            placeholder="User_Name"
                            withAsterisk
                            radius="md"
                            key={form.key('userName')}
                            {...form.getInputProps('userName')}
                            onBlur={() => form.validateField('userName')}
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
                            Register
                        </Button>
                    </Paper>
                </form>
            </Container>
        </div>
    );
}
