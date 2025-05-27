import React from 'react';
import styles from './TexturePanel.module.css';

const TexturePanel = ({ title, textures, onTextureSelect }) => {
  return (
    <div className={styles.texturePanel}>
      <h3>{title}</h3>
      <div className={styles.colorGrid}>
        {textures.map((texture, index) => (
          <div
            key={index}
            className={styles.colorOption}
            style={{ backgroundColor: texture.color }}
            onClick={() => onTextureSelect(texture)}
          />
        ))}
      </div>
    </div>
  );
};

export default TexturePanel;
