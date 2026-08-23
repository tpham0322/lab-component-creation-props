# Component Library

A reusable React and TypeScript component library built for the Per Scholas React and TypeScript component library lab.

The project demonstrates reusable components, TypeScript interfaces, prop handling, component composition, Tailwind CSS styling, and component testing.

## Features

- Reusable React components
- TypeScript prop interfaces
- Optional props
- Callback functions
- Component composition
- `children` prop support
- Tailwind CSS styling
- Vitest testing
- React Testing Library
- Responsive design

## Components

### AlertBox

Displays customizable alerts for different situations.

Supported alert types:

- Success
- Error
- Warning
- Info

Example:

    <AlertBox
      type="success"
      message="Profile updated successfully!"
      onClose={() => setShowAlert(false)}
    >
      <p>Additional information about the update.</p>
    </AlertBox>

### UserProfileCard

Displays user information such as their name, email, role, and avatar.

Example:

    <UserProfileCard
      user={user}
      showEmail={true}
      showRole={true}
      onEdit={(userId) => alert(`Editing user ${userId}`)}
    >
      <p>Last login: 2 hours ago</p>
    </UserProfileCard>

### ProductDisplay

Displays product information including the product name, price, description, image, and stock status.

Example:

    <ProductDisplay
      product={product}
      showDescription={true}
      showStockStatus={true}
      onAddToCart={(productId) => alert(`Added ${productId} to cart`)}
    >
      <p>Free shipping available</p>
    </ProductDisplay>

## Project Structure

    src/
    ├── components/
    │   ├── AlertBox/
    │   │   ├── AlertBox.tsx
    │   │   └── AlertBox.test.tsx
    │   ├── UserProfileCard/
    │   │   ├── UserProfileCard.tsx
    │   │   └── UserProfileCard.test.tsx
    │   └── ProductDisplay/
    │       ├── ProductDisplay.tsx
    │       └── ProductDisplay.test.tsx
    ├── types/
    │   └── index.ts
    ├── App.tsx
    ├── index.css
    ├── main.tsx
    └── testSetup.ts

## Technologies

- React
- TypeScript
- Vite
- Tailwind CSS
- Vitest
- React Testing Library

## Installation

Clone the repository and install the dependencies:

    git clone <your-repository-url>
    cd component-library
    npm install

## Running the Application

Start the development server:

    npm run dev

Open the local URL provided by Vite in your browser.

## Running Tests

Run the component tests with:

    npm run test

The tests verify:

- Alert message rendering
- Alert children rendering
- Alert close functionality
- User information rendering
- Optional email display
- User edit functionality
- Product information rendering
- Stock status
- Add-to-cart functionality

## Building the Project

Create a production build with:

    npm run build

## TypeScript Interfaces

The component interfaces are defined in:

    src/types/index.ts

The project includes the following types and interfaces:

- `AlertType`
- `AlertBoxProps`
- `User`
- `UserProfileCardProps`
- `Product`
- `ProductDisplayProps`

These interfaces provide type safety and make the components easier to reuse and maintain.

## Component Composition

The components support composition through the `children` prop.

For example:

    <UserProfileCard user={user}>
      <p>Last login: 2 hours ago</p>
    </UserProfileCard>

Additional content can be placed inside the component without modifying the component's implementation.

## Testing

Each component has its own test file using Vitest and React Testing Library.

Tests render the components, verify displayed content, test optional props, and simulate user interactions such as clicking buttons.

## Author

Truong Pham
