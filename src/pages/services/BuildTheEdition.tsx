import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { buildTheEdition } from "@/data/services";

export function BuildTheEdition() {
  return <ServicePageTemplate data={buildTheEdition} />;
}
