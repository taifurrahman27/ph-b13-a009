📘 StudyNook by TR TECH

StudyNook is a modern study room booking and listing platform that allows students to discover, book, and manage study rooms with real-time availability and conflict-free scheduling.

🔗 Live Site: ............

✨ Features
📚 Browse and explore available study rooms with detailed information
📅 Book study rooms with real-time date and time selection
⛔ Prevent double booking with smart conflict detection system
💰 Automatic booking cost calculation based on hourly rate
👤 User authentication and personalized booking history
🏢 Admin/room management system to add, update, and delete rooms
📊 Real-time booking summary with instant feedback
🧠 Smart validation for time slots and booking rules
🎨 Clean, responsive UI built for students
⚡ Fast and scalable full-stack architecture


🛠️ Tech Stack

Frontend
Next.js (App Router)
React.js
Tailwind CSS
HeroUI
React Hot Toast

Backend

Node.js
Express.js
MongoDB
MongoDB Native Driver
Authentication
BetterAuth / authClient (session-based auth)


📦 Project Structure
StudyNook/
 ├── client (Next.js frontend)
 ├── server (Express backend)
 ├── components
 ├── pages / app
 ├── api (bookings, rooms)
 └── database (MongoDB collections)


🚀 Core Functionalities
🏠 Room listing with dynamic data from MongoDB
📝 Room CRUD operations (Create, Read, Update, Delete)

📆 Booking system with:
Date validation (no past booking)
Hourly time slots (08:00–20:00)
Conflict detection logic

💳 Automatic price calculation per booking
🔒 User-based booking tracking
📊 Booking history page (“My Bookings”)
⚙️ Installation & Setup
1. Clone repository
git clone ....................................
2. Install dependencies
Frontend
cd client
npm install
Backend
cd server
npm install
3. Setup environment variables
Create .env file in backend:
MONGODB_URI=your_mongodb_connection_string
PORT=5000
4. Run project
Backend
node index.js
Frontend
npm run dev


📌 Future Improvements
📅 Calendar-based booking UI (fully interactive)
💳 Payment integration system
📍 Location-based room discovery
📱 Mobile app version
🧠 AI-based room suggestion system


🏢 Project Owner

TR TECH


❤️ Acknowledgements

Built as a full-stack learning and real-world booking system project to demonstrate scalable architecture, backend validation, and modern UI design.

