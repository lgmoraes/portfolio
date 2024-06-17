type Portfolio = {
  projects: Array<Project>;
  moreProjects: Array<Project>;
  social: {
    linkedin: string;
    npm: string;
    github: string;
  };
};

type Project = {
  name: string;
  id: string;
  link: string;
  icon: string;
  descritpion: string;
};
