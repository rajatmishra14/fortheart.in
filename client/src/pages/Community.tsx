import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { SiDiscord, SiReddit, SiInstagram, SiYoutube } from "react-icons/si";

export default function Community() {
    return (
        <div className="max-w-prose mx-auto px-6 py-12">
            <Link href="/" data-testid="link-back">
                <div className="flex items-center gap-2 text-sm opacity-70 hover-elevate inline-flex px-2 py-1 rounded-md transition-opacity mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to home</span>
                </div>
            </Link>

            <h1 className="text-3xl font-semibold mb-8" data-testid="heading-community">
                # Join our community
            </h1>

            <div className="space-y-8 leading-relaxed">
                <p className="text-base">
                    We are building a community of artists, thinkers, and creators who are passionate about visual understanding, philosophy, and the intersection of ethics and aesthetics.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <a
                        href="https://discord.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-6 rounded-lg border border-border/40 hover:border-border hover:bg-muted/30 transition-all group"
                    >
                        <SiDiscord className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity" />
                        <div>
                            <h3 className="font-medium mb-1">Discord</h3>
                            <p className="text-sm opacity-60">Join the conversation live</p>
                        </div>
                    </a>

                    <a
                        href="https://reddit.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-6 rounded-lg border border-border/40 hover:border-border hover:bg-muted/30 transition-all group"
                    >
                        <SiReddit className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity" />
                        <div>
                            <h3 className="font-medium mb-1">Reddit</h3>
                            <p className="text-sm opacity-60">Discuss articles and ideas</p>
                        </div>
                    </a>
                </div>

                <div className="pt-8 border-t border-border/40">
                    <h2 className="text-xl font-medium mb-6">Follow us</h2>
                    <div className="flex gap-6">
                        <a href="https://instagram.com/fortheart.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                            <SiInstagram className="w-5 h-5" />
                            <span>Instagram</span>
                        </a>
                        <a href="https://youtube.com/@letterstorajat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                            <SiYoutube className="w-5 h-5" />
                            <span>YouTube</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
