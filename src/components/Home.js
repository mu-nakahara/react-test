import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const onClickPage1 = () => {
    navigate("/Page1");
  };

  const onClickPage2 = () => {
    navigate("/Page2");
  };

  return (    
    <div className="Home">
      <h1>Home Page</h1>
      <button onClick={onClickPage1}>Page1</button>
      <p></p>
      <button onClick={onClickPage2}>Page2</button>
      <p></p>
    </div>
  );
};

export default Home;