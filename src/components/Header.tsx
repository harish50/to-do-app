import {useNavigate} from "react-router";

type HeaderProps = {
  title: string;
  showBack?: boolean;
}

const Header = ({title, showBack}: HeaderProps) => {
  const navigate = useNavigate();

  const handleBack = ()=>{
    navigate("/")
  }
  return (
    <div className="bg-blue-800 text-white px-4 py-3 text-lg font-bold">
      {showBack && <button onClick={handleBack}>Back</button>}
      <h2>{title}</h2>
    </div>
  )
};

export default Header;