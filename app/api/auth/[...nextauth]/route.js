import NextAuth from "next-auth/next";
import clientPromise from "../../../../lib/mongo/client";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from 'bcrypt';
import { matchEmail } from "@/lib/mongo/products";



export const authOptions = {
  // adapter: Prisma????
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.Google_ID,
      clientSecret: process.env.Google_SECRET
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'jsmith@gmail.com' },
        password: { label: 'Password', type: 'password' },
        username: { label: 'Username', type: 'text', placeholder: 'jSmith' },
      },
      //authentication/auth logic
      async authorize(credentials) {
        // console.log(credentials.email);
        //check for email and passsword
        // if (!credentials.email) {
        if (!credentials.email || !credentials.password) {
          console.log('Missing email or password')
          throw new Error ('Missing email or password')
        }
        //check database for user
        const user = await matchEmail(credentials.email);
        console.log(user.password)
        // if (user === []) {
        if (!user || !user.password) {
          console.log('No user found')
          throw new Error ('No user found')
        }
        //check for matching password
        const passwordMatch = await bcrypt.compare(credentials.password, user.password);
        if (!passwordMatch) {
          console.log('Password mismatch')
          throw new Error ('Incorrect password')
        }
        //fake user for testing
        // const user = { id: 1, name: "John", email: 'jsmith@gmail.com' }
        console.log(user)
        return user;
      }
    })
  ],
  // a secret is required to encrypt jason web getToken(jwt)
  secret: process.env.SECRET,
  //session states that we will encode using json web tokens
  session: {
    strategy: 'jwt',
  },
  //will provide auth code errors
  debug: process.env.NODE_ENV === "development", 
}

// export const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientID: process.env.Google_ID,
//       clientSecret: process.env.Google_SECRET
//     }),
//   ],  
//   // pages: {
//   //   login: '/login'
//   // }
// }

//export auth options
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }