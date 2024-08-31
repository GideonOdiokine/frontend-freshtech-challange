"use client"
import { Button } from "@/./components/ui/button";
import { Sheet, SheetContent, SheetOverlay, SheetTrigger } from "@/components/ui/sheet";
import React from "react";
import Navigation from './navigations';


const MobileSidebar = () => {
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <Sheet>
            <SheetTrigger >
                <Button variant={"ghost"} size={"icon"} className="md:hidden">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 12H15M3 6H21M3 18H21" stroke="#969696" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Button>
            </SheetTrigger>
            <SheetOverlay className='!bg-[#001128cc] opacity-[0.5]' />
            <SheetContent side={"left"} className="p-0 ">
                <Navigation />
            </SheetContent>
        </Sheet>
    );
};

export default MobileSidebar;
