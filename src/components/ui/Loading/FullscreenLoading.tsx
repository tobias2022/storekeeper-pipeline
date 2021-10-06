import React from 'react';
import styled from '@emotion/styled';
import Spinner from './Spinner';

const FullScreen = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function FullscreenLoading() {
  return (
    <FullScreen>
      <Spinner />
    </FullScreen>
  );
}
