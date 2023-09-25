import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <h1>HELLO WORLD!</h1>
      <Image
        src='/vercel.svg'
        alt='Vercel Logo'
        width={100}
        height={24}
        priority
      />
    </main>
  );
}
