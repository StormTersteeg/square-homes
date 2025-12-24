import * as Icons from "react-icons/cg";
import { TagType, type Tag } from "~/model/type/tag";

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
