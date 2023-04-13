import { APIEvent, json } from 'solid-start/api';
import { Configuration, OpenAIApi } from 'openai';

export async function POST({ request }: APIEvent) {
  const requestBody = await request.json();
  const url = await generateImage(requestBody['prompt']);
  const tinyUrl = await getTinyUrl(url);
  const response = json({
    content: `![image](${tinyUrl})`,
  })
  response.headers.append('Access-Control-Allow-Origin', 'https://chat.openai.com');
  response.headers.append('Access-Control-Allow-Headers', '*');
  return response;
}

async function generateImage(prompt: string): Promise<string> {
  console.info('[DALL-E] Creating image', prompt);
  const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  }));
  
  const response = await openai.createImage({
    prompt: `${prompt}. In a funny style.`,
    n: 1,
    size: '1024x1024',
  });
  const url = response.data.data[0].url!;
  console.info('[DALL-E] Done', url);
  return url;
}

async function getTinyUrl(url: string): Promise<string> {
  console.info('[TinyURL] Shortening');
  const res = await fetch('https://api.tinyurl.com/create', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.TINY_URL_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({url}),
  });
  const body = await res.json();
  const shortUrl = body.data.tiny_url ?? '';
  console.info('[TinyURL] Done', shortUrl);
  return shortUrl;
}
