import { nanoid } from 'nanoid'

export const uuid = nanoid

export const sleep = (time = 10, fn?: ()=> void) => {
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      fn && typeof fn === 'function' && fn();
      resolve(true);
    }, time);
  });
};

export const isDev = import.meta.env.MODE === 'development'