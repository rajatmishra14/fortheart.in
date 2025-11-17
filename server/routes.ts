import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { type Category, insertCommentSchema } from "@shared/schema";
import { z } from "zod";

// Zod schemas for validation
const categorySchema = z.enum(["Creativity", "Philosophy", "Design", "Drawing", "Psychology", "Media", "Theology"]).optional();
const sortBySchema = z.enum(["time", "popularity"]).optional();

const postsQuerySchema = z.object({
  category: categorySchema,
  sortBy: sortBySchema
});

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Get all posts with optional filtering and sorting
  app.get("/api/posts", async (req, res) => {
    try {
      // Validate query parameters
      const validation = postsQuerySchema.safeParse(req.query);
      
      if (!validation.success) {
        return res.status(400).json({ 
          error: "Invalid query parameters",
          details: validation.error.errors 
        });
      }
      
      const { category, sortBy } = validation.data;
      const posts = await storage.getPosts({ category, sortBy });
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch posts" });
    }
  });

  // Get single post by ID
  app.get("/api/posts/:id", async (req, res) => {
    try {
      const post = await storage.getPost(req.params.id);
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch post" });
    }
  });

  // Get all comments for a post
  app.get("/api/posts/:postId/comments", async (req, res) => {
    try {
      const comments = await storage.getCommentsByPostId(req.params.postId);
      res.json(comments);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch comments" });
    }
  });

  // Create a new comment
  app.post("/api/posts/:postId/comments", async (req, res) => {
    try {
      // Validate request body
      const validation = insertCommentSchema.safeParse({
        ...req.body,
        postId: req.params.postId,
        date: new Date().toISOString().split('T')[0] // Add current date
      });
      
      if (!validation.success) {
        return res.status(400).json({ 
          error: "Invalid comment data",
          details: validation.error.errors 
        });
      }
      
      const comment = await storage.createComment(validation.data);
      res.status(201).json(comment);
    } catch (error) {
      res.status(500).json({ error: "Failed to create comment" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
