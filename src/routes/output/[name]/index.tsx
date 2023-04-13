import { Title, Meta, useParams } from "solid-start";

export default function Output() {
  const params = useParams<{name: string}>();

  const imageUrl = `https://jojultdzeeymbwqvhivt.supabase.co/storage/v1/object/public/plugin/${params.name}.png`;

  return (
    <main>
      <Title>{params.name}</Title>
      
      <Meta property="og:title" content={params.name} />
      {/* <Meta property="og:url" content="http://www.lukew.com" /> */}
      <Meta property="og:type" content="article" />
      <Meta property="og:description" content={params.name} />
      <Meta property="og:image" content={imageUrl} />

      <Meta name="twitter:card" content="summary" />
      <Meta name="twitter:title" content={params.name} />
      <Meta name="twitter:description" content={params.name} />
      <Meta name="twitter:site" content="" />
      <Meta name="twitter:image" content={imageUrl} />

      <h1>{params.name}</h1>
      <img src={imageUrl} alt="" />
    </main>
  );
}
