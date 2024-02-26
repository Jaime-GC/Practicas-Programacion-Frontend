#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from "https://deno.land/x/fresh@1.4.2/dev.ts";
import config from "./fresh.config.ts";

await dev(import.meta.url, "./main.ts", config);
