import {Button} from "antd";
import {useNavigate} from "react-router-dom";

const MarkupList = () => {
    const navigate = useNavigate();
    
    return (
        <>
            <h1>마크업리스트</h1>
            <Button onClick={() => navigate("/home")}>홈 이동</Button>
        </>
    )
}

export default MarkupList;