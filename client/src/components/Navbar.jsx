import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { Badge } from './Badge';

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center font-black text-white shadow-lg shadow-indigo-500/30">
            IJ
          </div>
          <div>
            <h1 className="text-lg font-bold text-white tracking-tight">Indo-Japan</h1>
            <p className="text-xs text-slate-400">MERN Stack Application</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Badge variant="indigo" icon={Sparkles}>
            Tailwind CSS v4
          </Badge>
          <Badge variant="success" icon={CheckCircle2}>
            Setup Ready
          </Badge>
        </div>
      </div>
    </header>
  );
};
