import { useState, useEffect, useRef } from "react";
import TopMenu from "../toolBar/TopMenu";
import { posters, logos, artworks } from "../../constants/design";
import defualtImage from "../../assets/images/design/defualt.png";

interface DesignProps {}

function Design({}: DesignProps) {
  const [activeTab, setActiveTab] = useState("Poster");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setActiveButton(null);
    // setSelectedImage(null);
  };

  const handleImageClick = (imageSrc: string, buttonId: string) => {
    setSelectedImage(imageSrc);
    setActiveButton(buttonId); // 클릭된 버튼의 ID를 activeButton 상태에 저장
    // Canvas 초기화
    if (canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        context.clearRect(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
      }
    }
  };

  const renderImageList = (images: { src: string; id: string }[]) =>
    images.map((image) => (
      <li key={image.id}>
        <button
          className={activeButton === image.id ? "active" : ""}
          onClick={() => handleImageClick(image.src, image.id)}
        >
          <img src={image.src} alt={image.id} />
        </button>
      </li>
    ));

  // Canvas 초기화 함수
  const initializeCanvas = (imgElement: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = imgElement.width;
    canvas.height = imgElement.height;

    const context = canvas.getContext("2d");
    if (!context) return;

    context.drawImage(imgElement, 0, 0);
    context.strokeStyle = "black";
    context.lineWidth = 1;
    context.lineCap = "round";
    contextRef.current = context;
  };

  // 이미지 로드 시 Canvas 초기화
  useEffect(() => {
    if (imageRef.current && imageRef.current.complete) {
      initializeCanvas(imageRef.current);
    }
  }, [selectedImage]);

  // 마우스 이벤트 핸들러
  const startDrawing = (e: React.MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas || !contextRef.current) return;

    const rect = canvas.getBoundingClientRect();
    contextRef.current.beginPath();
    contextRef.current.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent) => {
    if (!isDrawing || !contextRef.current || !canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    contextRef.current.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    contextRef.current.stroke();
  };

  const stopDrawing = () => {
    if (!contextRef.current) return;
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  return (
    <>
      <TopMenu />
      <div className="designContainer">
        <div className="editorWrap">
          <div className="side">
            <ul className="tools">
              <li>
                <button className="toolBtn" title="자유형 선택"></button>
              </li>
              <li>
                <button className="toolBtn" title="선택"></button>
              </li>
              <li>
                <button className="toolBtn" title="지우개/색 지우개"></button>
              </li>
              <li>
                <button className="toolBtn" title="색 칠하기"></button>
              </li>
              <li>
                <button className="toolBtn" title="색 골라내기"></button>
              </li>
              <li>
                <button className="toolBtn" title="돋보기"></button>
              </li>
              <li>
                <button className="toolBtn active" title="연필"></button>
              </li>
              <li>
                <button className="toolBtn" title="붓"></button>
              </li>
              <li>
                <button className="toolBtn" title="에어브러쉬"></button>
              </li>
              <li>
                <button className="toolBtn" title="텍스트"></button>
              </li>
              <li>
                <button className="toolBtn" title="선"></button>
              </li>
              <li>
                <button className="toolBtn" title="곡선"></button>
              </li>
              <li>
                <button className="toolBtn" title="직사각형"></button>
              </li>
              <li>
                <button className="toolBtn" title="다각형"></button>
              </li>
              <li>
                <button className="toolBtn" title="타원"></button>
              </li>
              <li>
                <button className="toolBtn" title="둥근 직사각형"></button>
              </li>
            </ul>
            <p className="optionBox"></p>
          </div>
          <div className="drawField">
            <img
              ref={imageRef}
              src={selectedImage || defualtImage}
              alt="Selected"
              onLoad={(e) => initializeCanvas(e.target as HTMLImageElement)}
              style={{ display: "none" }}
            />
            <canvas
              ref={canvasRef}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
            />
          </div>
        </div>
        <div className="selectWrap">
          <div className="tab">
            <button
              className={activeTab === "Poster" ? "active" : ""}
              onClick={() => handleTabClick("Poster")}
            >
              Poster
            </button>
            <button
              className={activeTab === "Logo" ? "active" : ""}
              onClick={() => handleTabClick("Logo")}
            >
              Logo
            </button>
            <button
              className={activeTab === "Artwork" ? "active" : ""}
              onClick={() => handleTabClick("Artwork")}
            >
              Artwork
            </button>
          </div>
          <div className="list">
            {/* Poster */}
            <ul
              data-list="Poster"
              style={{ display: activeTab === "Poster" ? "flex" : "none" }}
            >
              {renderImageList(posters)}
            </ul>
            {/* Logo */}
            <ul
              data-list="Logo"
              style={{ display: activeTab === "Logo" ? "flex" : "none" }}
            >
              {renderImageList(logos)}
            </ul>
            {/* Artwork */}
            <ul
              data-list="Artwork"
              style={{ display: activeTab === "Artwork" ? "flex" : "none" }}
            >
              {renderImageList(artworks)}
            </ul>
          </div>
        </div>
        <div className="footerWrap">
          <div className="pallete">
            <p className="selectColor">
              <span className="colorBox" data-color="rgb(255,255,255)"></span>
              <span className="colorBox" data-color="rgb(0,0,0)"></span>
            </p>
            <ul>
              <li>
                <span className="colorBox" data-color="rgb(0,0,0)"></span>
              </li>
              <li>
                <span className="colorBox" data-color="rgb(128,128,128)"></span>
              </li>
              <li>
                <span className="colorBox" data-color="rgb(128,0,0)"></span>
              </li>
              <li>
                <span className="colorBox" data-color="rgb(128,128,0)"></span>
              </li>
              <li>
                <span className="colorBox" data-color="rgb(0,128,0)"></span>
              </li>
              <li>
                <span className="colorBox" data-color="rgb(0,128,128)"></span>
              </li>
              <li>
                <span className="colorBox" data-color="rgb(0,0,128)"></span>
              </li>
              <li>
                <span className="colorBox" data-color="rgb(128,0,128)"></span>
              </li>
              <li>
                <span className="colorBox" data-color="rgb(128,128,64)"></span>
              </li>
              <li>
                <span className="colorBox" data-color="rgb(0,64,64)"></span>
              </li>
              <li>
                <span className="colorBox" data-color="rgb(0,128,255)"></span>
              </li>
              <li>
                <span className="colorBox" data-color="rgb(0,64,128)"></span>
              </li>
              <li>
                <span className="colorBox" data-color="rgb(64,0,255)"></span>
              </li>
              <li>
                <span className="colorBox" data-color="rgb(128,64,0)"></span>
              </li>
              <li>
                <span className="colorBox" data-color="rgb(255,255,255)"></span>
              </li>
              <li>
                <span className="colorBox" data-color="rgb(192,192,192)"></span>
              </li>
              <li>
                <span className="colorBox" data-color="rgb(255,0,0)"></span>
              </li>
              <li>
                <span className="colorBox" data-color="rgb(255,255,0)"></span>
              </li>
              <li>
                <span className="colorBox" data-color="rgb(0,255,0)"></span>
              </li>
              <li>
                <span className="colorBox" data-color="rgb(0,255,255)"></span>
              </li>
              <li>
                <span className="colorBox" data-color="rgb(0,0,255)"></span>
              </li>
              <li>
                <span className="colorBox" data-color="rgb(255,0,255)"></span>
              </li>
              <li>
                <span className="colorBox" data-color="rgb(255,255,128)"></span>
              </li>
              <li>
                <span className="colorBox" data-color="rgb(0,255,128)"></span>
              </li>
              <li>
                <span className="colorBox" data-color="rgb(128,255,255)"></span>
              </li>
              <li>
                <span className="colorBox" data-color="rgb(128,128,255)"></span>
              </li>
              <li>
                <span className="colorBox" data-color="rgb(255,0,128)"></span>
              </li>
              <li>
                <span className="colorBox" data-color="rgb(255,128,64)"></span>
              </li>
            </ul>
          </div>
          <div className="status-bar">
            <p className="statusBox statusLeft">
              각 탭에서 이미지를 선택 해주세요.{" "}
            </p>
            <p className="statusBox statusMiddle"></p>
            <p className="statusBox statusRight"></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Design;
