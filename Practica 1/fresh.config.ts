import { defineConfig } from "https://deno.land/x/fresh@1.4.2/server.ts";
import twindPlugin from "https://deno.land/x/fresh@1.4.2/plugins/twind.ts"
import twindConfig from "./twind.config.ts";
export default defineConfig({
  plugins: [twindPlugin(twindConfig)]
});
