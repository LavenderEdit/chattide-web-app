import axios from 'axios';

// URL base de tu backend Spring Boot
// Si estás en local es localhost:8090/api
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8090/api';

export const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// INTERCEPTOR: Antes de enviar la petición, inyecta el token
api.interceptors.request.use((config) => {
    // Buscamos el token en localStorage (el almacenamiento del navegador)
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }
    return config;
});

// INTERCEPTOR: Si la respuesta es error 401 (No autorizado), intentamos refrescar token
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // Si el error es 401 y no hemos reintentado todavía
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = localStorage.getItem('refreshToken');

                if (!refreshToken) throw new Error("No refresh token");

                // Llamamos al endpoint de tu AuthController.java
                const response = await axios.post(`${BASE_URL}/auth/refresh-token`, {
                    refreshToken: refreshToken
                });

                // Guardamos el nuevo token
                const newAccessToken = response.data.accessToken;
                localStorage.setItem('accessToken', newAccessToken);

                // Reintentamos la petición original con el nuevo token
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                return api(originalRequest);

            } catch (refreshError) {
                // Si falla el refresh, cerramos sesión forzosamente
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                localStorage.removeItem('user');
                window.location.href = '/login';
            }
        }
        return Promise.reject(error);
    }
);