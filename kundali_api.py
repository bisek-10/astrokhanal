from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS

@app.route("/kundali", methods=["POST"])
def generate_kundali():
    try:
        data = request.get_json()
        print("Received Data:", data)

        if not all(k in data for k in ["name", "birthDate", "birthTime", "birthPlace"]):
            return jsonify({"error": "Missing required fields"}), 400

        kundali_data = {
            "sun_sign": "Mesh (Aries)",
            "nakshatra": "Ashwini",
            "lagna": "Simha (Leo)"
        }

        return jsonify(kundali_data), 200

    except Exception as e:
        print("Error in API:", str(e))
        return jsonify({"error": "Internal Server Error"}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
