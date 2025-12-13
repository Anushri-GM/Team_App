import { Users2 } from 'lucide-react';
import React from 'react';

export default function Header() {
  return (
    <header className="bg-card border-b border-border shadow-sm sticky top-0 z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
        <div className="bg-primary/10 text-primary p-2 rounded-lg">
          <Users2 className="h-6 w-6" />
        </div>
        <h1 className="text-2xl font-bold text-foreground tracking-tight">Org Chart Pro</h1>
      </div>
    </header>
  );
}
