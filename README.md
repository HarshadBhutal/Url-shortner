
---

````markdown
# 🔗 URL Shortener with Authentication & Analytics

A full-stack URL shortener built with **Node.js**, **Express**, **MongoDB**, and **EJS**.  
It allows users to create short links, manage them, and view analytics after logging in.

---

## ✨ Features

- 🔐 **User Authentication** — Sign Up, Login, Logout  
- ✂️ **URL Shortening** — Generate short links for long URLs  
- 📊 **Analytics Dashboard** — Track clicks, timestamps, and referrers  
- 🧠 Built with **Express**, **MongoDB**, and **EJS**  
- 🔄 **Clean & Modular** — Follows an organized project structure

---

## 🛠 Tech Stack

- **Frontend**: HTML, CSS, JavaScript, EJS  
- **Backend**: Node.js, Express  
- **Database**: MongoDB (via Mongoose)  
- **Templating**: EJS  
- **Configuration**: dotenv for environment variables  

---

## 🚀 Installation & Running Locally

1. **Clone the repo**

```bash
git clone https://github.com/HarshadBhutal/Url-shortner.git
cd Url-shortner
````

2. **Install dependencies**

```bash
npm install
```

3. **Create a `.env` file** in the project root:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

> ⚠️ Ensure `.env` is listed in `.gitignore` to avoid leaking secrets

4. **Start the server**

```bash
node index.js
or
npm start
```

5. **Open your browser** and go to `http://localhost:5000`

---

## 📁 Project Structure

```
Url-shortner/
├── Routes/
├── controller/
├── middleware/
├── model/
├── public/
├── views/
├── .env
├── .gitignore
├── index.js
├── package-lock.json
├── package.json
└── README.md

```

---

## 🧪 Future Enhancements

* 📱 Responsive design and mobile friendliness
* 🔐 OAuth Login (e.g., Google, GitHub)
* 🧾 QR code generation for each short URL
* 📉 Advanced Analytics (e.g., charts, geographic data)
* 🛡️ Admin dashboard for moderating users/links

---

## 📄 License

This project is licensed under the **MIT License**.
See [LICENSE](LICENSE) for details.

---

## 🙌 Contributing & Feedback

Feel free to:

* Submit bugs or feature requests via GitHub issues
* Open a pull request to contribute directly
* Contact me on GitHub: [@HarshadBhutal](https://github.com/HarshadBhutal)

---

```

---

🎉 Let me know if you'd like:

- **Screenshots or GIF embeds** to showcase the UI  
- **Deployment instructions** (Heroku, Render, Vercel)  
- **Badge icons** for license, build status, etc.
::contentReference[oaicite:0]{index=0}
```
