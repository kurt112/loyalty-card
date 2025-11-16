# Project Setup & APK Build Guide

## Prerequisites

- Node.js (v16+)
- npm or yarn
- Java JDK (for Android builds)
- Android Studio (for APK creation)
- Gradle (if not bundled with Android Studio)

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install


## 2. **Set up Android environment:**
1. npm install -g @ionic/cli
2. ionic cap add android
3. ionic build
4. ionic cap sync android
5. ionic cap open android