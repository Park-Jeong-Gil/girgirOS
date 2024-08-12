import { useState } from 'react';
import TopMenu from "../toolBar/TopMenu";
import { posters, logos, artworks } from '../../constants/design'

interface DesignProps {}

function Design({}: DesignProps) {
  const [activeTab, setActiveTab] = useState('Poster');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setActiveButton(null); 
    // setSelectedImage(null);
  };

  const handleImageClick = (imageSrc: string, buttonId: string) => {
    setSelectedImage(imageSrc);
    setActiveButton(buttonId); // 클릭된 버튼의 ID를 activeButton 상태에 저장
  };

  const renderImageList = (images: { src: string; id: string }[]) => (
    images.map((image) => (
      <li key={image.id}>
        <button
          className={activeButton === image.id ? 'active' : ''}
          onClick={() => handleImageClick(image.src, image.id)}
        >
          <img src={image.src} alt="" />
        </button>
      </li>
    ))
  );

  return (
    <>
      <TopMenu />
      <div className="designContainer">
        <div className="editorWrap">
          <div className="side">
            <ul>
              <li><span className="toolBtn active"></span></li>
              <li><span className="toolBtn"></span></li>
              <li><span className="toolBtn"></span></li>
              <li><span className="toolBtn"></span></li>
              <li><span className="toolBtn"></span></li>
              <li><span className="toolBtn"></span></li>
              <li><span className="toolBtn"></span></li>
              <li><span className="toolBtn"></span></li>
              <li><span className="toolBtn"></span></li>
              <li><span className="toolBtn"></span></li>
              <li><span className="toolBtn"></span></li>
              <li><span className="toolBtn"></span></li>
              <li><span className="toolBtn"></span></li>
              <li><span className="toolBtn"></span></li>
              <li><span className="toolBtn"></span></li>
              <li><span className="toolBtn"></span></li>
            </ul>
            <p className="optionBox"></p>
          </div>
          <div className="drawField">
            {/* 선택된 이미지가 있을 때만 표시 */}
            {selectedImage && <img src={selectedImage} alt="Selected" />}
          </div>
        </div>
        <div className="selectWrap">
          <div className="tab">
            <button
              className={activeTab === 'Poster' ? 'active' : ''}
              onClick={() => handleTabClick('Poster')}
            >
              Poster
            </button>
            <button
              className={activeTab === 'Logo' ? 'active' : ''}
              onClick={() => handleTabClick('Logo')}
            >
              Logo
            </button>
            <button
              className={activeTab === 'Artwork' ? 'active' : ''}
              onClick={() => handleTabClick('Artwork')}
            >
              Artwork
            </button>
          </div>
          <div className="list">
            {/* Poster */}
            <ul data-list="Poster" style={{ display: activeTab === 'Poster' ? 'flex' : 'none' }}>
              {renderImageList(posters)}
            </ul>
            {/* Logo */}
            <ul data-list="Logo" style={{ display: activeTab === 'Logo' ? 'flex' : 'none' }}>
              {renderImageList(logos)}
            </ul>
            {/* Artwork */}
            <ul data-list="Artwork" style={{ display: activeTab === 'Artwork' ? 'flex' : 'none' }}>
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
              <li><span className="colorBox" data-color="rgb(0,0,0)"></span></li>
              <li><span className="colorBox" data-color="rgb(128,128,128)"></span></li>
              <li><span className="colorBox" data-color="rgb(128,0,0)"></span></li>
              <li><span className="colorBox" data-color="rgb(128,128,0)"></span></li>
              <li><span className="colorBox" data-color="rgb(0,128,0)"></span></li>
              <li><span className="colorBox" data-color="rgb(0,128,128)"></span></li>
              <li><span className="colorBox" data-color="rgb(0,0,128)"></span></li>
              <li><span className="colorBox" data-color="rgb(128,0,128)"></span></li>
              <li><span className="colorBox" data-color="rgb(128,128,64)"></span></li>
              <li><span className="colorBox" data-color="rgb(0,64,64)"></span></li>
              <li><span className="colorBox" data-color="rgb(0,128,255)"></span></li>
              <li><span className="colorBox" data-color="rgb(0,64,128)"></span></li>
              <li><span className="colorBox" data-color="rgb(64,0,255)"></span></li>
              <li><span className="colorBox" data-color="rgb(128,64,0)"></span></li>
              <li><span className="colorBox" data-color="rgb(255,255,255)"></span></li>
              <li><span className="colorBox" data-color="rgb(192,192,192)"></span></li>
              <li><span className="colorBox" data-color="rgb(255,0,0)"></span></li>
              <li><span className="colorBox" data-color="rgb(255,255,0)"></span></li>
              <li><span className="colorBox" data-color="rgb(0,255,0)"></span></li>
              <li><span className="colorBox" data-color="rgb(0,255,255)"></span></li>
              <li><span className="colorBox" data-color="rgb(0,0,255)"></span></li>
              <li><span className="colorBox" data-color="rgb(255,0,255)"></span></li>
              <li><span className="colorBox" data-color="rgb(255,255,128)"></span></li>
              <li><span className="colorBox" data-color="rgb(0,255,128)"></span></li>
              <li><span className="colorBox" data-color="rgb(128,255,255)"></span></li>
              <li><span className="colorBox" data-color="rgb(128,128,255)"></span></li>
              <li><span className="colorBox" data-color="rgb(255,0,128)"></span></li>
              <li><span className="colorBox" data-color="rgb(255,128,64)"></span></li>
            </ul>
          </div>
          <div className="status-bar">
            <p className="statusBox statusLeft">각 탭에서 이미지를 선택 해주세요. </p>
            <p className="statusBox statusMiddle"></p>
            <p className="statusBox statusRight"></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Design;
