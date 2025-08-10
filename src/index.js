const { useState, useEffect } = React;
const { createRoot } = ReactDOM;

// Import all the icons we need
const {
  Plus, Search, Settings, DollarSign, BookOpen, PieChart, Calendar,
  Clock, Target, TrendingUp, Calculator, Bell, Coffee, Sparkles,
  Heart, Star, CreditCard, Wallet, BarChart3, Receipt, Coins,
  AlertCircle, CheckCircle, Timer, FileText, Users, Bookmark,
  Quote, Zap, Map, Link, Upload, Hash
} = lucide;

// Import our main App component
// Note: We'll load this from App.js
const root = createRoot(document.getElementById('root'));

// Load and render the app
fetch('./src/App.js')
  .then(response => response.text())
  .then(code => {
    // Execute the App component code
    eval(code);
    // Render the app
    root.render(React.createElement(StudentDashboard));
  })
  .catch(error => {
    console.error('Error loading app:', error);
    root.render(React.createElement('div', {}, 'Error loading application'));
  });
