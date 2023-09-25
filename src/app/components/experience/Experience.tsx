import { SectionTitle } from '../sectionTitle/SectionTitle';
import './Experience.scss';
import { Skill } from '../skill/Skill';

export function Experience() {
  return (
    <div className='experience'>
      <SectionTitle text='Experience' />
      <p>
        I have experience in an American startup, Emme.ly, where I was able to
        develop a lot as a person and professional, working with React, Redux,
        MUI, Storybook, Typescript, JS, Next and Jira.
      </p>
      <div className='experience-time'>
        <Skill image='/react.png' measure={2} years='2 years' />
        <Skill image='/ts.png' measure={2} years='2 years' />
        <Skill image='/js.png' measure={3} years='3 years' />
        <Skill image='/html-5.png' measure={3} years='3 year' />
        {/* <Skill image='/css-3.png' measure={3} years='3 years' /> */}
      </div>
    </div>
  );
}
