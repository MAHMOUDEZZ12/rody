# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

## AI Features

This application uses Genkit and the Gemini API for generative AI features. To enable these features, you must provide a Gemini API key.

**This is a required step to fix the "API key not valid" error and see the AI-generated images.**

### 1. Local Development Setup

For running the app on your local machine (`npm run dev`).

1.  Create your free API key at [Google AI Studio](https://aistudio.google.com/app/apikey).
2.  Create a file named `.env.local` in the project root.
3.  Add the following line to the file, replacing `YOUR_API_KEY_HERE` with your actual key:

```
GEMINI_API_KEY="YOUR_API_KEY_HERE"
```

### 2. Production Deployment Setup (Crucial for Live Site)

For the AI features to work on your deployed Firebase App Hosting site, you must add the API key as a **secret**.

1.  Go to the Google Cloud console for your Firebase project.
2.  In the search bar, type "**Secret Manager**" and select it.
3.  Click "**Create Secret**".
4.  For the **Secret name**, enter `GEMINI_API_KEY`.
5.  In the **Secret value** field, paste your Gemini API key.
6.  Leave the other options as default and click "**Create secret**".
7.  Now, go to your Firebase project's **App Hosting** page.
8.  Select your backend and go to the **Settings** tab.
9.  Under "Runtime service account access", ensure the service account has the "**Secret Manager Secret Accessor**" role. This allows your app to read the secret you just created.

After completing these steps, the deployed application will have secure access to your API key, and the AI-powered features will function correctly.
