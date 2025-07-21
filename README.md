# Todolist

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Atomic Design Architecture

This project follows the principles of **Atomic Design**, by breaking down the UI into smaller, reusable components.
The component hierarchy is organized as follows:

-   **Atoms**: `button`, `checkbox`, `icon`, `input`.

-   **Molecules**: `task-input` (combines an input and a button), `task-item` (combines a checkbox, an input, a label and a button).

-   **Organisms**: `task-list` (combines the `task-input` and `task-item` molecules).

-   **Templates**: `empty-state` (defines the layout when there are no tasks).

-   **Pages**: `todo` (the main page of the application).

## UI Framework

This project uses **UIkit**, a lightweight and modular front-end framework for web interfaces. It was chosen to speed up the styling of atomic components and to take advantage of its visually appealing icons.
