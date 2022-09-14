import "./App.css";
import logo from "./img/sub_logo.png";
import user from "./img/user.png";
import logout from "./img/logout.png";
import { useState } from "react";
import {
  LaptopOutlined,
  BarChartOutlined,
  SearchOutlined,
  FileOutlined,
  BellOutlined,
  AlignCenterOutlined,
  WarningOutlined,
} from "@ant-design/icons";

function App() {
  const [click, setClick] = useState("monitoring");

  const handleOnClick = (e) => {
    const val = e.target.value;
    if (val === "monitoring") {
      setClick("monitoring");
    } else if (val === "cyber") {
      setClick("cyber");
    } else setClick("service");
  };

  return (
    <div className="App">
      <div className="header">
        <div className="logo">
          <img src={logo} width="150px" />
        </div>
        <div className="header_wrap">
          <div className="user">
            <p>테스트님</p>
            <img src={user} width="22px" height="22px" />
            <img src={logout} width="22px" height="22px" />
          </div>
          <div className="menu">
            <button
              value="monitoring"
              onClick={handleOnClick}
              className={click === "monitoring" ? "menuClickbtn" : "menubtn"}
            >
              모니터링
            </button>
            <button value="cyber" onClick={handleOnClick} className={click === "cyber" ? "menuClickbtn" : "menubtn"}>
              사이버 위협
            </button>
            <button
              value="service"
              onClick={handleOnClick}
              className={click === "service" ? "menuClickbtn" : "menubtn"}
            >
              서비스 장애 탐지
            </button>
          </div>
        </div>
      </div>
      <div className="contents">
        <div className="sidebar"></div>
        {click === "service" ? (
          <div className="submenu">
            <button>
              <LaptopOutlined
                style={{
                  color: "#071f5d",
                  fontSize: "22px",
                  marginRight: "5px",
                }}
              />
              데이터 조회
            </button>
            <button>
              <BarChartOutlined
                style={{
                  color: "#071f5d",
                  fontSize: "22px",
                  marginRight: "7px",
                }}
              />
              통계
            </button>
            <button>
              <SearchOutlined
                style={{
                  color: "#071f5d",
                  fontSize: "22px",
                  marginRight: "7px",
                }}
              />
              수집 채널 관리
            </button>
            <button>
              <FileOutlined
                style={{
                  color: "#071f5d",
                  fontSize: "22px",
                  marginRight: "7px",
                }}
              />
              키워드 관리
            </button>
            <button>
              <BellOutlined
                style={{
                  color: "#071f5d",
                  fontSize: "22px",
                  marginRight: "7px",
                }}
              />
              알람 관리
            </button>
            <button>
              <AlignCenterOutlined
                style={{
                  color: "#071f5d",
                  fontSize: "22px",
                  marginRight: "7px",
                }}
              />
              발송 이력 관리
            </button>
          </div>
        ) : null}
        {click === "cyber" ? (
          <div className="submenu">
            <button>
              <LaptopOutlined
                style={{
                  color: "#071f5d",
                  fontSize: "22px",
                  marginRight: "5px",
                }}
              />
              모니터링
            </button>
            <button>
              <FileOutlined
                style={{
                  color: "#071f5d",
                  fontSize: "22px",
                  marginRight: "7px",
                }}
              />
              키워드검색
            </button>
            <button>
              <AlignCenterOutlined
                style={{
                  color: "#071f5d",
                  fontSize: "22px",
                  marginRight: "7px",
                }}
              />
              이슈대응이력
            </button>
            <button>
              <BellOutlined
                style={{
                  color: "#071f5d",
                  fontSize: "22px",
                  marginRight: "7px",
                }}
              />
              알람설정
            </button>
            <button>
              <SearchOutlined
                style={{
                  color: "#071f5d",
                  fontSize: "22px",
                  marginRight: "7px",
                }}
              />
              심층분석
            </button>
            <button>
              <BarChartOutlined
                style={{
                  color: "#071f5d",
                  fontSize: "22px",
                  marginRight: "7px",
                }}
              />
              통계
            </button>
            <button>
              <WarningOutlined
                style={{
                  color: "#071f5d",
                  fontSize: "22px",
                  marginRight: "7px",
                }}
              />
              취약점/웜바이러스평가
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
