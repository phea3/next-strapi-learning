import HomePage from "@/components/home-page";

async function getStrapiDate(url: string) {
  const baseUrl = "http://localhost:1337";

  try {
    const response = await fetch(baseUrl + url);
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
export default async function Home() {
  const strapiData = await getStrapiDate("/api/home-page");

  const { title, description } = strapiData.data;

  return (
    <main>
      <HomePage data={{ title: title, description: description }} />
    </main>
  );
}
