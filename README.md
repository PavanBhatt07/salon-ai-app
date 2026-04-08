# salon-ai-app
AI-powered salon web app that lets users preview hairstyles, watch short transformation videos, and book appointments.


salon-app/
│
├── frontend/
│   ├── public/
│   │   ├── index.html           # Main HTML file
│   │   ├── videos/              # Folder for your 15-sec videos
│   │   └── images/              # Optional: salon images, hairstyle images
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx       # Navbar with salon name/logo
│   │   │   ├── HeroVideo.jsx    # Hero video of salon/shop
│   │   │   ├── VideoGallery.jsx # Before/After hairstyle videos
│   │   │   ├── AIUploader.jsx   # Image upload & AI recommendation
│   │   │   ├── BookingForm.jsx  # Appointment booking form
│   │   │   ├── ContactSection.jsx # Location, phone, WhatsApp
│   │   │   └── Reviews.jsx      # Google reviews/testimonials
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx         # Homepage combining all sections
│   │   │   └── Booking.jsx      # Booking page (optional separate)
│   │   │
│   │   ├── App.jsx              # Main React app
│   │   ├── index.js             # React entry point
│   │   └── tailwind.css         # Tailwind CSS file
│   │
│   └── package.json
│
├── backend/
│   ├── routes/
│   │   ├── ai.js                # AI photo upload & recommendation
│   │   ├── booking.js           # Booking API
│   │   └── translate.js         # Translation API
│   │
│   ├── models/
│   │   └── Booking.js           # MongoDB schema for booking
│   │
│   ├── uploads/                 # Folder to store uploaded photos
│   ├── server.js                # Main Express server
│   └── package.json
│
└── README.md



PROJECT REQUIREMENTS:

1. FRONTEND (Simple UI):
- Clean and minimal design (not advanced)
- Homepage with salon intro
- Add a background or hero video of the salon

2. VIDEO SECTION:
- Display 3 to 4 short videos (15 seconds each)
- Videos should show before and after hairstyle results
- Use a responsive video grid layout

3. AI HAIRSTYLE FEATURE:
- User can upload a photo
- System detects face shape and suggests hairstyles
- Only allow 1 free attempt per user
- After first attempt, show message:
  "Please book an appointment to get more recommendations"

4. BOOKING SYSTEM:
- Create booking form with:
  - Name
  - Phone number
  - Date
  - Time
  - Service selection
- Store booking in database

5. CONTACT SECTION:
- Show Google Maps location of the salon
- Display phone number (click to call)
- Add WhatsApp button (optional)

6. REVIEWS SECTION:
- Show Google reviews or sample testimonials

7. TRANSLATION FEATURE:
- Add button to translate hairstyle request into German
- Use DeepL API or Google Translate API

TECH STACK:
- Frontend: React + Tailwind CSS
- Backend: Node.js + Express
- Database: MongoDB

WHAT I NEED FROM YOU:
1. Folder structure (frontend + backend)
2. Step-by-step development plan
3. Full code for:
   - Homepage with video
   - Video section
   - Image upload and AI feature
   - Booking form and API
   - Translation feature
4. Instructions to run locally
5. Deployment steps

IMPORTANT:
- Keep UI simple and clean
- Focus on MVP first
- Explain each step clearly for a beginner