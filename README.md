# 🕮 Bookshelf App by Artur Werys
**Version for first presentation: 1.12.2025**
---

## Goal
- This is my C# coursework project.
- The main goal is to create a **full-stack mobile application**.  
- Bookshelf app allows users to **build and manage their personal library of books**.

## Project description
In this app, a user will be able to:
- Search for books.
- Mark books as "read" and rate them using stars, write a short review, and save the exact date they finished reading.
- Add books to a "Want to Read" shelf.

The app will also include a **statistics tab**, showing:
- Number of books read per month.
- Breakdown by genres.
- Average rating per month / per genre.  

All these data will be stored in an **SQL database**, with **C#** used for database connection and backend logic.

## Technologies used for first version (as of 1.12.2025)
- Programming language: JavaScript.
- Frameworks: React Native + Expo.
- Fonts: Imported from Google Fonts.
- Book covers: From Pinterest (these images are **not owned by me**; you can see the originals and authors on my Pinterest board).  
  [BookShelf Pinterest Board](https://pin.it/3ak0sS5vK)

## Planned future technologies
For the backend and database:
- C# .NET
- SQL

## Current status
- Scrollable list of 6 books with covers.
- Read book section with:
  - Cover image.
  - Title, author.
  - Star rating.
  - Short description.
- Custom fonts loaded via Expo.
- Modular structure for easy expansion.

---

## UI Screenshots
<div style="display: flex; justify-content: center; align-items: flex-start; gap: 50px; flex-wrap: wrap;">

--- 
### Screenshot
  <!-- UI screenshot -->
  <div style="text-align: center;">
    <img src="BookshelfFrontend/assets/presentation/UI_Presentation1.png" alt="Library UI" width="300" />
  </div>

--- 
### GIF
  <!-- GIF -->
  <div style="text-align: center;">
    <img src="BookshelfFrontend/assets/presentation/GIF_Presentation1.gif" alt="Read Book GIF" width="300" />
  </div>

</div>

--- 

## Next steps
- Implement SQL backend with C# .NET.
- Show reading statistics with charts (monthly progress, top genres).
- Add "Add Book" functionality.
- Add advanced filtering and sorting in the library.
- Connect to **Google Books API** to fetch book data automatically.
