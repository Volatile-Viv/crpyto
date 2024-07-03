# Crypto-Tracer

Crypto-Tracer is a responsive web application that allows users to search and view cryptocurrency data, including name, symbol, price, total volume, percentage change, and market cap. The application fetches data from the CoinGecko API and displays it in a paginated format for ease of use.

## Features

- Search for cryptocurrencies by name
- View key details like symbol, price, total volume, percentage change, and market cap
- Paginated display of cryptocurrency data
- Responsive design for mobile and desktop views

## Technologies Used

- React
- Axios
- CoinGecko API
- CSS

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Volatile-Viv/crpyto-tracer.git
```

2. Navigate to the project directory:

```bash
cd crypto-tracer
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## Usage

1. Open the application in your browser.
2. Use the search bar to find cryptocurrencies by name.
3. Navigate through the pages to view more cryptocurrencies.
4. The application will display the name, symbol, price, total volume, percentage change, and market cap for each cryptocurrency.

## File Structure

```
crypto-tracer/
├── public
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── Coin.css
│   ├── Coin.jsx
│   ├── main.jsx
├── package.json
├── index.html
├── README.md
```

- `App.jsx`: Main component that fetches data and renders the application.
- `Coin.jsx`: Component that displays individual cryptocurrency details.
- `App.css`: Styles for the main application.
- `Coin.css`: Styles for the Coin component.

## API

This application uses the CoinGecko API to fetch cryptocurrency data. For more details, visit the [CoinGecko API documentation](https://www.coingecko.com/en/api).

## License

This project is licensed under the MIT License.

## Acknowledgements

- [CoinGecko](https://www.coingecko.com/) for providing the cryptocurrency data API.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## Contact

For any questions or feedback, please contact [creatorvivek18@gmail.com].
