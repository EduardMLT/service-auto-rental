import React from 'react';
import { Link } from 'react-router-dom';

import { List, Item, TitleSpan } from './CatalogPageList.styled';

export const HomeList = ({ items }) => {
  return (
    <List>
      {items.map(({ id, make, model, img }) => (
        <Item key={id}>
          <Link to={`/catalog/${id}`} state={{ img }}>
            <TitleSpan>
              {make} {model}
            </TitleSpan>
            <div>
              <img src={img} width="200" height="250" alt="car" />
            </div>
            <TitleSpan>
              {make} {model}
            </TitleSpan>
          </Link>
        </Item>
      ))}
    </List>
  );
};
