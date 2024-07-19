import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

type Contact = {
  name: string;
  email: string;
  dni: string;
};

type Data = {
  contacts: Contact[];
};

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext<unknown, Data>) => {
    const dni: string = "51539061Z";
    const response = await fetch(`https://apicontacts.deno.dev/contacts/${dni}`);
    const data = await response.json();
    return ctx.render({ contacts: data });
  },

  POST: async (req: Request, ctx: FreshContext<unknown, Data>) => {
    const formData = await req.formData();
    const name = formData.get("name") as String;
    const email = formData.get("email") as String;
    const dni: string = "51539061Z";
    
   await fetch(`https://apicontacts.deno.dev/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, dni }),
        },
      );
    
      return new Response(null, 
        {status: 302, headers: {
            "Location" : "/contactos", 
        },
    });
  },

};

const Page = (props: PageProps<Data>) => {
  const contacts = props.data.contacts;

  return (
    <>
      

      <div class="main-container">
        <div class="contacts-container">
          <h1>Contactos de 51539061Z</h1>
          <ul>
            {contacts.map((contact) => (
              <li key={contact.email}>
                <div>{contact.name}</div>
                <div>{contact.email}</div>
                <button>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>


      <div class="add-contact-container">
        <h1>Añadir contacto</h1>
        <form method="post">
          <label for="name">Nombre:</label>
          <input type="text" name="name" id="name" />
          <label for="email">Email:</label>
          <input type="email" name="email" id="email" />
          <button type="submit">Añadir</button>
        </form>
      </div>
    </>
  );
};

export default Page;