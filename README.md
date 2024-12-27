# Instagram using ejs templates

This repository contains an Instagram Clone built using **Node.js**, **Express.js**, **EJS**, and **CSS**. The project demonstrates how to dynamically load user data from a JSON file and render it into a responsive, grid-based user interface with hover effects for posts.

---

## Features

- Dynamic data rendering using **EJS** templates.
- Responsive grid layout for posts.
- Hover effects for interactive UI.
- Dark-themed styling using CSS.

---

## Setup Instructions

1. **Clone the Repository**

```bash
   git clone https://github.com/cb-786/insta_using_ejs.git
   cd insta_using_ejs
```

2. **Install Dependencies**

```bash
   npm install
```

3. **Run the Application**

```bash
   node index.js
```

4. **Open in Browser**

```
   http://localhost:3000
```

---

## JSON Data Input

The user data is stored in a JSON file, such as `data.json`. Example structure:

```json
{
  "name": "John Doe",
  "followers": 120,
  "following": 180,
  "posts": [
    {
      "image": "images/post1.jpg",
      "likes": 200,
      "comments": 30
    },
    {
      "image": "images/post2.jpg",
      "likes": 150,
      "comments": 20
    }
  ]
}
```

### Passing JSON Data

We use **Express.js** to fetch and send JSON data to the **EJS** template:

```javascript
app.get('/profile', (req, res) => {
  const data = require('./data.json');
  res.render('profile', { data });
});
```

---

## CSS Features

The CSS file applies the following styles:

1. **Hover Effect on Posts**

   - Posts scale up slightly and add a shadow when hovered.

   ```css
   .post:hover {
       transform: scale(1.05);
       box-shadow: 0 8px 15px rgba(0, 0, 0, 0.9);
   }
   ```

2. **Responsive Grid Layout**

   - Posts are displayed in a flexible grid layout.

   ```css
   .posts {
       display: grid;
       grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
       gap: 20px;
   }
   ```

3. **Dark Theme**

   - The background is set to black with contrasting light text.

   ```css
   body {
       background-color: #000;
       color: #fff;
   }
   ```

---

## Dependencies

- **Express**: Handles server-side routing.
- **EJS**: Renders dynamic templates.
- **Body-parser**: Parses incoming request bodies.
- **Node.js**: JavaScript runtime.

Install dependencies using:

```bash
npm install express ejs body-parser
```

---

## Folder Structure

```
insta_using_ejs/
├── views/
│   ├── profile.ejs
├   ├── data.json
├── index.js
├── package.json
└── README.md 
```
