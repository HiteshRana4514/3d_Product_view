import { useState, useCallback } from 'react';
import * as THREE from 'three';
import ThreeScene from './components/ThreeScene';
import TexturePanel from './components/TexturePanel';
import './App.css';

function App() {
  const [modelScale, setModelScale] = useState(1);
  const [sceneData, setSceneData] = useState(null);

  const handleSceneReady = useCallback((data) => {
    setSceneData(data);
  }, []);

  const cushionTextures = [
    { color: '#FF0000' },
    { color: '#00FF00' },
    { color: '#0000FF' },
    { color: '#FFFF00' },
    { color: '#FF00FF' },
    { color: '#00FFFF' },
    { color: '#FFFFFF' },
    { color: '#000000' },
  ];

  const frameTextures = [
    { color: '#808080' },
    { color: '#A0522D' },
    { color: '#CD853F' },
    { color: '#8B4513' },
    { color: '#D2691E' },
    { color: '#F4A460' },
    { color: '#000000' },
    { color: '#FFFFFF' },
  ];

  const fullModelTextures = [
    { color: '#808080' },
    { color: '#A0522D' },
    { color: '#CD853F' },
    { color: '#8B4513' },
    { color: '#D2691E' },
    { color: '#F4A460' },
    { color: '#000000' },
    { color: '#FFFFFF' },
  ];

  const handleCushionTextureChange = useCallback((texture) => {
    if (sceneData?.model) {
      sceneData.model.traverse((child) => {
        if (child instanceof THREE.Mesh && child.name.includes('Box015')) {
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach(mat => mat.color.setStyle(texture.color));
            } else {
              child.material.color.setStyle(texture.color);
            }
          }
        }
      });
    }
  }, [sceneData]);

  const handleFrameTextureChange = useCallback((texture) => {
    if (sceneData?.model) {
      sceneData.model.traverse((child) => {
        if (child instanceof THREE.Mesh && child.name.includes('Cylinder')) {
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach(mat => mat.color.setStyle(texture.color));
            } else {
              child.material.color.setStyle(texture.color);
            }
          }
        }
      });
    }
  }, [sceneData]);

  const handleFullModelTextureChange = useCallback((texture) => {
    if (sceneData?.model) {
      sceneData.model.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach(mat => mat.color.setStyle(texture.color));
            } else {
              child.material.color.setStyle(texture.color);
            }
          }
        }
      });
    }
  }, [sceneData]);

  return (
    <div className="app-container">
      <div className="viewer-section">
        <ThreeScene modelScale={modelScale} onSceneReady={handleSceneReady} />
      </div>
      <div className="controls-section">
        <h2>Controls</h2>
        <div className="texture-controls">
          <TexturePanel
            title="Cushion Color"
            textures={cushionTextures}
            onTextureSelect={handleCushionTextureChange}
          />
          <TexturePanel
            title="Frame Color"
            textures={frameTextures}
            onTextureSelect={handleFrameTextureChange}
          />
          <TexturePanel
            title="Full Model Color"
            textures={fullModelTextures}
            onTextureSelect={handleFullModelTextureChange}
          />
        </div>
        <div className="scale-control">
          <label htmlFor="scale-slider">Model Size</label>
          <input
            id="scale-slider"
            type="range"
            min="0.5"
            max="1.5"
            step="0.1"
            value={modelScale}
            onChange={(e) => setModelScale(Number(e.target.value))}
          />
          <span className="scale-value">{(modelScale * 100).toFixed(0)}%</span>
        </div>
      </div>
    </div>
  );
}

export default App;
