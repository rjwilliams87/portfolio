import { DynamicComponent } from "@/global/components/dynamic-component";
import { getLandingPage, getPageBySlug } from "@/data/server-actions/pages";
import { Navigation } from "@/global/components";

export const dynamic = "force-dynamic";

export default async function Home() {
  const { data } = await getPageBySlug("/v2");
  // const { data } = await getLandingPage();
  return (
    <>
      <Navigation />
      <DynamicComponent page={data} />
    </>
  );
}
