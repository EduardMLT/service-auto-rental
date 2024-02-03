import { Link } from 'react-router-dom';

import { List, Item, TitleSpan } from './CatalogPageList.styled';

export const HomeList = ({ items, state }) => {
  return (
    <List>
      {items.map(({ id, make, model, img }) => {
        return (
          <Item key={id}>
            <Link to={`/catalog/${id}`} img={img}>
              <TitleSpan>
                {make} {model}
              </TitleSpan>
              <div>
                <img src={img} width="200" height="250" alt="car" />
              </div>
            </Link>
          </Item>
        );
      })}
    </List>
  );
};
