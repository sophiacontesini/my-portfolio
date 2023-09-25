import { SectionTitle } from '../sectionTitle/SectionTitle';
import './Information.scss';

export function Information() {
  return (
    <div className='infos'>
      <SectionTitle text='Languages' />
      <div className='languages-info'>
        <span> 🇧🇷 PT-BR - Native Speaker</span>
        {/* <span> 🇺🇸 ES - Advanced</span> */}
        <span> 🇺🇸 EN - Intermediary</span>
      </div>
      <SectionTitle text='Education' />
      <div className='educational-info'>
        <span>🎓 </span>
        <span>
          Full Stack Developer - Trybe and UX Designer - Google/Coursera
        </span>
      </div>
    </div>
  );
}
