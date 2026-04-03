import React from 'react';
import type NavLinksProps from '~/base/types/NavLinksProps';
import { getHeaderNavLinkClass } from '~/utils/base/getHeaderNavLinkClass';

export default function NavLinks({ variant, currentPath, links }: NavLinksProps) {
    const navItems = [
        { href: '/quantum-key-distribution', label: links.qkdIntro },
        { href: '/hybridize-key-service', label: links.hybrid },
        { href: '/related-works', label: links.relatedWorks },
        { href: '/contact', label: links.contact },
    ];

    return (
        <>
            {navItems.map(({ href, label }) => (
                <a
                    key={href}
                    className={getHeaderNavLinkClass(currentPath, href, variant)}
                    href={href}
                >
                    {label}
                </a>
            ))}
        </>
    );
}
