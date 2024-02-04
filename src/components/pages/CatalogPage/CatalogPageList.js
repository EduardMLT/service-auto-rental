import React from 'react';

import { List, Item, TitleSpan } from './CatalogPageList.styled';

export const HomeList = ({ items, openModal }) => {
  return (
    <List>
      
      {items.map(({ id, make, model, img }, index) => {
        // console.log({  make, model});
        return (
          <Item key={id}>
            <div onClick={() => openModal(index)}>
              <TitleSpan>
                {make} {model}
              </TitleSpan>
              <div>
                <img src={img} width="200" height="250" alt="car" />
              </div>
              <TitleSpan>
                {make} {model}
              </TitleSpan>
            </div>
          </Item>
        );
      })}
    </List>
  );
};
