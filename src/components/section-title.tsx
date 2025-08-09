
'use client';

import { cn } from "@/lib/utils";

interface SectionTitleProps {
    title: string;
    className?: string;
}

export function SectionTitle({ title, className }: SectionTitleProps) {
    return (
        <div className={cn("bg-primary py-3 px-6", className)}>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-primary-foreground">
                {title}
            </h2>
        </div>
    );
}
