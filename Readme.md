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


### Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/himanshuKr7/infocus-news.git
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

## Screenshots

![image](https://github.com/himanshuKr7/Infocus_News/assets/132695128/5d37345a-524f-4014-a2ff-709ea2cb3c91)

![image](https://github.com/himanshuKr7/Infocus_News/assets/132695128/0a8be38e-3542-4d3d-9102-8a8987cb4075)



## License
Distributed under the MIT License. See `LICENSE` for more information.

---

Thank you for using InFocus News! If you have any questions or feedback, please don't hesitate to reach out.
