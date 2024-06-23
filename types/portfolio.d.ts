type Portfolio = {
  projects: Array<Project>;
  moreProjects: Array<OtherProject>;
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
  description: string;
  cover: {
    width: number;
    height: number;
  };
};

type OtherProject = Omit<Project, "cover">
