import logoUrl from '../assets/hoop-logo.png';
import avatarUrl from '../assets/avatar-web.jpg';

const Header = () => {
  return (
    <header className="h-16 flex items-center justify-between px-4 py-4 bg-black text-white">
        <img className="h-full w-auto" src={logoUrl} alt="Hoop Logo" />
        <img
          src={avatarUrl}
          alt="User Avatar"
          className="h-full w-auto rounded-full"
        />
    </header>
  );
};

export default Header;