// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $_middleware from "./routes/_middleware.ts";
import * as $api_joke from "./routes/api/joke.ts";
import * as $index from "./routes/index.tsx";
import * as $login from "./routes/login.tsx";
import * as $register from "./routes/register.tsx";
import * as $video_id_ from "./routes/video/[id].tsx";
import * as $videos from "./routes/videos.tsx";
import * as $Logout from "./islands/Logout.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/_middleware.ts": $_middleware,
    "./routes/api/joke.ts": $api_joke,
    "./routes/index.tsx": $index,
    "./routes/login.tsx": $login,
    "./routes/register.tsx": $register,
    "./routes/video/[id].tsx": $video_id_,
    "./routes/videos.tsx": $videos,
  },
  islands: {
    "./islands/Logout.tsx": $Logout,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
