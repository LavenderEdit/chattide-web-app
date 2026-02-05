export interface BusquedaRequest {
    query: string;
    page?: number;
    size?: number;
    sortBy?: string;
    direction?: string;
}

export interface ComentarioRequest {
    contenido: string;
    usuarioId: number;
    publicacionId: number;
}

export interface GrupoRequest {
    nombre: string;
    descripcion?: string;
    creadorId: number;
}

export interface LikeRequest {
    entityId: number;
    entityType: 'PUBLICACION' | 'COMENTARIO';
}

export interface MemberActionRequest {
    grupoId: number;
    targetUsuarioId: number;
    nuevoRol?: string;
}

export interface PublicacionRequest {
    titulo: string;
    contenido: string;
    imagenUrl?: string;
    usuarioId: number;
    grupoId?: number;
}

export interface UsuarioRequest {
    nombre: string;
    apellido: string;
    correo: string;
    password: string;
    fotoPerfil?: string;
}

export interface UsuarioUpdateRequest {
    nombre?: string;
    apellido?: string;
    fotoPerfil?: string;
    estado: string;
}