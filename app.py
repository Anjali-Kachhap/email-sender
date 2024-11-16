from flask import Flask, request, jsonify
import pandas as pd
import smtplib
from datetime import datetime

app = Flask(__name__)

# Global storage for templates and SMTP settings
templates = {}
smtp_config = {}

# Upload CSV or Google Sheets data
@app.route('/upload', methods=['POST'])
def upload_csv():
    file = request.files['file']
    if file:
        data = pd.read_csv(file)
        # Save or process data as needed
        return jsonify({"message": "CSV uploaded successfully", "data": data.to_dict()}), 200
    return jsonify({"error": "File upload failed"}), 400

# Configure SMTP
@app.route('/configure-smtp', methods=['POST'])
def configure_smtp():
    global smtp_config
    smtp_config = request.json
    return jsonify({"message": "SMTP configured successfully"}), 200

# Save email template
@app.route('/save-template', methods=['POST'])
def save_template():
    global templates
    template = request.json.get('template')
    templates['default'] = template
    return jsonify({"message": "Template saved successfully"}), 200

# Schedule emails
@app.route('/schedule-emails', methods=['POST'])
def schedule_emails():
    schedule_data = request.json
    # Logic for scheduling emails (e.g., Celery or custom scheduler)
    return jsonify({"message": "Emails scheduled successfully", "data": schedule_data}), 200

# Get email status
@app.route('/get-status', methods=['GET'])
def get_status():
    # Return dummy status data for now
    status_data = [
        {"recipient": "user1@example.com", "status": "Sent", "delivery_status": "Delivered", "opened": True},
        {"recipient": "user2@example.com", "status": "Scheduled", "delivery_status": None, "opened": False},
    ]
    return jsonify({"data": status_data}), 200

if __name__ == '__main__':
    app.run(debug=True)
