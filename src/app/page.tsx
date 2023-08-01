import Client from "./client";

export const revalidate = 0;

export default function Home() {
  const someEnvVar = process.env.NEXT_PUBLIC_SOME_ENV_VAR;

  console.log({
    server: {
      someEnvVar,
    },
  });

  return (
    <main className="grid gap-4">
      <h1 className="text-xl font-bold">Hi from the Server!</h1>
      <Client />
    </main>
  );
}
