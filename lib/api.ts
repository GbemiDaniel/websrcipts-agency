const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export const fetcher = async (endpoint: string, options: RequestInit = {}) => {
    const res = await fetch(`${API_URL}${endpoint}`, {
        headers: { 'Content-Type': 'application/json', ...options.headers },
        ...options,
    });

    if (!res.ok) {
        throw new Error('API request failed');
    }

    return res.json();
};
