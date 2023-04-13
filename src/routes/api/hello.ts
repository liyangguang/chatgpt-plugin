import { APIEvent, json } from "solid-start/api";
 
export async function POST({ request }: APIEvent) {
  const requestBody = await request.json();
  const response = json({ content: `ygygyg ${requestBody['key'] || ''}` })
  response.headers.append('Access-Control-Allow-Origin', 'https://chat.openai.com');
  response.headers.append('Access-Control-Allow-Headers', '*');
  return response;
}
