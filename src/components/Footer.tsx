import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="relative h-8 w-auto aspect-[4/1] mb-6">
                                <img
                                    src="/logo.png"
                                    alt="Admission India"
                                    className="h-full w-full object-contain object-left"
                                />
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Structuring the future of students since 2010. We are your trusted partners in academic success.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-6 text-sm">Services</h4>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Medical Admission</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Engineering</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Management</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Study Abroad</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-6 text-sm">Company</h4>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Success Stories</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-6 text-sm">Contact</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li className="flex items-start gap-3">
                                <MapPin size={16} className="mt-0.5 shrink-0" />
                                <span>Bangalore, Karnataka, India</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={16} className="shrink-0" />
                                <span>+91 9766465355</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={16} className="shrink-0" />
                                <span>info@admissionindia.net</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                    <p>© {new Date().getFullYear()} Admission India. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
                        <a href="#" className="hover:text-gray-900 transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
