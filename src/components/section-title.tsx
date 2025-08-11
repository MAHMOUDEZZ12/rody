
'use client';

import { cn } from "@/lib/utils";

interface SectionTitleProps {
    title: string;
    className?: string;
}

export function SectionTitle({ title, className }: SectionTitleProps) {
    return (
        <div className="text-center mb-12">
            <h2 className={cn(
                "font-headline text-3xl md:text-4xl font-bold inline-block text-primary-foreground bg-primary py-2 px-8", 
                className
            )}>
                {title}
            </h2>
        </div>
    );
}
