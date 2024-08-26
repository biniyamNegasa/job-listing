import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import signInUser from "@/app/lib/signInUser";
import { NextAuthOptions } from "next-auth";

export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            profile(profile){
                
                let userRole = "Google User";
                return {
                    ...profile,
                    id: profile.sub,
                    role: userRole,
                }
            },
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_Secret!,
        }),
        CredentialsProvider({
            type: "credentials",
            credentials: {
                email: {
                    label: 'email',
                    type: "text",
                },
                password: {
                    label: 'password',
                    type: "password",
                }
                
            },

            async authorize(credentials) {
                const {email, password} = credentials as {
                    email: string,
                    password: string,
                };
                try {
                    const res = await signInUser({email, password});
                    return ({
                        id: res.id,
                        name: res.name,
                        email: res.email,
                        accessToken: res.accessToken,
                        refreshToken: res.refreshToken
                    });

                }catch(error){
                    return null;
                };
            },
        })
    ],
    pages: {
        signIn: '/SignIn'
    },
    callbacks: {
        async jwt({ token, user }: {token: any, user: any}) {
            if (user){
                token.id = user.id,
                token.name = user.name,
                token.email = user.email,
                token.accessToken = user.accessToken,
                token.refreshToken = user.refreshToken

            }

            return token;
        },

        async session({ session, token }: {session: any, token: any}) {
            if (session?.user){

                session.user.id = token.id,
                session.user.name = token.name,
                session.user.email = token.email,
                session.user.accessToken = token.accessToken,
                session.user.refreshToken = token.refreshToken
            }
            
            return session;
        }
    },
}