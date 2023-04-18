import { useState } from "react";
import SEO from "@/seo";
import { Layout, Group } from "@/layout";
import { Navigation, Child } from "@/components";
import data from "@/data";

export default function Home() {
  const [selected, setSelected] = useState<string | null>(null);
  const filtered = data.filter((s) => s.live ?? true);
  return (
    <>
      <SEO />
      <Layout
        nav={<Navigation data={filtered} selected={selected} />}
        content={
          <Group>
            {filtered.map((section) => (
              <Child
                key={"child-" + section.id}
                setSelected={setSelected}
                {...section}
              />
            ))}
          </Group>
        }
      />
    </>
  );
}
