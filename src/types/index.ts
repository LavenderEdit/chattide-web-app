// Basado en UsuarioResponse.java
export interface Usuario {
    id: number;
    nombre: string;
    apellido: string;
    correo: string; // En Java es 'correo', verificar el JSON de respuesta
    fotoPerfil?: string; // Puede ser null
    activo: boolean;
    fechaRegistro: string;
}

// Basado en AuthResponse.java
export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    tokenType: string;
    expiresIn: number;
    usuario: Usuario;
}

// Basado en PublicacionResponse.java
export interface Publicacion {
    id: number;
    contenido: string;
    imagenUrl?: string;
    fechaCreacion: string; // Las fechas vienen como String ISO desde Java
    autorId: number;
    autorNombre: string;
    autorFotoUrl?: string;
    grupoId?: number;
    grupoNombre?: string;
    likesCount: number;
    comentariosCount: number;
    likedByCurrentUser: boolean; // Necesitaremos asegurar que el backend mande esto o calcularlo
}

// Basado en ComentarioResponse.java
export interface Comentario {
    id: number;
    contenido: string;
    fechaCreacion: string;
    autorId: number;
    autorNombre: string;
    autorFotoUrl?: string;
}

// Basado en GrupoResponse.java
export interface Grupo {
    id: number;
    nombre: string;
    descripcion: string;
    creadorId: number;
    esMiembro?: boolean; // Útil para la UI
}

export interface LoginRequest {
    correo: string;
    password: string;
}