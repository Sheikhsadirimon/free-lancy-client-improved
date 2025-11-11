import { Facebook, Instagram } from "lucide-react";

import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-base-300 text-primary-foreground py-12  border-primary-foreground/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">FreeLancy</h3>
            <p className="text-primary-foreground/80 text-sm">
              The most reliable job marketplace platform
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors items-center flex gap-2"
                >
                  <span className="text-xl">
                    <FaXTwitter />
                  </span>{" "}
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors flex gap-1"
                >
                  <Facebook></Facebook> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors flex gap-1"
                >
                  <Instagram></Instagram> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/70">
          <p>&copy; 2025 FreeLancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
