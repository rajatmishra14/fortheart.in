import { motion } from "framer-motion";

export default function About() {
    return (
        <div className="max-w-2xl mx-auto px-6 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-3xl font-serif mb-8">About</h1>

                <div className="prose prose-neutral dark:prose-invert">
                    <p className="text-lg leading-relaxed opacity-80 mb-6">
                        Hello, I'm Rajat. This is a space where I share my explorations in art, writing, and the beauty of the world around us.
                    </p>

                    <p className="leading-relaxed opacity-80 mb-6">
                        [Your bio goes here. You can edit this file to tell your story, describe your artistic vision, or share your background.]
                    </p>

                    <p className="leading-relaxed opacity-80">
                        Feel free to explore my writings, drawings, and animations. If something resonates with you, I'd love to hear from you.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
