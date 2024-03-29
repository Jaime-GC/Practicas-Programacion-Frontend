#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from "https://deno.land/x/fresh@1.6.5/dev.ts";
import config from "./fresh.config.ts";

import "https://deno.land/std@0.211.0/dotenv/load.ts";

await dev(import.meta.url, "./main.ts", config);
