# ReactJS Google Flights App

A simple flight search application built with React.js. This project is a clone of Google Flights, developed as part of a job assessment with a strict one-day deadline. The challenge was to implement as much functionality as possible within the given time constraint.


## **Screenshot**

![Google Flight Screenshot](./screenshot.png)


## **Live Demo**

You can try out the live demo of this project here: **[Live Demo Link](https://reactjs-google-flights-app.vercel.app/)**


## **Features**

- **Responsive Design**: Optimized for both desktop and mobile devices.
- **APIs**:
   - **Current Location Based on IP**: Fetches the user's current location using [ipapi.co](https://ipapi.co/).
   - **Flight Data**: Uses the [Sky Scrapper API](https://rapidapi.com/apiheya/api/sky-scrapper) to get flight data for the current location.
  

## **Technologies Used**

- **React.js**: Built using React for a fast and interactive UI.
- **Material UI**: Utilized for styling and pre-built components.
- **Context API**: Managed state for search parameters.
- **React Router**: Handled page navigation and routing.

## **Structure**

```sh
reactjs-google-flights-app/
├── public/           # Static assets and index.html
├── src/              # Main source code
│   ├── assets/       # Images, icons, and static assets
│   ├── components/   # Reusable UI components
│   ├── contexts/     # React context providers
│   ├── hooks/        # Custom hooks for data fetching and utilities
│   ├── pages/        # Page components
│   ├── theme/        # Theme-related configurations
│   ├── App.jsx       # Root component
│   ├── main.jsx      # Entry point
│   ├── index.css     # Global styles
├── README.md         # Project documentation
├── LICENSE           # License information
├── package.json      # Project dependencies and scripts
├── vite.config.js    # Vite configuration
└── eslint.config.js  # ESLint configuration
```

## **Installation**

### **Using Create React App**

To get started with the project locally using Create React App, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/EthanEDev/reactjs-google-flights-app.git
   ```
2. Navigate to the project directory:
   ```sh
   cd reactjs-google-flights-app
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

### **Using Vite**

If the project uses Vite instead of Create React App, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/EthanEDev/reactjs-google-flights-app.git
   ```
2. Navigate to the project directory:
   ```sh
   cd reactjs-google-flights-app
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```


## **Contributing**

Contributions are welcome! If you have suggestions for improvements or find any issues, feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature-branch
   ```
3. Commit your changes:
   ```sh
   git commit -am 'Add new feature'
   ```
4. Push to the branch:
   ```sh
   git push origin feature-branch
   ```
5. Create a new Pull Request.


## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## **Contact**

If you have any questions, feel free to reach out via GitHub issues or at **ethan.ekhtiyar@gmail.com**.

