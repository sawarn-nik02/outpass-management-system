# Outpass Management Platform

A modern React-based web application for managing student outpass requests with a clean, intuitive interface.

## 🚀 Features

- **User Authentication**: Login system for students
- **Dashboard**: View student profile and current status
- **Outpass Management**: Create and manage outpass requests
- **Activity Log**: Track all outpass history
- **Settings**: Manage account preferences and security settings
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 📋 Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **Build Tool**: Create React App

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/sawarn-nik02/outpass-management-system.git
cd outpass-management-system
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

## 📝 Usage

1. **Login**: Enter any email and password to access the dashboard
2. **View Status**: Check your punch-in time and offence records
3. **Create Outpass**: Click the "Create" button to submit a new outpass request
4. **View Log**: Check your activity history
5. **Settings**: Manage your account preferences

## 🎨 UI Components

- `Header`: Navigation and branding
- `UserCard`: Student profile information
- `StatusCards`: Punch-in status and offence tracking
- `ActionButtons`: Main action buttons
- `LogModal`: Activity history
- `SettingsModal`: Account settings
- `CreateOutpassModal`: Outpass creation form

## 📱 Screenshots

### Login Page
- Clean and intuitive login interface
- Demo credentials available

### Dashboard
- Student information card
- Real-time status updates
- Quick action buttons
- Activity log and settings

## 🔧 Customization

To customize the application:

1. **Change colors**: Modify Tailwind CSS classes in components
2. **Update user data**: Edit the dummy data in `Login.jsx` and `Dashboard.jsx`
3. **Add new features**: Create new components in `src/components/`
4. **Styling**: Use Tailwind CSS utility classes

## 🔐 Security Note

This is a **frontend-only demonstration**. For production use:
- Implement proper backend authentication
- Use JWT tokens
- Add HTTPS
- Validate all inputs
- Implement proper session management

## 📖 Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── UserCard.jsx
│   ├── StatusCards.jsx
│   ├── ActionButtons.jsx
│   ├── LogModal.jsx
│   ├── SettingsModal.jsx
│   └── CreateOutpassModal.jsx
├── pages/
│   ├── Login.jsx
│   └── Dashboard.jsx
├── App.jsx
├── App.css
├── index.js
└── index.css
```

## 🤝 Backend Integration

This frontend is ready to be connected with a FastAPI/Flask backend. Update the API endpoints in:
- `Login.jsx` for authentication
- `Dashboard.jsx` for data fetching
- Individual modals for form submissions

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created by sawarn-nik02

## 📞 Support

For issues and questions, please open an issue on GitHub.