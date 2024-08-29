
# cstyle-ui

## Overview

`cstyle-ui` is a custom React component library designed to provide a variety of UI elements like buttons, cards, inputs, and more. This library aims to make building beautiful and consistent UIs easier and more efficient.

## Installation

To install the `cstyle-ui` package, run:

```bash
npm install cstyle-ui
```

## Usage

You can use components directly by importing them into your project:

```jsx
import React from 'react';
import Button1 from 'cstyle-ui/Components/Button1';

function App() {
    return (
        <>
      <Button1 label="Click me" onClick={() => alert('Button clicked!')} />
    </>
  );
}

export default App;
```

### Available Components

- **Button1**: A simple button component with customizable label and styles.

More components, such as `Cards`, `Inputs`, and others, will be added in future updates.

## Development Status

The library is currently in its early stages and only includes the `Button1` component. Many more components and features will be added in upcoming versions.

## Contribution

Contributions are welcome! If you’d like to contribute, please fork the repository and create a pull request. Feel free to open issues for any bugs or feature requests.

## License

This project is licensed under the [Apache 2.0 License](LICENSE).

*For more details and full documentation, visit the official website (coming soon!).*

**Note:** This package is still under development. Full documentation will be available on the official website soon.
