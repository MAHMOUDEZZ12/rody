# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

## AI Features

This application uses Genkit and the Gemini API for generative AI features. To enable these features, you must create a Gemini API key and add it to a `.env.local` file in the root of the project.

**This is a required step to fix the "API key not valid" error and see the AI-generated images.**

1.  Create your free API key at [Google AI Studio](https://aistudio.google.com/app/apikey).
2.  Create a file named `.env.local` in the project root.
3.  Add the following line to the file, replacing `YOUR_API_KEY_HERE` with your actual key:

```
GEMINI_API_KEY="YOUR_API_KEY_HERE"
```

The application is now configured to use your key for all AI-powered functionality.
