# Cribeasy Landing Page

A modern, responsive landing page built with Next.js, React, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the website directory:
```bash
cd website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3500](http://localhost:3500) in your browser to see the landing page.

### Accessing from Other Devices on Your Network

The development server is configured to be accessible from other devices on your local network:

1. Make sure your device and other devices are on the same Wi-Fi network
2. Find your computer's local IP address:
   - **Windows**: Open Command Prompt and run `ipconfig`, look for "IPv4 Address"
   - **Mac/Linux**: Open Terminal and run `ifconfig` or `ip addr`, look for your network interface IP
3. On other devices, open a browser and navigate to: `http://YOUR_IP_ADDRESS:3500`
   - Example: `http://192.168.1.100:3500`

**Note**: Make sure your firewall allows incoming connections on port 3500.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production version
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check for code issues

## Project Structure

```
website/
├── app/
│   ├── globals.css      # Global styles with Tailwind
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Landing page component
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── next.config.js       # Next.js configuration
```

## Features

- Modern, responsive design
- Smooth animations and transitions
- SEO-friendly structure
- TypeScript for type safety
- Tailwind CSS for styling

## Customization

You can customize the landing page by editing:
- `app/page.tsx` - Main landing page content
- `app/globals.css` - Global styles and theme
- `tailwind.config.ts` - Tailwind theme customization

