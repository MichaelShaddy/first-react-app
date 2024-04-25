import { createRoot } from 'react-dom/client';
import React from 'react';
import { App } from './app.js';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(React.createElement(App));

