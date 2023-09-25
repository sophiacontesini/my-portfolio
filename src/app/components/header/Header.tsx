import Image from 'next/image';

import './Header.scss';

export function Header() {
  return (
    <div className='header'>
      <div>
        <h1>Hi, i'm Sophia! 👋</h1>
        <h2>Software Engineer</h2>
      </div>
      <Image src='/me.jpg' alt='Me Pic' width={325} height={310} priority />
    </div>
  );
}
