import { JSX } from "https://esm.sh/preact@10.15.1";
import { IS_BROWSER } from "https://deno.land/x/fresh@1.4.2/runtime.ts";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="px-2 py-1 border-gray-500 border-2 rounded bg-white hover:bg-gray-200 transition-colors"
    />
  );
}
