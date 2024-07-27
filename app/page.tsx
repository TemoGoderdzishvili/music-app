'use client';
import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import Button from "./components/Button/Button";
import ChartCard from './components/ChartCard/ChartCard';

export default function Home() {
  const handleCardClick = (title: string) => {
  };
  return (
    <>
      <div className="viewPlaylistDiv">
        <Button initialText="View playlist" filledText={styles.filledText} textOnlyText="View playlist" />
      </div>
      <div className="chartCardDiv">
        <h2 className="topCharts">Top Charts</h2>
        <div style={{ display: 'flex', gap: '20px' }}>
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
    </>
  );
}