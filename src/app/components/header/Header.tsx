import Image from 'next/image';

import './Header.scss';

export function Header() {
  return (
    <div className='header'>
      <div>
        <h1>Hello, i'm Sophia!</h1>
        <h2>Front-end Developer / UX Designer</h2>
      </div>
      <Image src='/me.jpg' alt='Me Pic' width={325} height={310} priority />
    </div>
  );
}
