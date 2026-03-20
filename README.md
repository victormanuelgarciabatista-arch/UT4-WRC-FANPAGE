# 📄 WRC Rally Islas Canarias 2026 - SPA Project

## 📝 About the Project

This is a project for my Web Development class. It is a simple website (SPA).
I made it with **React**, **Vite**, and **CSS**.
The website is about the **WRC Rally Islas Canarias 2026**.
I want to show the cars and the event. The website looks good on phones and computers (responsive design).

### Sections
- Home page with a menu, a big text (Hero), and a small gallery.
- A Gallery of Rally cars. It uses a JSON.
- A Contact page. It has a form. It saves messages in Firebase.
- A News page with an RSS feed file.

## 🌐 Live Website

You can see the website here: **[https://base-de-datos-wrc.web.app](https://base-de-datos-wrc.web.app)**

## 🎨 Design Colors

I looked at the **Official WRC Website**. I also used the colors of the **Canary Islands flag** (Yellow, Blue, White). These colors make the website look nice.

## 🛠️ Tools and Libraries

I used these tools to build the website:
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [CSS3](https://developer.mozilla.org/es/docs/Web/CSS) (Flexbox and Grid)
- [Leaflet](https://leafletjs.com/) and [React-Leaflet](https://react-leaflet.js.org/) for the map on the Contact page.
- [Firebase Realtime Database](https://firebase.google.com/) to save the contact messages.

## 📚 Help and Tutorials

These websites helped me a lot:
- I used this template for the README: [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
- I looked at this website for footer ideas: [Creativos Online](https://www.creativosonline.org/25-ejemplos-fantasticos-de-footers-en-diseno-web.html)
- I learned how to use good website images here: [Shopify Blog](https://www.shopify.com/es/blog/imagenes-para-web-tamano#)
- I used this artificial intelligence to help with colors: [LogoAI](https://www.logoai.com/)
- I read the official guides to make the RSS feed in React.

## 📂 Project Files

    /src
    ├── assets/
    ├── components/
    │   ├── footer/
    │   ├── gallery-item/
    │   ├── header/
    │   ├── map/
    │   └── modal/
    ├── pages/
    │   ├── contact/
    │   ├── gallery/
    │   ├── home/
    │   ├── legal/
    │   └── news/
    ├── services/
    │   └── firebase.service.js
    ├── App.jsx
    ├── App.css
    ├── index.css
    └── main.jsx

## 🆕 New Things

- **Hamburger Menu:** The menu works on small phones.
- **Firebase Form:** You can send a message. It saves in a database. A pop-up (modal) says "thank you".
- **News and RSS:** There is a news page. You can read the RSS feed in `public/rss.xml`.
- **Firebase Hosting:** The website is live on the internet.
- **Data (CRUD):** You can create, read, update, and delete messages.

## ✅ How to start

1. Download this code.
2. Open terminal and write: `npm install`
3. Then write: `npm run dev`
4. Open your browser and go to the link (`http://localhost:5173`).

## 🙏 Thank you

- Thank you to my classmates for helping me.
- Thank you to my teacher **Tiburcio** for approving my work.

## 👤 Author

**Víctor Manuel García Batista**  
GitHub: https://github.com/victormanuelgarciabatista-arch
Website url: https://base-de-datos-wrc.web.app/

## 📄 License

This project uses the MIT License.
