import { zodiacSigns } from "@/content/readingCatalog";

function SignSelect({ name, defaultValue = "leo" }: { name: string; defaultValue?: string }) {
  return (
    <select
      name={name}
      defaultValue={defaultValue}
      className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm"
    >
      {zodiacSigns.map((sign) => (
        <option key={sign.key} value={sign.key}>
          {sign.labelJa}
        </option>
      ))}
    </select>
  );
}

function Field({
  label,
  name,
  rows = 3,
  placeholder,
}: {
  label: string;
  name: string;
  rows?: number;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <textarea
        name={name}
        rows={rows}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-border px-4 py-3 text-sm"
      />
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="border-b border-border pb-2 font-serif text-lg text-foreground">
      {children}
    </h3>
  );
}

export { SignSelect, Field, SectionTitle };
