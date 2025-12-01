

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

Troubleshooting Vercel builds
------------------------------

If you see an error like "Command \"npm run build\" exited with 126" when deploying to Vercel, the build tool (vite) may not be available during Vercel's install step. Vercel sometimes does not install devDependencies during the install phase.

Options to fix this:

- Move build tools (like `vite`) into `dependencies` instead of `devDependencies` (this repo already includes `vite` as a dependency).
- Or configure Vercel to install devDependencies by setting an install command in the project settings or by adding `vercel.json` with `"installCommand": "npm ci --include=dev"`.

If you hit a local Windows permission error while running `npm ci` (EPERM / file locking), close running dev servers and editors that might be using native binaries (esbuild) or temporarily disable antivirus that may lock files.

  
