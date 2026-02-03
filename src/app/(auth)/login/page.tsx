import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full">
      {/* Columna Izquierda: Visual / Artística */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-brand-900 overflow-hidden">
        {/* Simulación de "Marea Digital" con CSS gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-600 to-brand-900 opacity-90 z-10" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary-500 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-400 rounded-full blur-3xl opacity-20" />

        {/* Contenido sobre la imagen */}
        <div className="relative z-20 flex flex-col justify-center px-12 text-white h-full">
          <h1 className="text-5xl font-bold mb-6">Chattide.</h1>
          <p className="text-xl text-brand-100 max-w-md">
            Conecta con tu comunidad. Donde las conversaciones fluyen como la
            marea.
          </p>
        </div>
      </div>

      {/* Columna Derecha: Formulario */}
      <div className="flex flex-1 flex-col justify-center items-center px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-white">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <LoginForm />

          <div className="mt-10 text-center text-sm text-gray-500">
            ¿No tienes una cuenta?{" "}
            <a
              href="/register"
              className="font-semibold text-brand-600 hover:text-brand-500 transition-colors"
            >
              Regístrate gratis
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
