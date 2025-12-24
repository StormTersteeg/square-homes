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
};
