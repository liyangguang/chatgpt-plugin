import { Title, useParams } from "solid-start";

export default function Output() {
  const params = useParams<{name: string}>();

  return (
    <main>
      <Title>{params.name}</Title>
      <h1>{params.name}</h1>
    </main>
  );
}
