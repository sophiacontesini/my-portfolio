import { Header } from './components/header/Header';
import Image from 'next/image';
import './styles/Home.scss';
import { Experience } from './components/experience/Experience';
import { Information } from './components/information/Information';
import { EmailIcon } from './components/icons/email-icon';
import { SocialBtns } from './components/social-btns/SocialBtns';

export default function Home() {
  return (
    <main className='container'>
      <Header />
      <Experience />
      <Information />
      <div className='buttons'>
        <SocialBtns />
        <a className='btn-primary' href='mailto:teste@gmail.com'>
          contact me
          <EmailIcon />
        </a>
      </div>
    </main>
  );
}
