import api from './api';

export async function signUp(email, name, image, password) {
    const response = await api.post('/auth/sign-up', { email, name, image, password });
    return response.data;
}