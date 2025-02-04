# Streamify Music Streaming Analytics Dashboard

## Overview
Streamify is a music streaming analytics dashboard built with **React** and **Tailwind CSS**. It provides key insights into user activity, revenue, and content performance. The dashboard is designed to be responsive, user-friendly, and visually appealing.

---
## Features
### Key Metrics
- **Total Users**: Displays the total number of registered users.
- **Active Users**: Shows the count of users who streamed at least one song in the last 30 days.
- **Total Streams**: Represents the total number of songs streamed.
- **Revenue**: Displays total revenue from subscriptions and advertisements.
- **Top Artist**: Highlights the most-streamed artist in the past 30 days.

### Data Visualization
- **User Growth Chart**: Line chart displaying user growth trends over the past 12 months.
- **Revenue Distribution**: Pie chart illustrating revenue breakdown from subscriptions and ads.
- **Top 5 Streamed Songs**: Bar chart showing the top five most-streamed songs in the last 30 days.

### Data Table
- Displays recent stream details with the following columns:
  - **Song Name**
  - **Artist**
  - **Date Streamed**
  - **Stream Count**
  - **User ID**

### Bonus Features
✅ **Sorting and Filtering**: Allows sorting by date or stream count and filtering by artist or song name.  
✅ **Chart Interactions**: Hover effects for exact values, clickable pie chart segments for filtering.  
✅ **Dark Mode Toggle**: Switch between light and dark mode.  
✅ **Export Data as CSV**: Download stream data for further analysis.  
✅ **Mobile-Friendly Responsive Design**: Works on all screen sizes.  
✅ **Image Thumbnails for Songs**: Displays Bollywood and Hollywood songs with their respective images.
✅ **Custom Domain Support**: Host the site on a custom domain with GitHub Pages.

---
## Tech Stack
- **Frontend**: React, Tailwind CSS
- **State Management**: Context API
- **Data Visualization**: Recharts
- **Mock Data**: MirageJS
- **Routing**: React Router
- **Testing**: Jest & React Testing Library

---
## Installation & Setup

### **1. Clone the Repository**
```sh
git clone https://github.com/shivansh1507/Streamify-Analytics.git
cd Streamify-Analytics
```

### **2. Install Dependencies**
```sh
npm install
```

### **3. Start the Development Server**
```sh
npm run dev
```
**Localhost:** [http://localhost:3001/](http://localhost:3001/)

---
## Deployment
This project can be deployed on **GitHub Pages**, **Vercel**, or **Netlify**.

### **Deploy on GitHub Pages**
1. **Modify `vite.config.js`** to set the base URL:
   ```javascript
   export default defineConfig({
     base: '/Streamify-Analytics/',
   });
   ```
2. **Install `gh-pages`**:
   ```sh
   npm install gh-pages --save-dev
   ```
3. **Add Deploy Scripts to `package.json`**:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. **Deploy to GitHub Pages**:
   ```sh
   npm run deploy
   ```

### **Deploy on Vercel**
```sh
vercel
```

### **Deploy on Netlify**
```sh
netlify deploy
```

Live Demo: [https://streamifyanalytics.netlify.app/](https://streamifyanalytics.netlify.app/)



---
## Testing
Run tests using:
```sh
npm test
```

---
## Future Enhancements
🚀 **Real-time Data Streaming** using WebSockets  
🚀 **User Segmentation & Personalized Insights**  
🚀 **Advanced Filtering & Reporting**



---
## Contributors
- **Shivansh Sharma** - *Software Developer*

