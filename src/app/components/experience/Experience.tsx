import { SectionTitle } from '../sectionTitle/SectionTitle';
import './Experience.scss';

export function Experience() {
  return (
    <div className='experience'>
      <SectionTitle text='Experience' />
      <p>
        I have experience in an American startup, Emme.ly, where I was able to
        develop a lot as a person and professional, working with React, Redux,
        MUI, Storybook, Typescript, JS, Next and Jira.
      </p>
      <div className='experience-time'></div>
    </div>
  );
}
