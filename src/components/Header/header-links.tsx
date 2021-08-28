export interface HeaderLink {
    label: string,
    href: string,
    subLinks: HeaderLink[]
}

export interface HeaderLinkProps {
    label: string,
    href: string | null,
    isDropdown: boolean,
    darkText: boolean
}

export function makeProps(link: HeaderLink): HeaderLinkProps {
    return {
        label: link.label,
        href: link.href ? link.href : null,
        isDropdown: link.subLinks.length > 0,
        darkText: false
    }
}

export const links: HeaderLink[] = [
    {
        label: "home",
        href: "/",
        subLinks: []
    },
    {
        label: "my todos",
        href: "/mytodos",
        subLinks: []
    },
    {
        label: "about",
        href: "/about",
        subLinks: []
    },
    {
        label: "contact",
        href: "/contact",
        subLinks: []
    },
]