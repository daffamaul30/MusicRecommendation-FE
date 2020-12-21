import React from 'react';
// import { Spinner } from 'react-bootstrap';
const Loading = () => {
  return (
    <div
      style={{
        // display: 'flex',
        justifyContent: 'center',
        // margin: '40px',
        // backgroundColor: 'rgb(255, 255, 255, 0.3)',
        borderRadius: '100',
        display: 'flex',
        flexDirection: 'column',
        margin: '0',
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        // backgroundColor: 'unset',
      }}
    >
      {/* <lottie-player
        src="https://assets1.lottiefiles.com/packages/lf20_ZI1FDI.json"
        background="transparent"
        speed="1"
        style={{ width: '400px', height: '400px' }}
        loop
        autoplay
      /> */}
      <p
        className="text-center"
        style={{ marginTop: '-70px', color: 'white', fontSize: '20px' }}
      >
        Please wait...
      </p>
    </div>
  );
};

export default Loading;
