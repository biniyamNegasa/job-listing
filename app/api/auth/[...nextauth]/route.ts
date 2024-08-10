import NextAuth from "next-auth";
import { options } from "./options";
import { any } from "zod";


const handler = NextAuth(options);

export { handler as GET, handler as POST };