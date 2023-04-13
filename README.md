# A ChatGPT plugin

I don't have a good idea about what to do with it. It's currently a playground for me.

## How to use

0. Prerequisite: Access to [ChatGPT plugin](https://openai.com/blog/chatgpt-plugins). Currently a waitlist.
1. Run this app locally (`npm i`, then `npm run dev`), or deploy it to a hosting service (Vercel, etc. - https://chatgpt-plugin.vercel.app/reports/Doordash)
1. Open `chat.openai.com`, select Model of `Plugins`, then in the 2nd dropdown `Plugin store +`.
1. Select `Develop your own plugin` at the bottom of the dialog. Enter the URL `localhost:3000`, or whatever the deployed URL is.
1. Install it, it should be ready to use. Select it in the plugin dropdown and start conversation.

## How to develop

- Build new APIs under `/src/routes/api/`.
- Update `/public/openapi.yaml` to reflect API changes.
  - Uninstall and re-install it on `chat.openai.com` to refresh changes.
