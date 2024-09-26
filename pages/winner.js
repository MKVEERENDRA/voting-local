import React from 'react';
import { useRouter } from 'next/router';
import Style from './WinnerPage.module.css'; // Import the CSS module

const WinnerPage = () => {
  const router = useRouter();
  const { candidate, voteCount, imageUrl, address, age } = router.query; // Access all query parameters

  return (
    <div className={Style.pageContainer}>
      <div className={Style.winnerCard}>
        <h1 className={Style.winnerTitle}>🎉 Congratulations! {candidate} 🎉</h1>
        {candidate === "No Winner" ? (
          <p className={Style.winnerMessage}>Unfortunately, there is no winner for this voting round.</p>
        ) : (
          <div className={Style.winnerDetails}>
            <img src={imageUrl} alt={`${candidate}'s Image`} className={Style.winnerImage} />
            <h2 className={Style.winnerName}>{candidate}</h2>
            <p className={Style.winnerCount}>You Won By Vote Count: {voteCount}</p>
            <p className={Style.winnerAge}>Age: {age} years</p>
            <p className={Style.winnerAddress}>Address: {address}</p>
            <p className={Style.celebrationMessage}>Hurray! 🎊 Let's celebrate the victory!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WinnerPage;
