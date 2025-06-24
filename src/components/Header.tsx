
type HeaderProps = {
  title: string;
  showBack?: boolean;
}

const Header = ({title, showBack}: HeaderProps) => (
  <div className="bg-blue-800 text-white px-4 py-3 text-lg font-bold">
    {showBack && <button>Back</button> }
    <h2>{title}</h2>
  </div>
);

export default Header;