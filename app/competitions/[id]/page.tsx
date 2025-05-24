import { CompetitionDetail } from "@/components/competitions/competition-detail";

export default function CompetitionPage({ params }: { params: { id: string } }) {
  return <CompetitionDetail id={params.id} />;
}