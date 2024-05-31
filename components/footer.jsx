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

export default function Example() {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; Made with ❤️ by Goune.
          </p>
        </div>
      </div>
    </footer>
  )
}
