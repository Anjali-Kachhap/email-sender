📖 Description
The Custom Email Sender Dashboard is a user-friendly web application designed to send personalized emails efficiently. It supports data import via CSV or Google Sheets, dynamic email templates with placeholders, scheduling, and real-time delivery tracking using an integrated Email Service Provider (ESP) like SendGrid, Mailgun, or Amazon SES.

✨ Features
Data Integration: Upload CSV files or connect to Google Sheets.
Email Account Connection: Securely connect email accounts using OAuth2 or SMTP.
Dynamic Templates: Use placeholders like {Name} or {Company} for email personalization.
Scheduling & Throttling: Schedule emails and limit the sending rate to comply with ESP limits.
Analytics Dashboard: Monitor delivery statuses, open rates, and failures in real time.
ESP Integration: Compatible with SendGrid, Mailgun, or Amazon SES for robust delivery and tracking.

🚀 Installation
Prerequisites
Python 3.8 or higher
Pip for managing Python packages
Node.js (optional, for advanced frontend customization)

Step 1: Clone the Repository
git clone https://github.com/yourusername/custom-email-sender.git
cd custom-email-sender

Step 2: Set Up the Backend
Create and activate a virtual environment:
python -m venv venv
source venv/bin/activate  # macOS/Linux
venv\Scripts\activate     # Windows

Run the Flask app:
python app.py
Step 3: Set Up the Frontend (Optional)
For advanced frontend customization:

Install Node.js dependencies:
npm install

Run the development server:
npm run dev

🛠 Usage
Access the Dashboard
Start the backend server:
python app.py

Key Functionalities
Upload Data: Use the Upload Data section to import a CSV file or connect Google Sheets.
Email Configuration: Connect via OAuth2 or set up SMTP manually.
Template Customization: Create dynamic email templates with placeholders.
Email Scheduling: Schedule emails and specify sending intervals.
Real-Time Analytics: Track email statuses like Delivered, Opened, Bounced, etc.

🌐 API Endpoints
Endpoint	Method	Description
/	GET	Serves the main dashboard (index.html).
/upload	POST	Uploads CSV file or fetches Google Sheets data.
/configure-smtp	POST	Configures SMTP or ESP settings.
/save-template	POST	Saves the email template with placeholders.
/schedule-emails	POST	Schedules emails for sending.
/get-status	GET	Retrieves real-time email analytics.
