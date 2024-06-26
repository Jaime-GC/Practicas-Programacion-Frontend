// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $create_heroe from "./routes/create_heroe.tsx";
import * as $delete_heroe from "./routes/delete_heroe.tsx";
import * as $heroe_info_name_ from "./routes/heroe_info/[name].tsx";
import * as $index from "./routes/index.tsx";
import * as $search from "./routes/search.tsx";

import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/create_heroe.tsx": $create_heroe,
    "./routes/delete_heroe.tsx": $delete_heroe,
    "./routes/heroe_info/[name].tsx": $heroe_info_name_,
    "./routes/index.tsx": $index,
    "./routes/search.tsx": $search,
  },
  islands: {},
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
