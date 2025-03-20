// Array of wallpapers
const wallpapers = [
            'assets/LakeBensis.jpg',  // Add the path to your wallpaper images
            'assets/Kandungawpeak.png',
    'assets/Balwarte.jpg',
    'assets/Bantayan.jpg',
    'assets/IMG_0009.jpg'
];

let currentWallpaperIndex = 0;

// Function to change the wallpaper
function changeWallpaper() {
    document.body.style.backgroundImage = `url('${wallpapers[currentWallpaperIndex]}')`;
    currentWallpaperIndex = (currentWallpaperIndex + 1) % wallpapers.length; // Loop to the next wallpaper
}

// Start the slideshow (every 10 seconds)
setInterval(changeWallpaper, 10000);

// Set the initial wallpaper on page load
window.onload = changeWallpaper;
