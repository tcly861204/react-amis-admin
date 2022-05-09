/**
 * 休眠
 * @param time
 */
export const sleep = (time = 10) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

/**
 * 数组转树
 * @param list
 */
export const listToTree = (list) => {
  const result = [];
  const map = new Map();

  list.forEach((item) => {
    map[item.value] = item;
  });

  list.forEach((item) => {
    if (item.parentId !== null) {
      map[item.parentId]['children']
        ? map[item.parentId]['children'].push(item)
        : (map[item.parentId]['children'] = [item]);
    } else {
      result.push(item as never);
    }
  });

  return result;
};
