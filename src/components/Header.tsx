'use client';
import { Users2 } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';

type HeaderProps = {
  view: 'chart' | 'grid';
  onViewChange: (view: 'chart' | 'grid') => void;
};

export default function Header({ view, onViewChange }: HeaderProps) {
  return (
    <header className="bg-card/80 backdrop-blur-sm border-b border-border shadow-sm sticky top-0 z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 text-primary p-2 rounded-lg">
            <Users2 className="h-6 w-6" />
          </div>
          <h1 className="text-2xl font-bold text-foreground tracking-tight">Team Members</h1>
        </div>
        <Button onClick={() => onViewChange(view === 'chart' ? 'grid' : 'chart')}>
          {view === 'chart' ? 'View Entire Team' : 'View hierarchy'}
        </Button>
      </div>
    </header>
  );
}
