import Link, { LinkProps } from './Link';

type NavLinkProps = LinkProps & {
  active?: boolean;
};

const NavLink = ({ active, ...props }: NavLinkProps) => {
  return (
    <Link
      sx={(theme) => ({
        color: active ? theme.colors.blue[2] : theme.black,
        '&:not(:last-of-type):after': {
          pointerEvents: 'none',
          content: '"/"',
          position: 'relative',
          color: theme.black,
          right: '-5px',
        },
      })}
      {...props}
    />
  );
};

export default NavLink;
