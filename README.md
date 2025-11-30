# Bookshelf App

## Goal
This is my project for C# classes. The main goal is to create a full-stack mobile application.  
Bookshelf is an app that allows users to build and manage their own personal library of books.

## Project Description
In this app, a user will be able to:
- Search for books
- Mark books as "read" and rate them using stars, write a short review, and save the exact date they finished reading
- Add books to a "Want to Read" shelf

The app will also include a **statistics tab**, showing:
- How many books the user has read in a month
- Book genres breakdown
- Average rating per month or per genre  

All these data will be stored in an SQL database, with C# used for database connection and backend logic.

## Technologies Used for First Version (as of 1.12.2025)
- Programming language: JavaScript
- Frameworks: React Native + Expo
- Fonts: Imported from Google Fonts
- Book covers: From Pinterest (these images are **not owned by me**; you can see the originals and authors on my Pinterest board)  
  [Pinterest Board](https://pin.it/3ak0sS5vK)

## Planned Future Technologies
For the backend and database:
- C# .NET
- SQL

## Possible Enhancements
- Connect to **Google Books API** to fetch book data automatically
- Add advanced filtering and sorting in the library
- Show reading statistics with charts (e.g., monthly progress, top genres)
- Implement notifications or reminders for "Want to Read" books

## Current Status
- Scrollable list of books with covers
- Read book view with:
  - Cover image
  - Title, author
  - Star rating
  - Short description
- Bottom navigation bar
- Custom fonts loaded via Expo
- Modular structure for easy expansion
