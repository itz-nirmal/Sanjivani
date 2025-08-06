import { Suspense } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

async function getFeaturedPosts() {
  try {
    const posts = await db.post.findMany({
      where: {
        published: true,
        featured: true,
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            username: true,
            avatar: true,
          },
        },
        tags: true,
        _count: {
          select: {
            comments: true,
            likes: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 3,
    });
    return posts;
  } catch (error) {
    console.error("Error fetching featured posts:", error);
    return [];
  }
}

export default async function Home() {
  const session = await getServerSession(authOptions);
  const featuredPosts = await getFeaturedPosts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Welcome to Sanjivani
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              A modern fullstack platform built with Next.js, TypeScript, and
              Tailwind CSS
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built with modern technologies and best practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast & Modern</h3>
              <p className="text-gray-600">
                Built with Next.js 14 and App Router for optimal performance and
                developer experience.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-600 text-xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Auth</h3>
              <p className="text-gray-600">
                Complete authentication system with NextAuth.js supporting
                multiple providers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 text-xl">💾</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Database Ready</h3>
              <p className="text-gray-600">
                Prisma ORM with SQLite for development and PostgreSQL for
                production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">TypeScript</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">⚡</div>
              <div className="text-gray-600">Lightning Fast</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">🎨</div>
              <div className="text-gray-600">Beautiful UI</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">📱</div>
              <div className="text-gray-600">Responsive</div>
            </div>
          </div>
        </div>
      </section>

      {session && (
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome back, {session.user.name}!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to start creating amazing content?
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Create New Post
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
