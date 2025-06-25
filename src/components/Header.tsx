import {useNavigate} from "react-router";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
    <div className="bg-blue-800 text-white px-5 py-4 text-lg font-bold flex gap-4">
      {showBack &&
        <button onClick={handleBack}>
          <FontAwesomeIcon size="lg" icon={faArrowLeft}/>
        </button>
      }
      <h2>{title}</h2>
    </div>
  )
};

export default Header;