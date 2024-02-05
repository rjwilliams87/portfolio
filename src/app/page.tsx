import { DynamicComponent } from "@/global/components/dynamic-component";
import { getLandingPage } from "@/data/server-actions/pages";

export const dynamic = "force-dynamic";

export default async function Home() {
  const { data } = await getLandingPage();
  return <DynamicComponent page={data} />;
}
