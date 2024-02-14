import { DynamicComponent } from "@/global/components/dynamic-component";
import { getPageBySlug } from "@/data/server-actions/pages";

export const dynamic = "force-dynamic";

export default async function DynamicPage({ params }: { params: { slug: string } }) {
  const slug = "/blog/" + params.slug;
  const { data } = await getPageBySlug(slug);
  return <DynamicComponent page={data} />;
}
