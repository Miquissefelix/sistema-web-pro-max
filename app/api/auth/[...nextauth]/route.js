import User from "@/models/userModel";
import { connectToDB } from "@/utils/DAO";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcrypt";


export const nextAuthOption = {
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      async authorize(credentials, request) {
        //logica de login
        const { email, password } = credentials;
        // console.log(credentials);
        await connectToDB();
         
        //implementar logica para verificar os dados na base d dados e conectar a bd da utils
      

        const user = await User.findOne({
          email: email.toLowerCase(),
        }).select("+password");

// console.log(user);
      
        
        

        //comparacao da password da login com aquela guardada na base de dados
        //se o usuario nao tiver na BD ele ira retornar algo vazio
        if (!user || !(await bcrypt.compare(password, user.password))) return;

        return {
          email: user.email,
          name: user.firstName + " " + user.lastName,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user);
      return token;
    },
    async session({session, token}){
      session.user.role=token.user.role;
      return session;
    }
  },
};

const handler = NextAuth(nextAuthOption);
export { handler as GET, handler as POST };
