"use client";

const Client = () => {
  console.log({
    client: {
      someEnvVar: process.env.NEXT_PUBLIC_SOME_ENV_VAR,
    },
  });

  return (
    <div className="bg-yellow-600">
      <h2>This is Client!</h2>
    </div>
  );
};

export default Client;
