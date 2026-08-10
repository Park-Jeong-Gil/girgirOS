// website 폴더의 썸네일 이미지를 한번에 불러온다.
// 파일명(확장자 제외)이 프로젝트 ID 와 같으면 자동으로 연결되므로,
// 프로젝트를 추가할 땐 "{프로젝트 ID}.jpg" 파일만 넣어주면 된다.
const thumbnailModules = import.meta.glob<string>(
  "../assets/images/website/*.jpg",
  { eager: true, import: "default" }
);

const thumbnails = Object.entries(thumbnailModules).reduce(
  (acc, [path, url]) => {
    const fileName = path.split("/").pop()?.replace(/\.jpg$/, "");
    if (fileName) acc[fileName] = url;
    return acc;
  },
  {} as Record<string, string>
);

// 프로젝트 ID 에 해당하는 썸네일 경로. 이미지가 없으면 undefined
export const getWebsiteThumbnail = (projectID: string | null) =>
  projectID ? thumbnails[projectID] : undefined;
