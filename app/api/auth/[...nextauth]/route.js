import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";


export const authOptions = {
  providers: [
    GoogleProvider({
      clientID: process.env.Google_ID,
      clientSecret: process.env.Google_SECRET
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'jsmith@gmail.com' },
        password: { label: 'Password', type: 'password' },
        username: { label: 'Username', type: 'text', placeholder: 'jSmith' },
      },
      //authentication/auth logic
      async authorize(credentials) {
        //fake user for testing
        const user = { id: 1, name: "John", email: 'jsmith@gmail.com' }
        return user;
      }
    })
  ], 
  secret: process.env.SECRET,
  //encode using jason web tokens (jwt)
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

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }