# TOTLE Topic Search Component

This project implements a React component that displays a list of topics and allows filtering by a search input. It simulates TOTLE's topic browsing UI for the Catalogue Management System.

## Features

- Search input that filters topics by name (case-insensitive) as the user types
- Topic cards displaying name and category
- "No topics found" message when no matches are found
- Responsive design that works on various screen sizes

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open your browser and navigate to the URL shown in the terminal (typically http://localhost:5173)

## Usage Examples

- Type "thermo" in the search box to filter and show only the "Thermodynamics" topic
- Type "xyz" to see the "No topics found" message
- Clear the search box to see all topics

## Project Structure

- `src/components/TopicSearch.jsx` - The main component that implements the topic search functionality
- `src/components/TopicSearch.css` - Styling for the TopicSearch component
- `src/App.jsx` - The main application component that uses TopicSearch
- `src/App.css` - Global styling for the application
