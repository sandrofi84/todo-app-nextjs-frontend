export interface HeaderLink {
  label: string;
  href: string;
  onlyLoggedIn?: boolean;
  subLinks: HeaderLink[];
}

export interface HeaderLinkProps {
  label: string;
  href: string | null;
  isDropdown: boolean;
  darkText: boolean;
}

export function makeProps(link: HeaderLink): HeaderLinkProps {
  return {
    label: link.label,
    href: link.href ? link.href : null,
    isDropdown: link.subLinks.length > 0,
    darkText: false
  };
}

export const links: HeaderLink[] = [
  {
    label: "todos",
    href: "/todos",
    onlyLoggedIn: true,
    subLinks: []
  }
];
