'use client';

import React from 'react';
import { Play, Info, Search, Bell, User } from 'lucide-react';
import './globals.css';

const movies = [
  { id: 1, title: 'Adventures of MrLoLCat', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop' },
  { id: 2, title: 'Cat Trades', image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=1915&auto=format&fit=crop' },
  { id: 3, title: 'Crypto Mew', image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=1887&auto=format&fit=crop' },
  { id: 4, title: 'LoL Night', image: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=2070&auto=format&fit=crop' },
  { id: 5, title: 'Whisker Wild', image: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=1935&auto=format&fit=crop' },
  { id: 6, title: 'Golden Paws', image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=1935&auto=format&fit=crop' },
];

export default function Home() {
  return (
    <div className="home">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">MrLoLCat</div>
        <div className="nav-items" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Search size={24} />
          <Bell size={24} />
          <User size={24} />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">MrLoLCat TV Originals</h1>
        <p className="hero-desc">
          Kucing paling lucu dengan konten paling gokil sedunia. Nikmati streaming eksklusif petualangan MrLoLCat hanya di sini.
        </p>
        <div className="btn-group">
          <button className="btn btn-play"><Play fill="black" size={24} /> Putar</button>
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
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
