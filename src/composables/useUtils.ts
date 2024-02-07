export const useUtils = () => {
  const getRandomNum = (maxNum: number, addNum: number = 0) => Math.floor(Math.random() * maxNum + addNum);

  return {
    getRandomNum
  }
};
