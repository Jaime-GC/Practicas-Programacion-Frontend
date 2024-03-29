// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $index from "./routes/index.tsx";
import * as $leccion_aleatoria from "./routes/leccion_aleatoria.tsx";
import * as $leccion_elegida from "./routes/leccion_elegida.tsx";

import { type Manifest } from "https://deno.land/x/fresh@1.6.5/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/index.tsx": $index,
    "./routes/leccion_aleatoria.tsx": $leccion_aleatoria,
    "./routes/leccion_elegida.tsx": $leccion_elegida,
  },
  islands: {},
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
