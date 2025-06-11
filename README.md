# SoundWave Music Player 🎵

A modern, responsive music player built with React and Tailwind CSS. SoundWave offers a sleek, glassmorphic design with intuitive controls and a beautiful user interface.

![SoundWave Preview](https://via.placeholder.com/800x400/6366f1/ffffff?text=SoundWave+Music+Player)

## ✨ Features

### 🎮 Player Controls
- **Play/Pause** - Toggle playback with smooth animations
- **Track Navigation** - Skip to next/previous tracks
- **Progress Bar** - Visual progress tracking with time display
- **Volume Control** - Adjustable volume slider
- **Shuffle Mode** - Randomize track playback order
- **Repeat Modes** - Support for repeat off/all/one track

### 💖 Music Management
- **Favorites System** - Like/unlike tracks with heart icon
- **Track Queue** - "Up Next" section showing upcoming tracks
- **Playlist Sidebar** - Quick access to different playlists
- **Track Information** - Display title, artist, album, and duration

### 🎨 Design & UI
- **Glassmorphic Design** - Modern frosted glass effects
- **Responsive Layout** - Works seamlessly on desktop and mobile
- **Gradient Backgrounds** - Beautiful purple-to-pink color schemes
- **Emoji Album Covers** - Colorful emoji-based track representations
- **Smooth Animations** - Hover effects and transitions throughout

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/chintala9/soundwave-music-player.git
   cd soundwave-music-player
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see the application.

## 🛠️ Tech Stack

- **React** - Frontend framework with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **JavaScript ES6+** - Modern JavaScript features

## 📁 Project Structure

```
src/
├── components/
│   └── MusicPlayer.jsx     # Main music player component
├── styles/
│   └── globals.css         # Global styles and Tailwind imports
├── App.js                  # Main app component
└── index.js               # Entry point
```

## 🎵 Sample Music Library

The application comes with 6 sample tracks:

1. **Midnight Dreams** - Luna Eclipse
2. **Electric Pulse** - Cyber Groove
3. **Ocean Breeze** - Tranquil Sounds
4. **City Lights** - Urban Beats
5. **Sunset Vibes** - Chill Masters
6. **Starlight Serenade** - Cosmic Jazz

## 🎛️ Usage

### Basic Controls
- Click the **play button** to start/pause music
- Use **skip buttons** to navigate between tracks
- Click on any track in the "Up Next" section to jump to it
- Toggle **shuffle** and **repeat** modes as needed

### Managing Favorites
- Click the **heart icon** next to any track to add/remove from favorites
- Liked tracks are highlighted with a filled red heart

### Playlists
The sidebar includes sample playlists:
- Recently Played (12 songs)
- Favorites (8 songs)
- Chill Vibes (24 songs)
- Workout Mix (18 songs)
- Study Session (15 songs)

## 🎨 Customization

### Adding New Tracks
To add new tracks, modify the `tracks` array in the `MusicPlayer` component:

```javascript
const tracks = [
  {
    id: 7,
    title: "Your Song Title",
    artist: "Artist Name",
    album: "Album Name",
    duration: "3:45",
    cover: "🎼" // Emoji for album cover
  },
  // ... more tracks
];
```

### Styling Changes
The application uses Tailwind CSS classes. You can customize:
- **Colors**: Modify gradient classes (`from-purple-500`, `to-pink-500`)
- **Spacing**: Adjust padding and margin classes
- **Effects**: Change backdrop blur and transparency values

### Adding Real Audio
To integrate real audio playback:
1. Add audio file URLs to track objects
2. Use the HTML5 Audio API or libraries like Howler.js
3. Connect the audio controls to actual playback functions

## 🔧 Advanced Features

### Auto-Progress Simulation
The player simulates track progress and automatically advances to the next song when a track "completes."

### Responsive Design
- **Desktop**: Full sidebar and expanded controls
- **Mobile**: Optimized layout with stacked elements
- **Tablet**: Balanced layout for medium screens

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Lucide React** for the beautiful icons
- **Tailwind CSS** for the utility-first styling approach
- **React Community** for the amazing ecosystem

## 🐛 Known Issues

- Audio playback is simulated (no actual audio files)
- Progress bar resets when changing tracks
- Volume control is visual only

## 🚀 Future Enhancements

- [ ] Real audio file integration
- [ ] Playlist creation and management
- [ ] Search functionality
- [ ] Equalizer controls
- [ ] Social sharing features
- [ ] Offline playback support
- [ ] Keyboard shortcuts
- [ ] Queue management
- [ ] Artist/album pages

## 📞 Support

If you encounter any issues or have questions:
- Open an issue on GitHub
- Check the documentation
- Join our community discussions

---

**Made with ❤️ by Sri Harsha Chintala**

*Enjoy your music with SoundWave! 🎶*
