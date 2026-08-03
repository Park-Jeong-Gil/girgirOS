import type { Career } from "../constants/careerData";

// "YYYY.MM" 을 개월 수로 변환
const toMonthIndex = (yearMonth: string) => {
  const [year, month] = yearMonth.split(".").map((value) => Number(value));
  return year * 12 + (month - 1);
};

// 재직 개월 수. 시작월과 종료월을 모두 포함해서 계산 (원티드 방식)
export const getCareerMonths = (career: Career, now = new Date()) => {
  const start = toMonthIndex(career.START);
  const end = career.END
    ? toMonthIndex(career.END)
    : now.getFullYear() * 12 + now.getMonth();

  return Math.max(end - start + 1, 0);
};

// 전체 경력을 합산해서 년/개월로 반환
export const getTotalCareer = (careerList: Career[], now = new Date()) => {
  const totalMonths = careerList.reduce(
    (sum, career) => sum + getCareerMonths(career, now),
    0
  );

  return {
    totalMonths,
    years: Math.floor(totalMonths / 12),
    months: totalMonths % 12,
  };
};

// "총 경력 8년 6개월" 형태의 문구 생성
export const getTotalCareerText = (careerList: Career[], now = new Date()) => {
  const { years, months } = getTotalCareer(careerList, now);

  if (!years) return `${months}개월`;
  if (!months) return `${years}년`;

  return `${years}년 ${months}개월`;
};

// "2025. 09 ~ 2025. 12" 형태의 기간 문구 생성
export const getCareerPeriodText = (career: Career) => {
  const format = (yearMonth: string) => yearMonth.replace(".", ". ");

  return `${format(career.START)} ~ ${
    career.END ? format(career.END) : "현재"
  }`;
};
