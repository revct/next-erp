import { useRouter } from "next/dist/client/router";
import Link, { LinkProps } from "next/link";

import React, { forwardRef } from "react";

interface IProps extends React.PropsWithChildren<LinkProps> {
  className?: string;
  activeClassName?: string;
}

function joinClassnames(...classnames: any) {
  return classnames.filter((i: unknown) => i).join(" ");
}

const NavLink = React.forwardRef((props: IProps) => {
  const { asPath } = useRouter();
  return (
    <Link {...props} passHref>
      <a className={joinClassnames(props.className, props.activeClassName)}>
        {props.children}
      </a>
    </Link>
  );
});

NavLink.displayName = "NavLink";

export default NavLink;
