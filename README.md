# My Node Package

This is a Node.js package that includes various regex patterns categorized into different files, along with tests to validate their functionality.

## Installation

To install the package, clone the repository and run:

```
npm install
```

## Usage

You can import the regex patterns from the respective category files in your Node.js application. For example:

```javascript
const category1Regex = require('./src/categories/category1').default;
```

## Testing

To run the tests for the regex patterns, use the following command:

```
npm test
```

Make sure you have Mocha and Chai installed as dev dependencies.

## Project Structure

```
my-node-package
├── src
│   ├── categories
│   │   ├── category1.js
│   │   ├── category2.js
│   │   └── category3.js
│   └── tests
│       ├── category1.test.js
│       ├── category2.test.js
│       └── category3.test.js
├── package.json
├── .gitignore
└── README.md
```

## License

This project is licensed under the MIT License.