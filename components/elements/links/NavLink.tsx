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
          content: '"/"',
        },
      })}
      {...props}
    />
  );
};

export default NavLink;
