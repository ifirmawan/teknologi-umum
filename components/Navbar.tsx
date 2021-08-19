import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 h-16 backdrop-blur-sm">
      <div className="flex items-center h-full max-w-screen-lg px-4 mx-auto">
        <Link href="/">
          <a className="flex-1 text-lg font-bold">Teknologi Umum</a>
        </Link>
        <div className="flex gap-4">
          {['home', 'blogs', 'news', 'about'].map((route, idx) => (
            <Link href={`/${route === 'home' ? '' : route}`} key={`${idx}-${route}`}>
              <a className="flex-1 text-lg text-gray-700 capitalize hover:text-blue-600 hover:underline">{route}</a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
