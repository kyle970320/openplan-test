/**
 * 화면크기 분할을 위한 mediaquery 함수
 * @returns "sm", "md", "lg", "xl", "2xl"
 */
export const matchMediaQuery = () => {
  if (window.matchMedia("(min-width: 1536px)").matches) {
    return "2xl";
  }
  if (window.matchMedia("(min-width: 1280px)").matches) {
    return "xl";
  }
  if (window.matchMedia("(min-width: 1024px)").matches) {
    return "lg";
  }
  if (window.matchMedia("(min-width: 768px)").matches) {
    return "md";
  }
  if (window.matchMedia("(min-width: 640px)").matches) {
    return "sm";
  }
  if (window.matchMedia("(min-width: 376px)").matches) {
    return "xs";
  }
};

/**
 * 현재 화면이 적용을 원하는 query 값보다 큰지 확인
 * @param query - 적용을 원하는 query 값
 * @param current - 현재 화면의 query 값
 */
export const findLargeMediaQuery = (query: string, current: string) => {
  const array = ["xs", "sm", "md", "lg", "xl", "2xl"];
  const queryIndex = array.findIndex((el) => el === query);
  const currentIndex = array.findIndex((el) => el === current);
  return currentIndex - queryIndex >= 0;
};
