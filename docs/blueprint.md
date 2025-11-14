# **App Name**: Sentinel

## Core Features:

- Data Aggregation: Collect and aggregate data from multiple sources, including hospital CSV uploads, pharmacy data, weather APIs, and social media (Google Trends or Twitter API). Data will be stored in Cloud Firestore.
- AI-Powered Risk Assessment: Employ a TensorFlow/Scikit-learn model via Firebase Genkit AI to analyze data patterns, identify anomalies, and predict disease outbreak risk levels.
- Automated Alert System: Automatically trigger an alert generation workflow when outbreak probability exceeds a defined threshold. Send alerts via Firebase Cloud Messaging (FCM) and display them on a real-time dashboard.
- Interactive Dashboard: Present an interactive disease heatmap (Leaflet.js or Google Maps API) along with charts (Recharts or Chart.js) for visualizing trends and risks, including cards for total cases, active alerts, and AI predictions.
- User Authentication and Authorization: Implement Firebase Authentication for secure access, including Google and email/password login options, with role-based access control for data uploading and advanced analytics.
- Real-time Data Visualization: Offer real-time updates using Firestore listeners, providing historical trends, daily case graphs, and AI prediction results, filterable by date, region, and disease type.
- Insight Generation: Use the Gemini tool to summarize outbreak data and generate insights.

## Style Guidelines:

- Primary color: Deep blue (#3F51B5) to convey trust and reliability, nodding to the 'sentinel' concept.
- Background color: Light gray (#F0F2F5), a desaturated version of the primary color, to provide a clean, modern backdrop.
- Accent color: Vibrant orange (#FF5722), analogous to deep blue, used for alerts, key indicators, and calls to action.
- Body and headline font: 'Inter' for a clean, modern, and highly readable sans-serif typeface. It is suitable for both headlines and body text.
- Use a set of consistent, modern icons (e.g., Material Icons) to represent different data types and functionalities.
- Design a responsive, card-based layout optimized for both desktop and mobile devices, ensuring a seamless user experience across all platforms.
- Incorporate subtle Framer Motion animations for transitions and data updates to enhance the user experience without being distracting.