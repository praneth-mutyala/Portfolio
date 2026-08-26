# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repo layout
- The actual project — a React/Vite portfolio site — lives entirely in `frontend/`. Run all commands (`npm run dev`, `npm run build`, `npm run lint`) from inside `frontend/`, not from this root.
- See `frontend/CLAUDE.md` for the real stack details, commands, architecture, and conventions.
- The `package.json`/`package-lock.json`/`node_modules` at this root are vestigial (leftover `tailwindcss` / `@tailwindcss/vite` install predating the `frontend/` app) — not part of the build, don't add dependencies here.
- Not a git repository (no `.git` at root or in `frontend/`) — don't attempt git operations.
