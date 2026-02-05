import RegisterForm from "@/components/auth/RegisterForm";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen w-full flex-row-reverse">
      {/* Columna Derecha: Visual / Artística */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-brand-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-teal-500 to-brand-900 opacity-90 z-10" />
        <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-brand-400 rounded-full blur-3xl opacity-20 animate-pulse" />

        <div className="relative z-20 flex flex-col justify-center px-12 text-white h-full text-right items-end">
          <h1 className="text-5xl font-bold mb-6">Únete hoy.</h1>
          <p className="text-xl text-brand-100 max-w-md">
            Descubre comunidades, comparte tus momentos y navega en la nueva ola
            social.
          </p>
        </div>
      </div>

      {/* Columna Izquierda: Formulario */}
      <div className="flex flex-1 flex-col justify-center items-center px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-white">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <RegisterForm />

          <div className="mt-10 text-center text-sm text-gray-500">
            ¿Ya tienes una cuenta?{" "}
            <Link
              href="/login"
              className="font-semibold text-brand-600 hover:text-brand-500 transition-colors"
            >
              Inicia sesión aquí
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
