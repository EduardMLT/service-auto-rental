import { Link, NavBlock } from './Nav.styled';

export const Nav = () => {
  return (
    <nav>
      <NavBlock>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/catalog">Catalog</Link>
        </li>
        <li>
          <Link to="/favorite">Favorite</Link>
        </li>
      </NavBlock>
    </nav>
  );
};
