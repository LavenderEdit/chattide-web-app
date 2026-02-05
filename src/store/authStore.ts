import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthResponse } from '@/types/auth';
import { UsuarioResponse } from '@/types/response';

interface AuthState {
    accessToken: string | null;
    refreshToken: string | null;
    user: UsuarioResponse | null;
    isAuthenticated: boolean;

    // Acciones (funciones que modifican el estado)
    setAuth: (data: AuthResponse) => void;
    logout: () => void;
    updateUser: (user: UsuarioResponse) => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            accessToken: null,
            refreshToken: null,
            user: null,
            isAuthenticated: false,

            setAuth: (data) =>
                set({
                    accessToken: data.accessToken,
                    refreshToken: data.refreshToken,
                    user: data.usuario,
                    isAuthenticated: true,
                }),

            logout: () => {
                localStorage.removeItem('auth-storage'); // Limpieza manual extra por seguridad
                set({
                    accessToken: null,
                    refreshToken: null,
                    user: null,
                    isAuthenticated: false,
                });
            },

            updateUser: (updatedUser) =>
                set((state) => ({
                    user: { ...state.user, ...updatedUser },
                })),
        }),
        {
            name: 'auth-storage', // Nombre clave en localStorage
        }
    )
);