import * as Icons from "react-icons/cg";

export interface Tag {
  type: keyof typeof TagType;
  amount?: number;
}

export const TagType = {
  windows: {
    type: "CgDisplayFlex",
    text: "text-yellow-100",
  },
  rooms: { type: "CgNpm", text: "text-green-100" },
  bathrooms: { type: "CgBath", text: "text-blue-100" },
  heating: { type: "CgThermostat", text: "text-red-100" },
  balconies: { type: "CgDockBottom", text: "text-purple-100" },
  floors: { type: "CgGhost", text: "text-indigo-100" },
  library: { type: "CgReadme", text: "text-pink-100" },
  pools: { type: "CgShapeZigzag", text: "text-cyan-100" },
  grounds: { type: "CgTree", text: "text-green-300" },
} as const;

export default function TagElement(tag: Tag, prefix?: string) {
  const IconComponent = Icons[TagType[tag.type].type as keyof typeof Icons];

  return (
    <div
      className={`rounded-full mr-1 text-sm whitespace-nowrap ${TagType[tag.type].text} flex items-center`}
      key={prefix ? `${prefix}-${tag.type}` : undefined}
    >
      <IconComponent className="inline mr-1" />
      {tag.amount} {tag.type.charAt(0).toUpperCase() + tag.type.slice(1)}
    </div>
  );
}
