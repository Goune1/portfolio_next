"use client"

import { Twitter, Youtube, Github, LucideProps } from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon: (props: LucideProps) => JSX.Element;
}

const navigation: NavigationItem[] = [
  {
    name: 'Twitter',
    href: 'https://x.com/goune_',
    icon: (props: LucideProps) => <Twitter {...props} />,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/goune1',
    icon: (props: LucideProps) => <Github {...props} />,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UCUd1Gc7WNskw_bGysCl87Aw',
    icon: (props: LucideProps) => <Youtube {...props} />,
  },
];

export default function Socials() {
  return (
    <div className="flex gap-x-4">
      {navigation.map((item) => (
        <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
          <span className="sr-only">{item.name}</span>
          <item.icon className="h-6 w-6" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
