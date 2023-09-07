import api from './api';

export async function postHabits(token, body) {
    const response = await api.post('/habits', body, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
}

export async function getHabits(token) {
    const response = await api.get('/habits', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
}

export async function deleteHabits(token, id) {
    await api.delete(`/habits/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}