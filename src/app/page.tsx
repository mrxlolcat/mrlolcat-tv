'use client';

import React, { useState } from 'react';
import { Play, Info, Search, Bell, User, X } from 'lucide-react';
import './globals.css';

const movies = [
  { id: 1, title: 'Adventures of MrLoLCat', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop', videoUrl: 'https://www.xnxx.com/video-18xon3f7/lose_your_balls_at_for_sweet_femdom' },
  { id: 2, title: 'Cat Trades', image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=1915&auto=format&fit=crop', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
  { id: 3, title: 'Crypto Mew', image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=1887&auto=format&fit=crop', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
  { id: 4, title: 'LoL Night', image: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=2070&auto=format&fit=crop', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4' },
  { id: 5, title: 'Whisker Wild', image: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=1935&auto=format&fit=crop', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4' },
  { id: 6, title: 'Golden Paws', image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=1935&auto=format&fit=crop', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4' },
];

export default function Home() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const handlePlay = (url: string) => {
    setPlayingVideo(url);
  };

  const closePlayer = () => {
    setPlayingVideo(null);
  };

  return (
    <div className="home">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">MrLoLCat</div>
        <div className="nav-items" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Search size={24} style={{ cursor: 'pointer' }} />
          <Bell size={24} style={{ cursor: 'pointer' }} />
          <User size={24} style={{ cursor: 'pointer' }} />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">MrLoLCat TV Originals</h1>
        <p className="hero-desc">
          Kucing paling lucu dengan konten paling gokil sedunia. Nikmati streaming eksklusif petualangan MrLoLCat hanya di sini.
        </p>
        <div className="btn-group">
          <button 
            className="btn btn-play" 
            onClick={() => handlePlay('/data/tiny%20telly%20intro.mp4')}
          >
            <Play fill="black" size={24} /> Putar
          </button>
          <button className="btn btn-info"><Info size={24} /> Info Lengkap</button>
        </div>
      </section>

      {/* Movie Rows */}
      <div className="row">
        <h2 className="row-title">Paling Populer Saat Ini</h2>
        <div className="row-posters">
          {movies.map((movie) => (
            <div 
              key={movie.id} 
              className="poster" 
              style={{ backgroundImage: `url(${movie.image})` }}
              title={movie.title}
              onClick={() => handlePlay(movie.videoUrl)}
            ></div>
          ))}
        </div>
      </div>

      <div className="row">
        <h2 className="row-title">Lanjut Menonton</h2>
        <div className="row-posters">
          {movies.slice().reverse().map((movie) => (
            <div 
              key={movie.id} 
              className="poster" 
              style={{ backgroundImage: `url(${movie.image})` }}
              title={movie.title}
              onClick={() => handlePlay(movie.videoUrl)}
            ></div>
          ))}
        </div>
      </div>

      {/* Fullscreen Video Player Modal */}
      {playingVideo && (
        <div className="video-overlay">
          <button className="close-btn" onClick={closePlayer}>
            <X size={40} color="white" />
          </button>
          <video 
            className="full-video"
            controls 
            autoPlay 
            src={playingVideo}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      <style jsx>{`
        .video-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: black;
          z-index: 1000;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .full-video {
          width: 100%;
          height: 100%;
          max-width: 1280px;
        }
        .close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(0,0,0,0.5);
          border: none;
          border-radius: 50%;
          padding: 10px;
          cursor: pointer;
          z-index: 1001;
          transition: background 0.3s;
        }
        .close-btn:hover {
          background: rgba(255,255,255,0.2);
        }
      `}</style>
    </div>
  );
}
