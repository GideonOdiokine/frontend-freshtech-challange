'use client';

// this works in pages directory as well
import { usePathname } from 'next/navigation';


export const useActiveLink = (href: string): boolean => {
    const pathname = usePathname();


    const isActive: boolean =
        pathname === '/' && href === '/'
            ? true
            : pathname.includes(href) && href !== '/'
                ? true
                : false;
    return isActive;
};


