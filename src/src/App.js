// Widget Components for Finance
const ExpenseTracker = ({ settings = {} }) => {
  return React.createElement('div', {
    className: "bg-gradient-to-br from-amber-900/20 to-orange-900/10 p-4 rounded-xl border border-amber-800/30 shadow-lg hover:shadow-xl transition-shadow duration-300"
  }, [
    React.createElement('div', {
      key: 'header',
      className: "flex items-center gap-2 mb-3"
    }, [
      React.createElement(DollarSign, { key: 'icon', className: "w-5 h-5 text-amber-400" }),
      React.createElement('h3', { key: 'title', className: "text-amber-200 font-medium" }, 'Expense Tracker')
    ]),
    React.createElement('div', {
      key: 'content',
      className: "space-y-2"
    }, [
      React.createElement('input', {
        key: 'input1',
        type: 'text',
        placeholder: 'What did you spend on?',
        className: "w-full bg-amber-950/30 border border-amber-800/30 rounded-lg px-3 py-2 text-amber-100 placeholder-amber-300/50 focus:border-amber-600 focus:outline-none transition-colors duration-300"
      }),
      React.createElement('div', {
        key: 'row',
        className: "flex gap-2"
      }, [
        React.createElement('input', {
          key: 'amount',
          type: 'number',
          placeholder: '$0.00',
          className: "flex-1 bg-amber-950/30 border border-amber-800/30 rounded-lg px-3 py-2 text-amber-100 placeholder-amber-300/50 focus:border-amber-600 focus:outline-none transition-colors duration-300"
        }),
        React.createElement('select', {
          key: 'category',
          className: "bg-amber-950/30 border border-amber-800/30 rounded-lg px-3 py-2 text-amber-100 focus:border-amber-600 focus:outline-none transition-colors duration-300"
        }, [
          React.createElement('option', { key: 'food' }, 'Food'),
          React.createElement('option', { key: 'transport' }, 'Transport'),
          React.createElement('option', { key: 'books' }, 'Books'),
          React.createElement('option', { key: 'entertainment' }, 'Entertainment')
        ])
      ]),
      React.createElement('button', {
        key: 'button',
        className: "w-full bg-amber-700/40 hover:bg-amber-600/40 text-amber-200 py-2 rounded-lg transition-all duration-300 hover:scale-105"
      }, 'Add Expense')
    ])
  ]);
};

// Continue with more widget components...
// (I'll give you the rest in the next step)

// Main StudentDashboard component
const StudentDashboard = () => {
  const [currentPage, setCurrentPage] = useState('finance');
  const [showSidebar, setShowSidebar] = useState(false);

  return React.createElement('div', {
    className: "min-h-screen bg-gradient-to-br from-stone-900 via-amber-950 to-orange-950",
    style: { backgroundColor: '#1c1a17' }
  }, [
    // Navigation
    React.createElement('nav', {
      key: 'nav',
      className: "bg-stone-900/80 backdrop-blur-sm border-b border-amber-800/30 sticky top-0 z-50"
    }, [
      React.createElement('div', {
        key: 'nav-container',
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      }, [
        React.createElement('div', {
          key: 'nav-content',
          className: "flex items-center justify-between h-16"
        }, [
          // Logo section
          React.createElement('div', {
            key: 'logo',
            className: "flex items-center gap-3"
          }, [
            React.createElement('div', {
              key: 'logo-icons',
              className: "flex items-center gap-2"
            }, [
              React.createElement(Coffee, { key: 'coffee', className: "w-6 h-6 text-amber-400" }),
              React.createElement(Sparkles, { key: 'sparkles', className: "w-4 h-4 text-amber-300 animate-pulse" })
            ]),
            React.createElement('h1', {
              key: 'title',
              className: "text-xl font-bold text-amber-200",
              style: { fontFamily: 'Quicksand, sans-serif' }
            }, 'Study Lounge ☕')
          ]),
          
          // Page tabs
          React.createElement('div', {
            key: 'tabs',
            className: "flex bg-stone-800/40 rounded-xl p-1"
          }, [
            React.createElement('button', {
              key: 'finance-tab',
              onClick: () => setCurrentPage('finance'),
              className: `px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                currentPage === 'finance'
                  ? 'bg-amber-700/40 text-amber-200 shadow-lg'
                  : 'text-amber-300 hover:text-amber-200 hover:bg-stone-700/40'
              }`
            }, [
              React.createElement(DollarSign, { key: 'finance-icon', className: "w-4 h-4" }),
              'Finances'
            ]),
            React.createElement('button', {
              key: 'school-tab',
              onClick: () => setCurrentPage('school'),
              className: `px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                currentPage === 'school'
                  ? 'bg-amber-700/40 text-amber-200 shadow-lg'
                  : 'text-amber-300 hover:text-amber-200 hover:bg-stone-700/40'
              }`
            }, [
              React.createElement(BookOpen, { key: 'school-icon', className: "w-4 h-4" }),
              'School'
            ])
          ]),

          // Add button
          React.createElement('button', {
            key: 'add-btn',
            onClick: () => setShowSidebar(!showSidebar),
            className: "bg-amber-700/40 hover:bg-amber-600/40 text-amber-200 p-2 rounded-lg transition-colors duration-300"
          }, React.createElement(Plus, { className: "w-5 h-5" }))
        ])
      ])
    ]),

    // Main content area
    React.createElement('div', {
      key: 'main',
      className: "flex-1 p-6"
    }, [
      React.createElement('div', {
        key: 'content',
        className: "max-w-7xl mx-auto"
      }, [
        // Page header
        React.createElement('div', {
          key: 'header',
          className: "mb-6"
        }, [
          React.createElement('h2', {
            key: 'page-title',
            className: "text-3xl font-bold text-amber-200 mb-2 flex items-center gap-3"
          }, currentPage === 'finance' ? [
            React.createElement(DollarSign, { key: 'finance-icon', className: "w-8 h-8 text-amber-400" }),
            'Financial Dashboard 💰'
          ] : [
            React.createElement(BookOpen, { key: 'school-icon', className: "w-8 h-8 text-blue-400" }),
            'School Dashboard 📚'
          ]),
          React.createElement('p', {
            key: 'subtitle',
            className: "text-amber-300/70"
          }, currentPage === 'finance' 
            ? '☕ Track your expenses, savings, and financial goals in your cozy corner.'
            : '📖 Organize your studies, assignments, and academic life with ease.'
          )
        ]),

        // Sample widget
        React.createElement('div', {
          key: 'widgets',
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        }, [
          React.createElement(ExpenseTracker, { key: 'sample-widget' })
        ])
      ])
    ])
  ]);
};

// Make the component available globally
window.StudentDashboard = StudentDashboard;
