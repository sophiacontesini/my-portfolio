import { Header } from './components/header/Header';
import Image from 'next/image';
import './styles/home.scss';
import { Experience } from './components/experience/Experience';

export default function Home() {
  return (
    <main className='container'>
      <Header />
      <Experience />
      <div className='infos'>
        <h3>Languages</h3>
        <div className='languages-info'>
          <span> 🇧🇷 PT-BR - Native Speaker</span>
          <span>ES - Advanced</span>
          <span> 🇺🇸 EN - Intermediate</span>
        </div>
        <h3>Education</h3>
        <div className='educational-info'>
          <span>🎓</span>
          <span>Full Stack Developer - Trybe</span>
          <span>UX Designer- Google/Coursera</span>
        </div>
      </div>
      <div className='buttons'>
        <div className='social'></div>
        <button>contact me</button>
      </div>
    </main>
  );
}
