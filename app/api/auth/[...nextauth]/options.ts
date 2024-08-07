import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import { User, Session } from "next-auth";

export const options = {
    providers: [
        GoogleProvider({
            profile(profile){
                console.log("Profile Google: ", profile)
                
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
            name: "Credentials",
            credentials: {
                email: {
                    label: "email",
                    type: "email",
                    placeholder: "your-email"
                },
                password: {
                    label: "password",
                    type: "password",
                    placeholder: "your-password"
                }, 
            },
            async authorize(credentials, req){

                const payload = {
                    email: credentials?.email,
                    password: credentials?.password,
                }
                const response = await fetch("https://akil-backend.onrender.com/login", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(payload)
                    });

                    const user = await response.json();
                    if (!response.ok){
                        throw new Error(user.message);
                    }

                    if (response.ok && user){
                        console.log(user)
                        return user;
                    }
                
                return null;
            }
        })
        
    ],
    pages: {
        signIn: '/SignIn',
    },
    callbacks: {
        async jwt({ token, user }: {token: JWT, user: User}) {
            token.email = user.email,
            token.name = user.name
            return token;
        },

        async session({ session, token }: {session: Session, token: JWT}) {
            session.user!.email = token.email,
            session.user!.name = token.name
            return session;
        }
    }
}