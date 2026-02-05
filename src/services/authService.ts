import { api } from '@/lib/axios';
import { LoginRequest, AuthResponse } from '@/types/auth';

export const authService = {
    // Función para iniciar sesión
    login: async (credentials: LoginRequest): Promise<AuthResponse> => {
        const { data } = await api.post<AuthResponse>('/auth/login', credentials);
        return data;
    },

    register: async (userData: any) => {
        const { data } = await api.post('/auth/register', userData);
        return data;
    },

    // Función para cerrar sesión en backend (opcional si solo manejamos JWT stateless)
    logout: async () => {
        // Si tu backend tuviera un endpoint de logout para invalidar refresh tokens, iría aquí
    }
};