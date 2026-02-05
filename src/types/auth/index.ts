import { UsuarioResponse } from "../response";

// auth - requests
export interface ChangePasswordRequest {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}

export interface ForgotPasswordRequest {
    correo: string;
}

export interface LoginRequest {
    correo: string;
    password: string;
}

export interface RefreshTokenRequest {
    refreshToken: string;
}

export interface ResetPasswordRequest {
    token: string;
    newPassword: string;
    confirmPassword: string;
}

// auth - responses
export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    tokenType: string;
    expiresIn: number;
    usuario: UsuarioResponse;
}