import { getOneComment } from '@/lib/mongo/products';

export default async function LoginPage () {
  let name = await getOneComment('Bob') 
  console.log(name)
  
    return (
        <main>
          <h1>{name[0].name}</h1>
        </main>
    )
}