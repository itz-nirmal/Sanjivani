
# 🩺 Sanjivani – Smart Disease Predictor

**Sanjivani** is an AI-powered medical assistant that allows users to enter symptoms and receive predicted diseases along with triage guidance. It utilizes machine learning and natural language processing to provide reliable and informative health insights in real time.

---

## 🚀 Key Features

- ✅ Symptom input through form or chatbot interface
- ✅ AI-based prediction using Random Forest/XGBoost
- ✅ Confidence scoring and top-5 ranked diseases
- ✅ Triage guidance (self-care, teleconsultation, emergency)
- ✅ Downloadable PDF/CSV health reports
- ✅ Analytics dashboard for usage tracking

---

## 🧠 Tech Stack

| Layer            | Technology                          |
|------------------|--------------------------------------|
| Frontend         | React / Flutter                      |
| Backend API      | Node.js (Express) / Python (Flask)   |
| ML Model         | Random Forest / XGBoost              |
| NLP Processing   | spaCy / Hugging Face Transformers    |
| Data Storage     | PostgreSQL / MongoDB                 |
| Deployment       | Vercel / Docker                      |

---

## 📊 Dataset

You can use any of the following public datasets:
- [Kaggle: Disease Symptom Description Dataset](https://www.kaggle.com/datasets/itachi9604/disease-symptom-description-dataset)

---

## 🧪 Model Training

1. Preprocess symptoms using NLP (tokenize, map to standard symptom list)
2. Train Random Forest or XGBoost on structured symptom data
3. Evaluate using stratified k-fold validation
4. Optimize for ≥90% top-3 prediction accuracy

---

## 🔁 User Flow

1. **Onboarding**: Data usage consent and info screen
2. **Symptom Entry**: Via chatbot or form input
3. **Demographics**: Age, gender, medical history
4. **Prediction**: Disease ranking + triage color code
5. **Report**: Download/export summary (PDF/CSV)
6. **Feedback Loop**: User feedback for improvement

---

## 📦 Deployment & Security

- Encrypted user sessions (TLS)
- Pseudonymized data storage (HIPAA-style)
- Deploy using Docker or directly on Vercel

---

## 📄 License

This project is open-source under the MIT License.

---

## 👨‍💻 Author

**Nirmal Haldar** – Built with love and curiosity to bridge healthcare and AI.
