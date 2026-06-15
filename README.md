# 📘 StudyNook

### *Smart Study Room Booking & Listing Platform*

StudyNook is a modern full-stack platform designed to help students discover, reserve, and manage study spaces with ease. It provides real-time availability, conflict-free scheduling, and an intuitive booking experience.

---

## 🔗 Live Site

🚀 **Coming Soon**

---

## ✨ Key Features

* 📚 **Explore Study Rooms** with detailed descriptions, amenities, pricing, and seating capacity.
* 📅 **Real-Time Booking System** with date and hourly slot selection.
* ⛔ **Smart Conflict Detection** to prevent double bookings.
* 💰 **Automatic Cost Calculation** based on selected booking duration.
* 👤 **Secure Authentication** with personalized booking history.
* 🏢 **Complete Room Management** including create, update, and delete operations.
* 📊 **Instant Booking Summary** with live updates and feedback.
* 🧠 **Advanced Booking Validation** to enforce booking rules.
* 🎨 **Modern Responsive Interface** optimized for all devices.
* ⚡ **Scalable Full-Stack Architecture** built using modern technologies.

---

## 🛠️ Tech Stack

### Frontend

* Next.js (App Router)
* React.js
* Tailwind CSS
* HeroUI
* React Hot Toast

### Backend

* Node.js
* Express.js
* MongoDB
* MongoDB Native Driver

### Authentication

* BetterAuth
* authClient (Session-Based Authentication)

---

## 📦 Project Structure

```
StudyNook/
├── client/                 # Next.js Frontend
├── server/                 # Express Backend
├── components/             # Reusable UI Components
├── app/                    # App Router Pages
├── api/                    # Rooms & Bookings APIs
└── database/               # MongoDB Collections
```

---

## 🚀 Core Functionalities

### 🏠 Room Listing

* Display dynamic room data from MongoDB.
* View room details including:

  * Images
  * Capacity
  * Floor information
  * Amenities
  * Hourly rates

### 📝 Room Management

* Create new study rooms.
* Update existing room information.
* Delete rooms when necessary.
* Manage room listings efficiently.

### 📆 Booking System

* Date validation to prevent past bookings.
* Hourly booking slots from **08:00 AM – 08:00 PM**.
* Real-time conflict detection.
* Minimum booking duration of one hour.
* Booking confirmation with instant feedback.

### 💳 Cost Calculation

* Automatic total price computation:

  ```
  Total Cost = Hourly Rate × Total Hours
  ```

### 🔒 User Experience

* Session-based authentication.
* Personalized booking history.
* User-specific booking tracking.

### 📊 Booking Dashboard

* Dedicated **"My Bookings"** page.
* View and manage previously reserved rooms.

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone .............................
```

---

### 2️⃣ Install Dependencies

#### Frontend

```bash
cd client
npm install
```

#### Backend

```bash
cd server
npm install
```

---

### 3️⃣ Configure Environment Variables

Create a `.env` file inside the backend directory:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

---

### 4️⃣ Run the Project

#### Start Backend Server

```bash
node index.js
```

#### Start Frontend

```bash
npm run dev
```

---

## 📌 Future Improvements

* 📅 Fully Interactive Calendar-Based Booking
* 💳 Online Payment Integration
* 📍 Location-Based Room Discovery
* 📱 Dedicated Mobile Application
* 🧠 AI-Powered Room Recommendations

---

## 🏢 Developed By

### TR TECH

Building practical solutions through modern web technologies.

---

## ❤️ Acknowledgements

StudyNook was built as a real-world full-stack project to demonstrate:

* Modern UI/UX design principles
* Backend validation techniques
* Conflict-free booking architecture
* Secure authentication workflows
* Scalable application development practices

---

