import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import CrearCuenta from "../islands/CrearCuenta.tsx";
import { LoverType } from "../types.ts";
import { comment } from "../types.ts";



export const handler: Handlers = {
    POST: async(req:Request,ctx:FreshContext<unknown, LoverType[]>) => {
        const url = new URL(req.url);

        
        const name = url.searchParams.get("name") || undefined;
        const password = url.searchParams.get("password") || undefined;
        const age = url.searchParams.get("age") || undefined;
        const sex = url.searchParams.get("sex") || undefined;
        const description = url.searchParams.get("description") || undefined;
        const hobbies = url.searchParams.get("hobbies")?.split(",").map((h:string)=>h.replace(/^\s+|\s+$/g, "")) || undefined;
        const photo = url.searchParams.get("photo") || undefined;

        //console.log("name", name, "password", password, "age", age, "sex",sex, "description", description, "hobbies", hobbies, "photo", photo);


        

        

        if (name === undefined && password === undefined && age === undefined && sex === undefined && description === undefined && hobbies === undefined && photo === undefined) {
            console.log("name", name, "password", password, "age", age, "sex",sex, "description", description, "hobbies", hobbies, "photo", photo);
            return new Response("Faltan datos",{
                status:400
            });

            return ctx.render({ name: "", password: "", age: "", sex: "", description: "", hobbies: [], photo: "", comments: [] });


        }
            

            console.log("LLama a Axios");



            
            
            await Axios({
                method: 'post',
                url: 'https://lovers.deno.dev/',
                data: {
                    "name": "John Doe",
                    "password": "password123",
                    "age": 25,
                    "sex": "male",
                    "description": "I am a fun-loving person",
                    "hobbies": ["reading", "playing guitar"],
                    "photo": "https://example.com/photo.jpg",
                    "comments": []
                }
              });



            /*return new Response("", {
                status: 307, // Temporary Redirect
                headers: { location: "/" },
            });*/

            return ctx.render({ name, password, age: parseInt(age), sex, description, hobbies, photo, comments: [] });
         
    }
}
const Page = (props: PageProps<LoverType>) => {
    console.log("props", props.data);


    return(
       <CrearCuenta/>
    )
}
export default Page;