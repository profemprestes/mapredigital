'use client';

import type { Post } from '@prisma/client';
import { motion } from 'framer-motion';
import { PostCard } from './PostCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export function PostList({ posts }: { posts: (Post & { _count: { comments: number } })[] }) {
  return (
    <motion.div
      className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {posts.map((post) => (
        <motion.div key={post.id} variants={itemVariants}>
          <PostCard post={post} />
        </motion.div>
      ))}
    </motion.div>
  );
}
