import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Heading } from '@components/heading';
import { Social } from '@components/social';
import { Paragraph } from '@components/paragraph';
import profile from '@assets/profile.jpeg';

import './about.pages.scss';
import { Caption } from '@components/caption';

export default function About() {
  return (
    <main className="about">
      <div className="img-container">
        <img src={profile} alt="" className="img-container__img" />
      </div>
      <Heading className="about__name">Jean Vittory Laguna</Heading>
      <Social link="https://github.com/JeanVittory" Icon={AiFillGithub}>
        Github
      </Social>
      <Social
        link="https://www.linkedin.com/in/carlovittory/"
        Icon={AiFillLinkedin}
      >
        Linkedin
      </Social>
      <Paragraph className="about__paragraph">
        Hello! I'm a Full Stack developer with MERN stack which through critical
        thinking, passion about clean code and build ideas with people go
        through the world finding a spot where contribute a good idea.
      </Paragraph>
      <div className="learned">
        <Caption className="learned__title">
          ¿What I've had learn in{' '}
          <a href="https://makeitreal.camp/" target="_blank">
            Make it Real
          </a>
          ?
        </Caption>
        <ul className="learned__ul">
          <li className="learned__li">
            Allowed me implement and improve my frontend knowledge through a
            real project
          </li>
          <li className="learned__li">
            I've met people who like to write code and I've been able to share
            with them and learn from their experiences
          </li>
          <li className="learned__li">
            Be able to planify and estimate a project in his differents stages
          </li>
        </ul>
      </div>
    </main>
  );
}
