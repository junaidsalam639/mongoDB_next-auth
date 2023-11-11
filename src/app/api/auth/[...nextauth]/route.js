import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                console.log('authorize---->' , credentials);
                const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
                if (user) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    pages : {
        signIn : '/login'
    }
})

export { handler as GET, handler as POST }

