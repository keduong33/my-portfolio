import { getCollection } from "astro:content";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function dateRange(startDate: Date, endDate?: Date | string): string {
  const startMonth = startDate.toLocaleString("default", { month: "short" });
  const startYear = startDate.getFullYear().toString();
  let endMonth;
  let endYear;

  if (endDate) {
    if (typeof endDate === "string") {
      endMonth = "";
      endYear = endDate;
    } else {
      endMonth = endDate.toLocaleString("default", { month: "short" });
      endYear = endDate.getFullYear().toString();
    }
  }

  return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
}

export function shortenUrl(url: string): string {
  return url.replace(/^https?\:\/\//i, "");
}

export async function getSideProjects() {
  const projectsCollection = await getCollection("projects");
  const projects = projectsCollection.map((projects) => projects.data);

  /** Consider if I want to fetch live data from github
   * - free tier has 60 requests limit per hour
   * - maybe do it when I have more projects and cannot keep track of it
   * */
  // const projects = await Promise.all(
  //   projectsCollection.map(async (project) => {
  //     try {
  //       const repoInfo: { updated_at: string; status: string } = await (
  //         await fetch(`${GITHUB.apiUrl}/${project.data.repoSlug}`)
  //       ).json();
  //       if (!repoInfo.updated_at) throw new Error("No updated_at");
  //       return { ...project.data, lastUpdated: new Date(repoInfo.updated_at) };
  //     } catch (e) {
  //       console.error(e);
  //       return { ...project.data };
  //     }
  //   })
  // );

  return projects;
}
