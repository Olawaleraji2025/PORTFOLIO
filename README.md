# Olawale Raji — Portfolio v2

A modern personal portfolio website built with React, Vite, and Tailwind CSS v4. This project showcases Olawale's work, technical stack, featured products, and a contact experience designed for recruiters, collaborators, and clients.

## Overview

This portfolio presents:
- a strong hero section and personal brand statement
- an introduction about experience and approach
- a tools/stack section highlighting frontend and backend capabilities
- featured work and project cards with live demos and GitHub links
- a responsive contact form with Supabase-powered submissions
- graceful fallback behavior that opens the user's email app if Supabase isn't configured

The site is designed to feel polished, fast, and mobile-friendly while remaining easy to maintain and deploy.

## Tech stack

- React 19
- Vite 8
- Tailwind CSS v4
- Supabase JavaScript client
- Lucide React icons
- Netlify / Vercel deployment ready

## Key features

- Responsive single-page portfolio layout
- Fixed top navigation with mobile menu
- Strong call-to-action sections for projects and hiring
- Featured product highlight for Universal Market
- Project gallery with external links to demos and source code
- Contact form that stores messages in a Supabase table
- Fallback to `mailto:` when the contact database is unavailable

## Project structure

- `src/App.jsx` — portfolio page layout and interactive UI
- `src/data.js` — profile information, stack data, featured project, and project cards
- `src/supabase.js` — Supabase client configuration
- `supabase.sql` — database schema for the contact form
- `.env.example` — environment variable template for Supabase
- `vite.config.js` — Vite configuration with Tailwind integration


## Portfolio content highlights

The site highlights:
- Universal Market — a live marketplace project for verified pre-owned gadgets
- multiple additional projects across business websites and simple web apps
- a technical story centered around React, Tailwind, and full-stack product delivery

## Links

- Website: `https://universalmarket.ng/`
- GitHub: `https://github.com/Olawaleraji2025`
- LinkedIn: `https://linkedin.com/in/olawale-raji-aa7997209`
- X (Twitter): `https://x.com/OlawaleRAJII`
- Email: `olawalesodiq988@gmail.com`

## Notes

This project is a personal portfolio and marketing site intended to present Olawale's work clearly and professionally. It is easy to customize by editing the data file and visual styling to suit a different brand, role, or set of projects.
