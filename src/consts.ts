export const SITE = {
  NAME: "Ke Duong",
};

export type PageInfo = {
  title: string;
  description: string;
  url: string;
};

export const HOME: PageInfo = {
  title: "Home",
  description: "Homepage",
  url: "/",
};

export const BLOGS: PageInfo = {
  title: "Blogs",
  description: "Blogs",
  url: "/blogs",
};

export const BLOG = (
  title: string,
  description: string,
  slug: string
): PageInfo => ({
  title,
  description,
  url: createBlogUrl(slug),
});

export const createBlogUrl = (slug: string) => `${BLOGS.url}/${slug}`;

export const WORK_EXPERIENCE: PageInfo = {
  title: "Work Experience",
  description: "Ke's Work experience",
  url: "/work-experience",
};

export const SIDE_PROJECTS: PageInfo = {
  title: "Side Projects",
  description: "Ke's fun side projects",
  url: "/side-projects",
};

export const GITHUB = {
  repoUrl: "https://github.com/keduong33",
  apiUrl: "https://api.github.com/repos/keduong33",
};
