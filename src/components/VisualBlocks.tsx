import { motion } from "framer-motion";
import { BlockNode } from "@/data/types";

export const VisualBlock = ({ block }: { block: BlockNode }) => {
  const colorMap = {
    blue: "bg-blue-500",
    orange: "bg-orange-500",
    purple: "bg-purple-500",
    green: "bg-green-500",
    pink: "bg-pink-500",
  };
  const colorClass = colorMap[block.color];

  if (block.type === "wrapper") {
    return (
      <div className="flex flex-col font-outfit text-white text-xl md:text-2xl drop-shadow-md w-max">
        {/* Top bar of the wrapper */}
        <div className={`${colorClass} rounded-t-xl rounded-tr-xl px-4 py-3 font-bold border-b-2 border-black/10`}>
          {block.label}
        </div>
        
        {/* Middle section (left border + inner children) */}
        <div className="flex">
          {/* Left spine */}
          <div className={`${colorClass} w-6 border-r-2 border-black/10`}></div>
          {/* Children container */}
          <div className="bg-slate-100/50 p-2 flex flex-col gap-2 rounded-r-lg min-w-[200px]">
             {block.children?.map((child, idx) => (
                <VisualBlock key={idx} block={child} />
             ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`${colorClass} h-6 rounded-b-xl rounded-br-xl shadow-sm border-t-2 border-black/10`}></div>
      </div>
    );
  }

  // Action block
  return (
    <div className={`${colorClass} rounded-xl px-4 py-3 font-bold text-white shadow-md font-outfit w-max border-b-4 border-black/20 active:border-b-0 active:translate-y-1 transition-all`}>
      {block.label}
    </div>
  );
};

export const VisualBlocksContainer = ({ blocks }: { blocks: BlockNode[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6 }}
      className="mt-8 bg-slate-200/50 rounded-3xl p-8 border-4 border-slate-300 text-left overflow-x-auto"
    >
      <div className="flex flex-col gap-4">
        {blocks.map((block, idx) => (
          <VisualBlock key={idx} block={block} />
        ))}
      </div>
    </motion.div>
  );
};
