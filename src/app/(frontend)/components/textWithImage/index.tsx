"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { RichText } from '@/app/(frontend)/components/RichText'

export const TextWithImage = (data) => {
  const { textAndImage } = data.data;

  return (
    <div className="container mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center gap-16"
      >
        {textAndImage.map((block, index) => {
          if (block.blockType === 'text') {
            return (
              <motion.div
                key={block.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="basis-1/2"
              >
                <h5 className="text-sm text-center text-green-800 mb-4">Organic Seeds Growth</h5>
                <RichText content={block.text.root.children} />
              </motion.div>
            );
          }

          if (block.blockType === 'image') {
            return (
              <motion.div
                key={block.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex-1 relative h-full md:max-h-[50vh] w-full aspect-[4/3] zoom-effect overflow-hidden rounded-md shadow-xl"
              >
                <Image fill src={block.media.url} alt={block.media.alt} className="object-cover" />
              </motion.div>
            );
          }

          return null;
        })}
      </motion.div>
    </div>
  );
};
