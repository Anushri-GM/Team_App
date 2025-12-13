'use client';
import { Users2 } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isChartPage = pathname === '/';

  return (
    <header className="bg-card/80 backdrop-blur-sm border-b border-border shadow-sm sticky top-0 z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 text-primary p-2 rounded-lg">
            <Users2 className="h-6 w-6" />
          </div>
          <h1 className="text-2xl font-bold text-foreground tracking-tight">Team Members</h1>
        </div>
        <Button asChild>
          <Link href={isChartPage ? "/team" : "/"}>
            {isChartPage ? 'View Entire Team' : 'View hierarchy'}
          </Link>
        </Button>
      </div>
    </header>
  );
}
