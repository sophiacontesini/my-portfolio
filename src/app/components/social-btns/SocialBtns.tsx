import { GitHubIcon } from '../icons/github-icon';
import { InstaIcon } from '../icons/insta-icon';
import { LinkedInIcon } from '../icons/linkedin-icon';
import { TwitterIcon } from '../icons/twitter-icon';

import './SocialBtns.scss';

export function SocialBtns() {
  return (
    <div className='social'>
      <a href='https://www.instagram.com/sophiacontesini/'>
        <InstaIcon />
      </a>
      <a href='https://www.linkedin.com/in/sophia-contesini/'>
        <LinkedInIcon />
      </a>
      <a href='https://github.com/sophiacontesini'>
        <GitHubIcon />
      </a>
      <a href=''>
        <TwitterIcon />
      </a>
    </div>
  );
}
