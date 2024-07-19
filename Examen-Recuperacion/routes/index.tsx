import dniinput from "../islands/dniinput.tsx";
import {FreshContext, Handlers, PageProps } from "$fresh/server.ts";


export const handler: Handlers = {
  GET: () => {
    const headers = new Headers({
      location:"/dniinput",
    });

    return new Response(null, {status: 302, headers,});
  },
};
