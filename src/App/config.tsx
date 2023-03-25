import React from 'react';
import { Config } from 'types';
import { Email, GitHub, LinkedIn } from 'icons';
import Twitter from "../icons/Twitter";

const config: Config = {
  name: {
    display: 'Hridyansh Sahu',
    aria: 'My name is Hridyansh Sahu',
  },
  title: {
    display: 'Backend Software Developer',
    aria: 'I am a Backend Software Developer',
  },
  buttons: [
    {
      display: 'LinkedIn',
      aria: 'Visit my LinkedIn profile',
      icon: <LinkedIn />,
      href: 'https://www.linkedin.com/in/hridyansh-sahu-386660146/',
    },
    {
      display: 'Twitter',
      aria: 'Visit my Twitter profile',
      icon: <Twitter />,
      href: 'https://www.linkedin.com/in/hridyansh-sahu-386660146/',
    },
    {
      display: 'GitHub',
      aria: 'Visit my GitHub profile',
      icon: <GitHub />,
      href: 'https://github.com/hridyansh68',
    },
    {
      display: 'Email',
      aria: 'Send me an email',
      icon: <Email />,
      href: 'mailto:hridyanshsahu68@gmail.com',
    },
  ],
};

export default config;
