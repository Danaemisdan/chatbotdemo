# How to Deploy to Vercel

Your chatbot is ready to be hosted! Follow these steps to deploy it to Vercel for free.

## 1. Push to GitHub
First, you need to push your code to a GitHub repository.
1. Create a new repository on GitHub (e.g., `admission-india-chatbot`).
2. Run these commands in your terminal:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/admission-india-chatbot.git
   git branch -M main
   git push -u origin main
   ```

## 2. Deploy on Vercel
1. Go to [Vercel](https://vercel.com) and log in.
2. Click **Add New** > **Project**.
3. Select **Import** next to your `admission-india-chatbot` repository.
4. In the **Configure Project** screen, find the **Environment Variables** section.

## 3. Add Environment Variables (CRITICAL)
You must add the following variables for the chatbot to work:

| Key | Value |
|-----|-------|
| `OPENROUTER_API_KEY` | `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` |
| `OPENAI_BASE_URL` | `https://openrouter.ai/api/v1` |

*(Note: Copy the key exactly as it is in your `.env.local` file)*

## 4. Deploy
Click **Deploy**. Vercel will build your site. Once done, you will get a live URL (e.g., `https://admission-india-chatbot.vercel.app`).

## Troubleshooting
- If the chat says "Unable to verify" or errors out, double-check your Environment Variables in Vercel settings.
- You can view build logs in the Vercel dashboard if something goes wrong.
