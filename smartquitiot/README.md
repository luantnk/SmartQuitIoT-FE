# SmartQuit - Your Journey to a Smoke-Free Life

SmartQuit is a comprehensive quit smoking application designed to help users successfully quit smoking through personalized support, progress tracking, and community engagement.

## 🚀 Features

### Core Functionality
- **Personalized Quit Plans**: AI-powered quit plans tailored to individual needs
- **Progress Tracking**: Monitor smoke-free days, money saved, and health improvements
- **Smoking Diary**: Daily logging of cravings, mood, and health metrics
- **Achievement System**: Gamified experience with badges and milestones
- **Community Support**: Connect with others on similar journeys

### Advanced Features
- **AI Chatbot**: Personalized advice and support
- **Health Monitoring**: Track improvements in sleep, breath, and overall health
- **Financial Tracking**: Monitor money saved by quitting smoking
- **IoT Integration**: Connect smart devices for health data synchronization
- **Coach Support**: Direct access to quit smoking coaches

### Membership Tiers
- **Free**: Basic features to get started
- **Premium**: Enhanced analytics and personalized support
- **Premium Plus**: 1-on-1 coaching and exclusive features

## 🛠️ Technology Stack

- **Frontend**: Next.js 14 with App Router
- **UI Framework**: Ant Design
- **Styling**: Tailwind CSS
- **State Management**: TanStack Query
- **Forms**: React Hook Form with Zod validation
- **Server Actions**: Next Safe Action
- **TypeScript**: Full type safety

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── actions/           # Server actions
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── home/             # Homepage sections
│   ├── layout/           # Layout components
│   └── ui/               # Reusable UI components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── providers/            # Context providers
├── services/             # API services
└── types/                # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/smartquit.git
cd smartquit
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📱 Key Features Implementation

### FE-01: Platform Information
- Homepage displays mission, vision, and core values
- About section with company information

### FE-02: Leaderboard System
- Daily/weekly/monthly achievement rankings
- Points system and badges
- Community motivation features

### FE-03: Blog & Stories
- User-generated content
- Success stories and tips
- Community engagement features

### FE-04: Resources & Guides
- Educational materials
- Video tutorials and documents
- Personalized recommendations

### FE-05: Organization Details
- Team information
- Contact details
- Social media integration

### FE-06: Member Registration
- User account creation
- Profile management
- Secure authentication

### FE-07: Membership Packages
- Free, Premium, and Premium Plus tiers
- Feature comparison
- Upgrade paths

### FE-08: Payment Processing
- Secure payment integration
- Multiple payment methods
- Subscription management

### FE-09: Email Notifications
- Registration confirmations
- Payment confirmations
- Progress reminders

### FE-10: Smoking Habits Recording
- Cigarette brand tracking
- Price and consumption monitoring
- Frequency analysis

### FE-11: Financial Impact Tracking
- Money saved calculations
- Spending analysis
- Financial motivation

### FE-12: Habit Management
- Edit and update records
- Historical data access
- Progress validation

### FE-13: Smoking Diary
- Daily status logging
- Craving tracking
- Health metrics monitoring

### FE-14: Progress Analytics
- Smoke-free day counting
- Streak tracking
- Relapse recovery statistics

### FE-15: Savings Calculator
- Money saved estimates
- Historical consumption analysis
- Financial projections

### FE-16: Health Benefits Tracking
- Milestone-based tracking
- Health improvement timeline
- Progress visualization

### FE-17: Progress Visualization
- Charts and trends
- Daily/weekly/monthly views
- Interactive dashboards

### FE-18: Quit Plan Milestones
- Goal setting
- Progress tracking
- Achievement celebrations

### FE-19: Data Integrity
- Audit trails
- Edit history
- Metric recalculation

### FE-20: IoT Integration
- Smart device connectivity
- Health data synchronization
- External app integration

### FE-21: AI Chatbot
- Personalized advice
- 24/7 support
- Learning algorithms

### FE-22: Coach Support
- Direct messaging
- Personalized recommendations
- Expert guidance

### FE-23: Profile Management
- Account updates
- Preference settings
- Privacy controls

### FE-24: Motivational Notifications
- Smart reminders
- Achievement celebrations
- Progress milestones

### FE-25: AI Quit Plans
- Personalized strategies
- Adaptive recommendations
- Success optimization

### FE-26: Mission Suggestions
- AI-powered recommendations
- Diary-based insights
- Personalized challenges

### FE-27: Achievement System
- Badge unlocking
- Point accumulation
- Milestone rewards

### FE-28: Community Engagement
- Achievement sharing
- Story contributions
- Tip sharing

## 🎨 Design System

The application uses Ant Design components with a custom Tailwind CSS theme:

- **Primary Colors**: Blue (#1890ff)
- **Success Colors**: Green (#52c41a)
- **Warning Colors**: Orange (#faad14)
- **Error Colors**: Red (#ff4d4f)
- **Typography**: Inter font family
- **Spacing**: Consistent 8px grid system

## 🔒 Security Features

- Server-side validation with Zod
- Secure authentication
- Protected API routes
- Input sanitization
- CSRF protection

## 📊 Performance Optimization

- Next.js App Router for optimal routing
- Image optimization
- Code splitting
- Lazy loading
- Caching strategies

## 🧪 Testing

- Component testing with Jest
- E2E testing with Playwright
- API testing with Supertest
- Accessibility testing

## 📈 Analytics & Monitoring

- User behavior tracking
- Performance monitoring
- Error tracking
- Conversion analytics

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Configure environment variables
3. Deploy automatically on push

### Other Platforms
- Netlify
- AWS Amplify
- Docker containers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Ant Design for the UI components
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- All contributors and supporters

## 📞 Support

- **Email**: support@smartquit.com
- **Documentation**: [docs.smartquit.com](https://docs.smartquit.com)
- **Community**: [community.smartquit.com](https://community.smartquit.com)

---

Made with ❤️ for a healthier world
