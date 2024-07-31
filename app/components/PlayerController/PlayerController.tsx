import React, { useState } from "react";
import styles from "./PlayerController.module.css";

interface Track {
  title: string;
  artist: string;
  cover: string;
  duration: number;
}

interface PlayerControllerProps {
  track: Track;
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onPrevious: () => void;
  onToggleVisuals: () => void;
  showVisuals: boolean;
}

const PlayerController: React.FC<PlayerControllerProps> = ({
  track,
  isPlaying,
  onPlayPause,
  onNext,
  onPrevious,
  onToggleVisuals,
  showVisuals
}) => {
    const [currentTime, setCurrentTime] = useState(0);
    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };
    const pauseIcon = '/images/Pause.svg';
    const playIcon = '/images/Play.svg';
    const visual = '/images/Skip.svg';
    return (
        <div className={styles.playerController}>
            {showVisuals && (
                <div className={styles.visuals}>
                    <img src={track.cover} alt={`${track.title} cover`} />
                    <div>{track.title}</div>
                </div>
            )}
            <div className={styles.progressBar}>
                <input type="range" className={styles.progressFill} />
                <div className={styles.progressDiv}>
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(track.duration)}</span>
                </div>
            </div>
            <div className={styles.controls}>
                <button onClick={onPrevious}><img src="/images/Volume.svg" /></button>
                <button onClick={onPrevious}><img src="/images/SkipLeft.svg" /></button>
                <button onClick={onPrevious}><img src="/images/DoubleSkipLeft.svg" /></button>
                <button onClick={onPlayPause}>
                {isPlaying ? pauseIcon : playIcon}
                </button>
                <button onClick={onNext}><img src="/images/DoubleSkipRight.svg" /></button>
                <button onClick={onPrevious}><img src="/images/SkipRight.svg" /></button>
                <button onClick={onToggleVisuals}>
                {showVisuals ? visual : visual}
                </button>
            </div>
        </div>
    );
};

export default PlayerController;