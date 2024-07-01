# InFocus News 

## Introduction
**InFocus News** is a responsive web application that provides the latest news updates. The news is fetched dynamically from the Open News API, ensuring that users receive the most current information.

## Features
- **Responsive Design**: Compatible with various devices, including desktops, tablets, and mobile phones.
- **Dynamic Content**: News articles are fetched and displayed in real-time using the Open News API.
- **Search Functionality**: Users can search for news articles based on keywords.
- **Category Filtering**: News can be filtered by categories such as Technology, Sports, Business, and more.

## Technologies Used
- **HTML**: For structuring the web pages.
- **CSS**: For styling the web pages.
- **JavaScript**: For fetching and displaying news articles dynamically.
- **Open News API**: For retrieving the latest news articles.

## Getting Started
To get a local copy of InFocus News up and running, follow these steps:

### Prerequisites
- A modern web browser
- A code editor (e.g., VS Code, Sublime Text)

### Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/infocus-news.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd infocus-news
   ```
3. **Open the `index.html` file in your preferred web browser:**
   ```sh
   open index.html
   ```

## API Integration
InFocus News uses the Open News API to fetch news articles. You need to sign up for an API key at [Open News API](https://newsapi.org/) and replace the placeholder in the JavaScript code with your actual API key.

### Example:
```javascript
const apiKey = 'YOUR_API_KEY_HERE';
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
```

## File Structure
```
infocus-news/
├── style.css
├── script.js
├── index.html
├── README.md
```

- **css/**: Contains all the CSS files.
- **js/**: Contains all the JavaScript files.
- **index.html**: The main HTML file for the webpage.
- **README.md**: The README file for the project.

## Usage
1. **Open the `index.html` file in a web browser:**
   ```sh
   open index.html
   ```
2. **Explore the latest news articles**: Use the navigation bar to filter news by category or use the search bar to find specific news articles.

## Contributing
Contributions are welcome! Please follow these steps to contribute:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
Distributed under the MIT License. See `LICENSE` for more information.

---

Thank you for using InFocus News! If you have any questions or feedback, please don't hesitate to reach out.
