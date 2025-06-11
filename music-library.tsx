import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart, Shuffle, Repeat, MoreHorizontal, Music } from 'lucide-react';

const MusicPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(75);
  const [isShuffleOn, setIsShuffleOn] = useState(false);
  const [repeatMode, setRepeatMode] = useState('off'); // off, one, all
  const [likedTracks, setLikedTracks] = useState(new Set([0, 2]));

  const tracks = [
    {
      id: 1,
      title: "Midnight Dreams",
      artist: "Luna Eclipse",
      album: "Neon Nights",
      duration: "3:42",
      cover: "🌙"
    },
    {
      id: 2,
      title: "Electric Pulse",
      artist: "Cyber Groove",
      album: "Digital Waves",
      duration: "4:15",
      cover: "⚡"
    },
    {
      id: 3,
      title: "Ocean Breeze",
      artist: "Tranquil Sounds",
      album: "Nature's Symphony",
      duration: "5:23",
      cover: "🌊"
    },
    {
      id: 4,
      title: "City Lights",
      artist: "Urban Beats",
      album: "Metropolitan",
      duration: "3:58",
      cover: "🌃"
    },
    {
      id: 5,
      title: "Sunset Vibes",
      artist: "Chill Masters",
      album: "Golden Hour",
      duration: "4:32",
      cover: "🌅"
    },
    {
      id: 6,
      title: "Starlight Serenade",
      artist: "Cosmic Jazz",
      album: "Space Lounge",
      duration: "6:12",
      cover: "✨"
    }
  ];

  const playlist = [
    { name: "Recently Played", count: 12, emoji: "🕒" },
    { name: "Favorites", count: 8, emoji: "❤️" },
    { name: "Chill Vibes", count: 24, emoji: "😌" },
    { name: "Workout Mix", count: 18, emoji: "💪" },
    { name: "Study Session", count: 15, emoji: "📚" }
  ];

  // Simulate progress when playing
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            nextTrack();
            return 0;
          }
          return prev + 0.5;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
    setProgress(0);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
    setProgress(0);
  };

  const toggleLike = (trackIndex) => {
    const newLiked = new Set(likedTracks);
    if (newLiked.has(trackIndex)) {
      newLiked.delete(trackIndex);
    } else {
      newLiked.add(trackIndex);
    }
    setLikedTracks(newLiked);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getCurrentTime = () => {
    const totalSeconds = 60 * 3 + 42; // Example: 3:42
    const currentSeconds = (progress / 100) * totalSeconds;
    return formatTime(currentSeconds);
  };

  const getRepeatIcon = () => {
    if (repeatMode === 'one') return <Repeat className="w-5 h-5" />;
    return <Repeat className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">
              Sound<span className="text-purple-400">Wave</span>
            </h1>
            <p className="text-gray-400">Your personal music universe</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-full p-3 border border-white/20">
              <Music className="w-6 h-6 text-purple-400" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-6">Playlists</h3>
              <div className="space-y-3">
                {playlist.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/10 cursor-pointer transition-all group">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.emoji}</span>
                      <div>
                        <p className="text-white font-medium group-hover:text-purple-400 transition-colors">
                          {item.name}
                        </p>
                        <p className="text-gray-400 text-sm">{item.count} songs</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Now Playing */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Album Cover */}
                <div className="w-48 h-48 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-6xl shadow-2xl">
                  {tracks[currentTrack].cover}
                </div>

                {/* Track Info & Controls */}
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {tracks[currentTrack].title}
                  </h2>
                  <p className="text-xl text-purple-400 mb-1">
                    {tracks[currentTrack].artist}
                  </p>
                  <p className="text-gray-400 mb-6">
                    {tracks[currentTrack].album}
                  </p>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                      <span>{getCurrentTime()}</span>
                      <span>{tracks[currentTrack].duration}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 cursor-pointer">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center justify-center lg:justify-start gap-6 mb-6">
                    <button 
                      onClick={() => setIsShuffleOn(!isShuffleOn)}
                      className={`p-2 rounded-full transition-all ${isShuffleOn ? 'text-purple-400' : 'text-gray-400 hover:text-white'}`}
                    >
                      <Shuffle className="w-5 h-5" />
                    </button>
                    
                    <button 
                      onClick={prevTrack}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <SkipBack className="w-6 h-6" />
                    </button>
                    
                    <button 
                      onClick={togglePlay}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-4 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                      {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
                    </button>
                    
                    <button 
                      onClick={nextTrack}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <SkipForward className="w-6 h-6" />
                    </button>
                    
                    <button 
                      onClick={() => setRepeatMode(repeatMode === 'off' ? 'all' : repeatMode === 'all' ? 'one' : 'off')}
                      className={`p-2 rounded-full transition-all ${repeatMode !== 'off' ? 'text-purple-400' : 'text-gray-400 hover:text-white'}`}
                    >
                      {getRepeatIcon()}
                    </button>
                  </div>

                  {/* Secondary Controls */}
                  <div className="flex items-center justify-center lg:justify-start gap-4">
                    <button 
                      onClick={() => toggleLike(currentTrack)}
                      className={`p-2 rounded-full transition-all ${likedTracks.has(currentTrack) ? 'text-red-500' : 'text-gray-400 hover:text-white'}`}
                    >
                      <Heart className={`w-5 h-5 ${likedTracks.has(currentTrack) ? 'fill-current' : ''}`} />
                    </button>
                    
                    <div className="flex items-center gap-2">
                      <Volume2 className="w-5 h-5 text-gray-400" />
                      <div className="w-24 bg-gray-700 rounded-full h-1">
                        <div 
                          className="bg-purple-500 h-1 rounded-full"
                          style={{ width: `${volume}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <button className="text-gray-400 hover:text-white transition-colors p-2 rounded-full">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Track List */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-6">Up Next</h3>
              <div className="space-y-2">
                {tracks.map((track, index) => (
                  <div 
                    key={track.id}
                    onClick={() => setCurrentTrack(index)}
                    className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all hover:bg-white/10 ${
                      index === currentTrack ? 'bg-purple-500/20 border border-purple-500/30' : ''
                    }`}
                  >
                    <div className="text-2xl">{track.cover}</div>
                    <div className="flex-1">
                      <p className={`font-medium ${index === currentTrack ? 'text-purple-400' : 'text-white'}`}>
                        {track.title}
                      </p>
                      <p className="text-gray-400 text-sm">{track.artist}</p>
                    </div>
                    <div className="text-gray-400 text-sm">{track.duration}</div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(index);
                      }}
                      className={`p-2 rounded-full transition-all ${
                        likedTracks.has(index) ? 'text-red-500' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${likedTracks.has(index) ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;