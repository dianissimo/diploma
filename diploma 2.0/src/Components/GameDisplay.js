import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header';
import { Unity, useUnityContext } from "react-unity-webgl";

function GameDisplay() {
  const { unityProvider, isLoaded } = useUnityContext({
    loaderUrl:
      "Game1/Build/Game1.loader.js",
    dataUrl: "Game1/Build/Game1.data",
    frameworkUrl:
      "Game1/Build/Game1.framework.js",
    codeUrl: "Game1/Build/Game1.wasm",
  });

  return (
    <div className="game-container">
      <Unity
        style={{ height: 375, width: 800 }}
        unityProvider={unityProvider}
      />
    </div>
  );
}

export default GameDisplay;