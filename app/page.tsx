import Image from "next/image";
import styles from "./page.module.css";
<<<<<<< Updated upstream

export default function Home() {
  return (
    <>
=======
import React, { useState } from "react";
import Button from "./components/Button/Button";
import ChartCard from "./components/ChartCard/ChartCard";
import PlayerController from "./components/PlayerController/PlayerController";

export default function Home() {
  const handleCardClick = (title: string) => {};
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVisuals, setShowVisuals] = useState(true);
  const track = {
    title: 'Imagine Dragons - Believer',
    artist: 'Imagine Dragons',
    cover: '/images/ImagineDragons.png',
    duration: 180,
  };
  const handlePlayPause = () => setIsPlaying(!isPlaying);
  const handleNext = () => {};
  const handlePrevious = () => {};
  const handleToggleVisuals = () => setShowVisuals(!showVisuals);
  return (
    <>
      <div className="viewPlaylistDiv">
        <Button initialText="View playlist" filledText={styles.filledText} textOnlyText="View playlist" />
      </div>
      <div className="chartCardDiv">
        <div className="topChartDiv">
          <a href="/" className="topCharts">Top Charts</a>
          <a href="#">See all</a>
        </div>
        <div className="chartHitsDiv" style={{ display: 'flex', gap: '20px' }}>
          <ChartCard
            bannerSrc="/images/Top-Hits-2024.jpg"
            title="Top hits 2024"
            onClick={() => handleCardClick('Top hits 2024')}
          />
          <ChartCard
            bannerSrc="/images/Chart-Hits-Stars.png"
            title="Chart Hits Stars"
            onClick={() => handleCardClick('Chart Hits Stars')}
          />
          <ChartCard
            bannerSrc="/images/Top-Music-Charts.png"
            title="Top Music Charts"
            onClick={() => handleCardClick('Top Music Charts')}
          />
          <ChartCard
            bannerSrc="/images/Super-Chart-Hits.png"
            title="Super Chart Hits"
            onClick={() => handleCardClick('Super Chart Hits')}
          />
        </div>
      </div>
      <div>
        <PlayerController
          track={track}
          isPlaying={isPlaying}
          onPlayPause={handlePlayPause}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onToggleVisuals={handleToggleVisuals}
          showVisuals={showVisuals}
        />
      </div>
>>>>>>> Stashed changes
    </>
  );
}
