import { useContext } from "react"; // 리액트 훅 중 useContext를 가져옵니다.
import { MyContext } from "../App"; // 상위 컴포넌트인 App에서 생성한 MyContext를 가져옵니다.

function Sidebar() {
    const value = useContext(MyContext); // MyContext로부터 전역 데이터를 가져옵니다.

    return (
        <div>
            <h6> {value} </h6> {/* MyContext에서 가져온 데이터를 출력합니다. */}
            Sidebar {/* 사이드바 컴포넌트입니다. */}
        </div>
    );
}

export default Sidebar; // Sidebar 컴포넌트를 내보냅니다.
