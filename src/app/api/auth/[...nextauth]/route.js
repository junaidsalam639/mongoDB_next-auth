import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth"
import axios from "axios";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                console.log('authorize---->', credentials);
                const user = await axios.post(`${BASED_URL}/user/login`, {
                    "email": credentials.email,
                    "password": credentials.password,
                });
                console.log(user);
                if (user) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    pages: {
        signIn: '/login'
    },
    callbacks: {
        jwt: async ({ token, user }) => {
            console.log('jwt console---->', token, user);
            if (user) {
                return {
                    jwt: user.token,
                    ...user,
                };
            }
            return token;
        },
    }
})

export { handler as GET, handler as POST }

