import { Instagram, Twitter, Youtube, Github } from 'lucide-react';

const navigation = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/gael.ldo',
    icon: (props) => <Instagram {...props} />,
  },
  {
    name: 'Twitter',
    href: 'https://x.com/goune_',
    icon: (props) => <Twitter {...props} />,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/goune1',
    icon: (props) => <Github {...props} />,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UCUd1Gc7WNskw_bGysCl87Aw',
    icon: (props) => <Youtube {...props} />,
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
