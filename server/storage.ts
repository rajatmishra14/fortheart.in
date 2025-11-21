import { type User, type InsertUser, type Post, type InsertPost, type Comment, type InsertComment, type Category } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getPosts(options?: { category?: Category; sortBy?: "time" | "popularity" }): Promise<Post[]>;
  getPost(id: string): Promise<Post | undefined>;
  createPost(post: InsertPost): Promise<Post>;
  getCommentsByPostId(postId: string): Promise<Comment[]>;
  createComment(comment: InsertComment): Promise<Comment>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private posts: Map<string, Post>;
  private comments: Map<string, Comment>;

  constructor() {
    this.users = new Map();
    this.posts = new Map();
    this.comments = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getPosts(options?: { category?: Category; sortBy?: "time" | "popularity" }): Promise<Post[]> {
    let posts = Array.from(this.posts.values());

    // Filter by category if specified
    if (options?.category) {
      posts = posts.filter(post => post.category === options.category);
    }

    // Sort based on criteria
    if (options?.sortBy === "popularity") {
      posts.sort((a, b) => b.views - a.views);
    } else {
      // Default sort by time (most recent first)
      posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    return posts;
  }

  async getPost(id: string): Promise<Post | undefined> {
    return this.posts.get(id);
  }

  async createPost(insertPost: InsertPost): Promise<Post> {
    const id = randomUUID();
    const post: Post = {
      ...insertPost,
      id,
      views: insertPost.views ?? 0,
      thumbnailUrl: insertPost.thumbnailUrl ?? null
    };
    this.posts.set(id, post);
    return post;
  }

  async getCommentsByPostId(postId: string): Promise<Comment[]> {
    const comments = Array.from(this.comments.values())
      .filter(comment => comment.postId === postId)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    return comments;
  }

  async createComment(insertComment: InsertComment): Promise<Comment> {
    const id = randomUUID();
    const comment: Comment = { ...insertComment, id };
    this.comments.set(id, comment);
    return comment;
  }
}

export const storage = new MemStorage();

// Seed initial data for development
async function seedData() {
  // Mapped existing posts to new categories (Ethics, Aesthetics, Metaphysics)

  // Creativity -> Aesthetics
  await storage.createPost({
    title: "On Visual Thinking and Clarity",
    content: "The power of visual thinking lies in its ability to make complex ideas immediately graspable.",
    date: "2025-01-12",
    views: 0,
    category: "Aesthetics",
    thumbnailUrl: "/attached_assets/generated_images/Abstract_geometric_line_drawing_51a0a65f.png"
  });

  // Design -> Aesthetics
  await storage.createPost({
    title: "The Art of Simplification",
    content: "Simplification is not about removing detail—it's about finding the essential truth of a thing and expressing it with economy.",
    date: "2025-01-05",
    views: 0,
    category: "Aesthetics",
    thumbnailUrl: "/attached_assets/generated_images/Geometric_transformation_frame_8f83c90a.png"
  });

  // Drawing -> Aesthetics
  await storage.createPost({
    title: "Drawing as Understanding",
    content: "To draw something is to truly see it. Not just to look at it, but to understand its structure, its form, its essence.",
    date: "2024-12-28",
    views: 0,
    category: "Aesthetics",
    thumbnailUrl: "/attached_assets/generated_images/Organic_curves_visual_study_86bcec83.png"
  });

  // Philosophy -> Metaphysics
  await storage.createPost({
    title: "The Philosophy of Minimalism",
    content: "Minimalism isn't about having less—it's about making room for more of what matters.",
    date: "2024-12-20",
    views: 0,
    category: "Metaphysics",
    thumbnailUrl: "/attached_assets/generated_images/Perspective_lines_geometric_art_668711b7.png"
  });

  // Psychology -> Ethics (Mapping Psychology to Ethics as it deals with human behavior/mind)
  await storage.createPost({
    title: "Psychology of Visual Perception",
    content: "How we see is shaped by what we expect to see. Our visual system is prediction-driven.",
    date: "2024-12-15",
    views: 0,
    category: "Ethics",
    thumbnailUrl: "/attached_assets/generated_images/Light_shadow_abstract_shapes_4ce07207.png"
  });

  // Design -> Aesthetics
  await storage.createPost({
    title: "Digital Tools in Modern Art",
    content: "The tools change, but the principles remain. Digital tools are simply modern brushes for timeless creative expression.",
    date: "2024-12-10",
    views: 0,
    category: "Aesthetics",
    thumbnailUrl: "/attached_assets/generated_images/Flowing_lines_motion_study_09ed811f.png"
  });

  // Theology -> Metaphysics
  await storage.createPost({
    title: "Sacred Geometry and Meaning",
    content: "Throughout history, certain geometric forms have been seen as vessels of deeper meaning.",
    date: "2024-12-05",
    views: 0,
    category: "Metaphysics",
    thumbnailUrl: "/attached_assets/generated_images/Abstract_geometric_line_drawing_51a0a65f.png"
  });

  // NEW ARTICLES for new categories

  // Ethics
  await storage.createPost({
    title: "The Ethics of Artificial Creativity",
    content: "As algorithms begin to dream, we must ask: what is the moral weight of a generated image? Does authorship require consciousness?",
    date: "2025-01-15",
    views: 0,
    category: "Ethics",
    thumbnailUrl: "/attached_assets/generated_images/Light_shadow_abstract_shapes_4ce07207.png"
  });

  // Aesthetics
  await storage.createPost({
    title: "Beauty in the Age of Algorithms",
    content: "When perfection is computationally accessible, the flaw becomes the most valuable aesthetic property.",
    date: "2025-01-18",
    views: 0,
    category: "Aesthetics",
    thumbnailUrl: "/attached_assets/generated_images/Organic_curves_visual_study_86bcec83.png"
  });

  // Metaphysics
  await storage.createPost({
    title: "Digital Consciousness and Reality",
    content: "If a simulated world is indistinguishable from reality to its inhabitants, is it any less real?",
    date: "2025-01-20",
    views: 0,
    category: "Metaphysics",
    thumbnailUrl: "/attached_assets/generated_images/Perspective_lines_geometric_art_668711b7.png"
  });
}

// Run seed on initialization
seedData();
