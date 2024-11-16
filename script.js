// scripts.js

// Upload CSV
function uploadCSV() {
    const file = document.getElementById('file-upload').files[0];
    if (file) {
        const formData = new FormData();
        formData.append('file', file);
        fetch('/upload', { method: 'POST', body: formData })
            .then(response => response.json())
            .then(data => alert('CSV uploaded successfully!'))
            .catch(err => console.error(err));
    }
}

// Connect Google Sheets
function connectGoogleSheets() {
    alert('Redirecting to Google Sheets authentication...');
    // Add logic for OAuth2 integration
}

// Configure SMTP
function configureSMTP() {
    const smtpConfig = {
        server: document.getElementById('smtp-server').value,
        port: document.getElementById('smtp-port').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
    };
    fetch('/configure-smtp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(smtpConfig),
    })
        .then(response => response.json())
        .then(data => alert('SMTP configured successfully!'))
        .catch(err => console.error(err));
}

// Save Template
function saveTemplate() {
    const template = document.getElementById('email-template').value;
    fetch('/save-template', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ template }),
    })
        .then(response => response.json())
        .then(data => alert('Template saved!'))
        .catch(err => console.error(err));
}

// Schedule Emails
function scheduleEmails() {
    const schedule = {
        time: document.getElementById('schedule-time').value,
        rate: document.getElementById('rate-limit').value,
    };
    fetch('/schedule-emails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(schedule),
    })
        .then(response => response.json())
        .then(data => alert('Emails scheduled!'))
        .catch(err => console.error(err));
}
