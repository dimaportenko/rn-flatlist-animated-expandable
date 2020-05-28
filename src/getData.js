/**
 * @flow
 * Created by Dima Portenko on 28.05.2020
 */

import faker from 'faker';

export type ListItem = {
  title: string,
  details: string,
  image: string,
}

export const getData = (amount: number = 20): Array<ListItem>  => {
  const result = [];
  for (let i = 0; i < amount; ++i) {
    result.push({
      title: faker.commerce.productName(),
      subtitle: faker.commerce.department(),
      details: faker.lorem.paragraphs(2, '\n\n'),
      image: `https://i.picsum.photos/id/${Math.floor((Math.random() * 1000) + 1)}/50/50.jpg`,
    })
  }

  return result;
}
