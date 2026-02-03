// Basado en UsuarioResponse.java
export interface Usuario {
    id: number;
    nombre: string;
    apellido: string;
    email: string; // En Java es 'correo', verificar el JSON de respuesta
    fotoPerfilUrl?: string; // Puede ser null
    rol?: string;
}

// Basado en AuthResponse.java
export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    tokenType: string;
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
    email: string;
    password: string;
}