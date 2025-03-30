import {useNavigate} from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();
  return (
      <div>
          <h1>My visuals</h1>
          <menu style={{display: "flex", flexDirection: 'column'}}>
          <a onClick={() => navigate('/first')}>First</a>
          <a onClick={() => navigate('/first-loading')}>First Loading</a>
          <a onClick={() => navigate('/first-colors')}>First Colors</a>
          </menu>
      </div>
  )
}