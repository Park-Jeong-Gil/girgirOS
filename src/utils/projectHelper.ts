import { projects } from "../constants/projectData";
import type { Project } from "../constants/projectData";

// 진행중인지 여부. END 가 null 이면 아직 진행중인 프로젝트
export const isOngoingProject = (project: Project) => project.END === null;

// 목록의 Date 칸에 노출할 문구
export const getProjectDateText = (project: Project) =>
  isOngoingProject(project) ? "진행중" : project.DATE;

// 정렬 기준이 되는 종료 시점.
// 진행중이면 항상 최상단, END 가 없으면 시작 시점을 종료 시점으로 본다
const getEndKey = (project: Project) => {
  if (isOngoingProject(project)) return "9999.99";
  return project.END ?? project.DATE;
};

// 진행중 > 최근에 끝난 순 > 최근에 시작한 순
export const sortedProjects = Object.values(projects).sort((a, b) => {
  const endDiff = getEndKey(b).localeCompare(getEndKey(a));
  return endDiff !== 0 ? endDiff : b.DATE.localeCompare(a.DATE);
});
