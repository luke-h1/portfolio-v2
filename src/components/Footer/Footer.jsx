import React from 'react';
import { SiGithub } from 'react-icons/si';
import { AiOutlineMail } from 'react-icons/ai';
import { ImLinkedin2 } from 'react-icons/im';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
} from './FooterElements';
import { CodeIcon } from '../utils/Icons/CodeIcon';

const Footer = () => (
  <FooterContainer>
    <FooterWrap>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <CodeIcon />
          </SocialLogo>
          <SocialIcons>
            <SocialIconLink
              href="https://github.com/luke-h1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.linkedin.com/in/lukehowsam/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImLinkedin2 />
            </SocialIconLink>
            <SocialIconLink
              href="mailto:luke.howsam@yahoo.com?subject=Get In Touch"
              aria-label="Email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineMail />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterWrap>
  </FooterContainer>
);
export default Footer;
