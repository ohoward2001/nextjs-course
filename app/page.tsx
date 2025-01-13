'use client';
import Link from 'next/link'
import ProductCard from './components/ProductCard'

// const HeavyComponent = dynamic(() => import('./components/HeavyComponent'),
// {
//   ssr: false,
//   loading: () => <p>Loading..</p>
// });

export default function Home() {

  // const [isVisible, setVisible] = useState(false);
  // const session = await getServerSession(authOptions)
  return (
    <main className='relative h-screen'>
      {/* <h1>Hello {session && <span>{session.user!.name}</span>}</h1> */}
      <Link href="/users">Users</Link>
      <button onClick={async () => {
        const _ = (await import('lodash')).default;
        const users = [
          {name: 'a'},
          {name: 'c'},
          {name: 'b'}
        ];

        const sorted = _.orderBy(users, ['name']);
        console.log(sorted);
      }}>Show</button>
      <ProductCard/>
      {/* <Image src="https://bit.ly/react-cover" fill className='object-cover' alt='Logo' sizes='(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw' quality={100} priority/> */}
    </main>
  )
}
