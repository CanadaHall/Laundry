import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
    pages: {
        signIn: "/login",
    },
    session: { strategy: "jwt" },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: 'email',
                    placeholder: 'Email'
                },
                password: {
                    label: "Password",
                    type: 'password',
                },
            },
            async authorize (credentials, req)
            {
                // TODO: Add logic here to look up the user from the credentials supplied
                console.log("Credentials: ", credentials, req);

                const user = {
                    id: "1",
                    name: "John Smith",
                    email: "jsmith@example.com",
                    roomNumber: "MFS 101"
                };

                return user;
            }
        })
    ]
};

export default authOptions;