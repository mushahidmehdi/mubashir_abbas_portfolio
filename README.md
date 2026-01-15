# Mubashir Abbas Portfolio - Complete Setup Guide

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Prerequisites

Before you begin, make sure you have the following installed on your computer:

### Node.js Installation

1. Visit https://nodejs.org/
2. Download the **LTS version** (recommended for most users)
3. Run the installer and follow the prompts
4. Verify installation by opening your terminal and typing:

```bash
node --version
npm --version
```


### Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/mushahidmehdi/mubashir_abbas_portfolio.git
```

Navigate into the project directory:

```bash
cd mubashir_abbas_portfolio
```

### Install Dependencies

Install all required packages:

```bash
npm install
```

This will download all necessary dependencies listed in `package.json`.

## Running the Application

### Start the Development Server

Run the development server:

```bash
npm run dev
```

The server will start and you'll see output like:

```
▲ Next.js 14.x.x
- Local:        http://localhost:3000
- Ready in 2.3s
```

### View Your Portfolio

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

**Keep the terminal window open** - closing it will stop the server.

## Editing the Homepage

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Open the Project in VS Code

1. Open VS Code
2. Click **File → Open Folder**
3. Select the `mubashir_abbas_portfolio` folder
4. Click **Open**

### Locate the Main File

In the sidebar, navigate to:

```
app/
└── page.tsx  ← This is the main file you'll edit
```

### Understanding app/page.tsx

This file contains the homepage content. Basic structure:

```typescript
export default function Home() {
  return (
    <div>
      <h1>Your Heading</h1>
      <p>Your paragraph text</p>
    </div>
  );
}
```

### Making Changes

1. Click on `app/page.tsx` to open it
2. Find the text you want to change
3. Edit the content
4. Save the file: `Ctrl+S` (Windows/Linux) or `Cmd+S` (Mac)
5. Check your browser - the page updates automatically!

### Common HTML Elements

 
### Adding Images

1. Place your images in the `public/` folder
2. Reference them in your code:

 



## Project Structure

```
mubashir_abbas_portfolio/
├── app/
│   ├── page.tsx       ← Main homepage file (EDIT THIS)
│   ├── layout.tsx     ← Overall layout
│   └── globals.css    ← Global styles
├── public/            ← Static files (images, etc.)
├── node_modules/      ← Dependencies (don't edit)
├── package.json       ← Project configuration
└── README.md          ← This file
```

## Fonts

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Stopping the Server

To stop the development server:

- Press `Ctrl+C` in the terminal

To start it again:

```bash
npm run dev
```

## Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Run production build
npm run lint     # Check code quality
```

 
### Changes Not Showing

1. Make sure you saved the file (`Ctrl+S` or `Cmd+S`)
2. Check the terminal for errors
3. Try hard refresh: `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac)

### Missing Dependencies

If you get module errors:

```bash
npm install
```
 
