export const useUtils = () => {
  const getRandomNum = (maxNum: number) => Math.floor(Math.random() * maxNum + 1);

  return {
    getRandomNum
  }
};
