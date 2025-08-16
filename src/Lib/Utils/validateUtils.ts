function validateEmail(value: string) {
    if (!value) return ('Email is required');
    if (!/^\S+@\S+$/.test(value)) return ('Invalid email');
    return null
}

function validatePassword(value: string) {
    if (!value) return ('Password is required');
    if (value.trim().length < 4) return ('Password must be at least 6 chars')
    return null;
}

function validateUserName(value: string) {
    if (!value) return ('Username is required');
    if (value.trim().length < 4) return ('Username must be at least 4 chars')
    if (value.trim().length > 10) return ('Username must be at less than 10 chars')
    return null;
}

export default {
    validateEmail,
    validatePassword,
    validateUserName,
}