import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { firebase } from "@/firebase/config";

import { createUserWithEmailAndPassword, type AuthError } from "firebase/auth";

/* console.log("zzz", z); */
export const registerUser = defineAction({
  accept: "form",
  input: z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6),
    remember_me: z.boolean().optional(),
  }),
  handler: async ({ name, email, password, remember_me }, { cookies }) => {
    console.log({ name, password, remember_me, email });

    //cookies
    if (remember_me) {
      cookies.set("email", email, {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365), //1 año
        path: "/",
      });
    } else {
      cookies.delete("email", {
        path: "/",
      });
    }

    //creacion de usuario
    try {
      const user = await createUserWithEmailAndPassword(
        firebase.auth,
        email,
        password
      );

      //Actualizar el nombre (displayName)
      //Verificar el correo electronico
    } catch (error) {
      console.log(error);
      const firebaseError = error as AuthError;

      if (firebaseError.code === "auth/email-already-in-use") {
        throw new Error("El correo ya esta en uso");
      }
      throw new Error("Auxilio! algo salio mal");
    }

    return { ok: true, msg: "usuario creado" };
  },
});
