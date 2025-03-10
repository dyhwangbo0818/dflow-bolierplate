import {Button} from "antd";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
          <h1>홈</h1>
            <Button onClick={() => navigate("/")}>마크업 이동</Button>
        </>
    )
}

export default Home;