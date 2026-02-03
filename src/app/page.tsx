"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

export default function Home() {
  const router = useRouter();
  const { isAuthenticated, user, logout } = useAuthStore();
  const [mounted, setMounted] = useState(false);

  // 1. Evitar problemas de hidratación (esperar a que el navegador esté listo)
  useEffect(() => {
    setMounted(true);
  }, []);

  // 2. Lógica de Redirección
  useEffect(() => {
    if (mounted && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, mounted, router]);

  // Si no ha cargado aún, o no está autenticado, mostramos un "Cargando..."
  if (!mounted || !isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-brand-500 border-t-transparent mx-auto"></div>
          <p className="mt-4 text-brand-700 font-medium">
            Cargando Chattide...
          </p>
        </div>
      </div>
    );
  }

  // 3. Dashboard Temporal (Esto lo reemplazaremos por el Feed real después)
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-slate-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full">
        <div className="w-20 h-20 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
          {user?.nombre?.charAt(0) || "U"}
        </div>

        <h1 className="text-2xl font-bold text-slate-900">
          ¡Hola, {user?.nombre}! 👋
        </h1>
        <p className="text-slate-500 mt-2 mb-6">
          Has iniciado sesión correctamente en Chattide.
        </p>

        <div className="bg-slate-50 p-4 rounded-lg text-left text-sm space-y-2 mb-6 border border-slate-100">
          <p>
            <span className="font-semibold text-slate-700">Email:</span>{" "}
            {user?.email}
          </p>
          <p>
            <span className="font-semibold text-slate-700">Rol:</span>{" "}
            {user?.rol || "Usuario"}
          </p>
          <p>
            <span className="font-semibold text-slate-700">Token:</span>{" "}
            <span className="text-green-600">Activo</span>
          </p>
        </div>

        <button
          onClick={() => {
            logout();
            router.push("/login");
          }}
          className="w-full py-2.5 px-4 bg-red-50 text-red-600 font-medium rounded-lg hover:bg-red-100 transition-colors"
        >
          Cerrar Sesión
        </button>
      </div>
    </main>
  );
}
