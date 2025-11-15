import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, pgEnum } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const categoryEnum = pgEnum("category", ["Creativity", "Philosophy", "Design", "Drawing", "Psychology", "Media", "Theology"]);

// UI categories include "All categories" for filtering
export const uiCategories = ["All categories", "Creativity", "Philosophy", "Design", "Drawing", "Psychology", "Media", "Theology"] as const;
export type UICategory = typeof uiCategories[number];
export type Category = "Creativity" | "Philosophy" | "Design" | "Drawing" | "Psychology" | "Media" | "Theology";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const posts = pgTable("posts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  content: text("content").notNull(),
  date: text("date").notNull(),
  views: integer("views").notNull().default(0),
  category: categoryEnum("category").notNull(),
  thumbnailUrl: text("thumbnail_url"),
});

export const drawings = pgTable("drawings", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  imageUrl: text("image_url").notNull(),
  date: text("date").notNull(),
});

export const animations = pgTable("animations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  thumbnailUrl: text("thumbnail_url").notNull(),
  videoUrl: text("video_url"),
  date: text("date").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertPostSchema = createInsertSchema(posts).omit({ id: true });
export const insertDrawingSchema = createInsertSchema(drawings).omit({ id: true });
export const insertAnimationSchema = createInsertSchema(animations).omit({ id: true });

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Post = typeof posts.$inferSelect;
export type Drawing = typeof drawings.$inferSelect;
export type Animation = typeof animations.$inferSelect;
export type InsertPost = z.infer<typeof insertPostSchema>;
export type InsertDrawing = z.infer<typeof insertDrawingSchema>;
export type InsertAnimation = z.infer<typeof insertAnimationSchema>;
