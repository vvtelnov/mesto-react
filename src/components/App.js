import { useState } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupBigImg from './ImagePopup.js';

function App() {
  const [popupBigImgData, setPopupBigImgData] = useState({
    isOpened: false,
    postName: '',
    postLink: '',
  })

  const openBigImgPopup = (cardData) => {
    setPopupBigImgData({
      ...popupBigImgData,
      isOpened: true,
      postName: cardData.postName,
      postLink: cardData.postLink,
    });
  }

  const closeBigImgPopup = () => {
    setPopupBigImgData({
      ...popupBigImgData,
      isOpened: false,
      postName: '',
      postLink: '',
    });
  }

  return (
    <div className="app">
      <Header />
      <Main 
        onCardImgClickEvent={openBigImgPopup}
      />
      <Footer />
      {popupBigImgData.isOpened && (
        <PopupBigImg
          onClosePopupBigImg={closeBigImgPopup}
          title={popupBigImgData.postName}
          link={popupBigImgData.postLink}
        />
      )}
    </div>
  );
}

export default App;
