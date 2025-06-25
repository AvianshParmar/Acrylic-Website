from flask import Flask, request, redirect
import urllib.parse

app = Flask(__name__)

# Admin WhatsApp number (without + or spaces)
ADMIN_NUMBER = "917069799710"

@app.route('/send-whatsapp', methods=['POST'])
def send_whatsapp():
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')

    # Construct WhatsApp message
    whatsapp_message = f"New Enquiry:\nName: {name}\nEmail: {email}\nMessage: {message}"
    encoded_msg = urllib.parse.quote(whatsapp_message)

    whatsapp_url = f"https://wa.me/{ADMIN_NUMBER}?text={encoded_msg}"

    return redirect(whatsapp_url)

if __name__ == "__main__":
    app.run(debug=True)
