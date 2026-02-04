
import Navigation from "@/components/Navigation";

export default function MedicalPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navigation />
            <div className="pt-32 px-4 md:px-8 max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Medical Colleges</h1>
                <p className="text-gray-600 text-lg">
                    Explore top medical colleges in India. We help with MBBS, BDS, and BAMS admissions.
                </p>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="h-40 bg-gray-100 rounded-xl mb-4"></div>
                            <h3 className="text-xl font-semibold mb-2">Medical College {i}</h3>
                            <p className="text-sm text-gray-500">Location, India</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
