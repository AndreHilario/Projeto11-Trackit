import api from './api';

export async function check(token, body, id) {
    const response = await api.post(`/habits/${id}/check`, body, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
}

export async function getTodayHabits(token) {
    const response = await api.get('/habits/today', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
}

export async function uncheck(token, body, id) {
    await api.post(`/habits/${id}/uncheck`, body, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}