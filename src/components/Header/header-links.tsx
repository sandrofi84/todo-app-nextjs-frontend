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
        label: "products",
        href: "/products",
        subLinks: [
            {
                label: "cars",
                href: "/products/cars",
                subLinks: []
            },
            {
                label: "saddles",
                href: "/products/saddles",
                subLinks: []
            },
            {
                label: "horses",
                href: "/products/horses",
                subLinks: []
            }
        ]
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