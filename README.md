# E-Commerce Cart with Redux Toolkit

This is a simple e-commerce cart app built with **React** and **Redux Toolkit** to manage state. It allows users to view a list of products, manage cart item quantities, and calculate the total number of items in the cart using Redux.

## Features

- **Product List**: Displays products fetched from an external API.
- **Cart Management**: Add/remove items from the cart with `+` and `-` buttons.
- **Cart Total**: Displays the total number of items in the cart.
- **Responsive**: Built with **Bootstrap** for mobile-friendly design.

## Tech Stack

- **React**
- **Redux Toolkit**
- **React-Redux**
- **Bootstrap**

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/sandhyachan/react-redux-cart.git
    ```

2. **Install dependencies**:
    ```bash
    cd reactreduxcart
    npm install
    ```

3. **Run the development server**:
    ```bash
    npm run dev
    ```

    Open [http://localhost:5173](http://localhost:5173) in your browser.

## Core Redux Concepts

- **ProductSlice**: Manages the product list fetched from an external API.
- **CountSlice**: Tracks item quantities in the cart using `increment` and `decrement` actions.
- **Selectors**: `cartItem` calculates the total number of items in the cart.

## How It Works

1. **Product Data**: Products are fetched from an API and stored in Redux.
2. **Cart Management**: `increment` and `decrement` actions modify the item quantities in the cart.
3. **Cart Total**: The total number of items is calculated using the `cartItem` selector.
