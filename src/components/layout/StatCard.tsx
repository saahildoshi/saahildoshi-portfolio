export type StatCardProps = {
  label: string;
  value: string;
};

export function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm">
      <p className="text-xs uppercase tracking-[0.3em] text-accentneongreen/80">{label}</p>
      <p className="mt-3 text-2xl font-semibold text-white">{value}</p>
    </div>
  );
}
