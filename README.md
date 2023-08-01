# next-k8-env-test

## Setup

0. Sample env

```sh
NEXT_PUBLIC_SOME_ENV_VAR=https://example.com
```

1. Install deps

```sh
pnpm i
```

2. Build Dockerfile

```sh
docker build -t next-k8-env-test .
```

#### Case A

> If `.env` is provided at build - Next.js automatically detects it.

When variables are providers during build, they are available on both Client and Server.

#### Case B

> If `.env` is _NOT_ provided at build (no .env file during build). But the variables are available in the runtime environment (using `--env-file`), the env is available on the server but is `undefined` on the client.

3. Run Docker image

```sh
docker run --env-file envfile -p 3000:3000 next-k8-env-test
```

## Demo Video

[https://www.youtube.com/watch?v=MDeW4N5B7vQ](https://www.youtube.com/watch?v=MDeW4N5B7vQ)

## Reflections on this

1. An educated guess - Webpack statically replaces Client Envs on build time and since they are unavailable during build, they are undefined on the client.
2. If that is so, how can I overcome it? I want to change the envs on runtime, so I can just rerun the server on env change and it works. Rather than triggering an entire build.
3. As seen in the video, why does Client component log also gets logged on the Server CLI? And why does env exist in the client log on Server CLI and not on the client log on the Chrome console?

## Thank you!

Thank you soooo much for reading this!
