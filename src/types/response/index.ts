export interface UsuarioResponse {
    id: number;
    nombre: string;
    apellido: string;
    correo: string;
    fotoPerfil?: string;
    activo: boolean;
    fechaRegistro: string;
}

export interface ComentarioResponse {
    id: number;
    contenido: string;
    fechaCreacion: string;
    autor: UsuarioResponse;
}

export interface GrupoResponse {
    id: number;
    nombre: string;
    descripcion?: string;
    fechaCreacion: string;
    creador: UsuarioResponse;
    cantidadMiembros: number;
}

export interface PublicacionResponse {
    id: number;
    titulo: string;
    contenido: string;
    imagenUrl?: string;
    fechaPublicacion: string;
    autor: UsuarioResponse;
    grupoId?: number;
    grupoNombre?: string;
    likesCount: number;
    comentariosCount: number;
}