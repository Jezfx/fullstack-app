import { TUser, TCat } from './comms.types';

/**
 * Normally for utils like this I'd be a bit more functional 😅
 * Smaller util functions composed together with pipe or flow (ramda / lodash)
 *
 * Also, sorry abot the lack of tests here, strugged for time.
 */

export const findUserById = (userId: string, data: TUser[]) =>
  data.find(({ id }: { id: string }) => id === userId);

export const getCatNames = (cats: TCat[]) => cats.map((cat: TCat) => cat.name);

export const formatList = (arr: string[]) => {
  if (arr.length === 0) return '';
  if (arr.length === 1) return arr[0];
  if (arr.length === 2) return `${arr[0]} and ${arr[1]}`;

  return `${arr.slice(0, -1).join(', ')} and ${arr[arr.length - 1]}`;
};

export const getTotalPriceByCats = (
  cats: TCat[],
  prices: Map<string, number>,
) =>
  cats.reduce((accum: number, curr: TCat) => {
    if (!curr.subscriptionActive) return accum;

    return accum + (prices.get(curr.pouchSize) ?? 0);
  }, 0);
