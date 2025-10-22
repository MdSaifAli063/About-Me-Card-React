import React from 'react';

export default function Card() {
  return (
    <div className="w-full max-w-xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden dark:bg-gray-900 dark:border-gray-800 transition">
      {/* Header banner */}
      <div className="h-28 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

      {/* Profile section */}
      <div className="px-6 -mt-12 pb-6">
        <div className="flex items-end">
          <img
            className="w-24 h-24 rounded-2xl ring-4 ring-white dark:ring-gray-900 object-cover shadow-md"
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Developer avatar"
          />
          <div className="ml-4 mt-2">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Hi, I’m a Full‑Stack Developer</h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              I build scalable web apps, APIs, and delightful UIs.
            </p>
          </div>
        </div>

        {/* Bio */}
        <p className="mt-5 text-gray-700 dark:text-gray-300 leading-relaxed">
          Passionate about crafting end‑to‑end solutions using modern stacks. I love clean architecture,
          performance, DX, and shipping features that matter. Open to collaborations, mentoring, and exciting
          projects.
        </p>

        {/* Tech stack badges */}
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            'React',
            'Node.js',
            'TypeScript',
            'Next.js',
            'Express',
            'TailwindCSS',
            'PostgreSQL',
            'MongoDB',
            'Docker',
            'AWS'
          ].map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-5 grid grid-cols-3 gap-3 text-center">
          <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-3">
            <div className="text-lg font-semibold text-gray-900 dark:text-white">5+ yrs</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Experience</div>
          </div>
          <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-3">
            <div className="text-lg font-semibold text-gray-900 dark:text-white">30+</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Projects</div>
          </div>
          <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-3">
            <div className="text-lg font-semibold text-gray-900 dark:text-white">100%</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Remote‑friendly</div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Socials */}
            <a
              href="https://github.com/your-profile"
              aria-label="GitHub"
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 transition"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 .5a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.77-1.35-1.77-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.84 1.31 3.53 1 .11-.79.42-1.31.76-1.61-2.67-.31-5.47-1.34-5.47-5.95 0-1.32.47-2.39 1.24-3.23-.13-.31-.54-1.56.12-3.26 0 0 1.01-.32 3.3 1.23a11.48 11.48 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.7.25 2.95.12 3.26.77.84 1.23 1.91 1.23 3.23 0 4.62-2.81 5.63-5.49 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0012 .5z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/your-profile"
              aria-label="LinkedIn"
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-blue-700 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700 transition"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5a2.5 2.5 0 11-.02 5.001 2.5 2.5 0 01.02-5zM3 9h4v12H3zM14.5 9A4.5 4.5 0 0010 13.5V21h-4V9h4v1.6A5.96 5.96 0 0115 9c3.31 0 6 2.69 6 6V21h-4v-6a2 2 0 00-4 0v6h-4v-7.5A4.5 4.5 0 0114.5 9z" />
              </svg>
            </a>
            <a
              href="mailto:you@example.com"
              aria-label="Email"
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-rose-600 dark:bg-gray-800 dark:text-rose-400 dark:hover:bg-gray-700 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M2 6.75A2.75 2.75 0 014.75 4h14.5A2.75 2.75 0 0122 6.75v10.5A2.75 2.75 0 0119.25 20H4.75A2.75 2.75 0 012 17.25V6.75zm2.75-.25a.75.75 0 00-.75.75v.22l8 4.53 8-4.53v-.22a.75.75 0 00-.75-.75H4.75zm16.5 3.2l-7.6 4.3a1.75 1.75 0 01-1.7 0l-7.6-4.3v7.85c0 .41.34.75.75.75h15.5c.41 0 .75-.34.75-.75V9.7z" />
              </svg>
            </a>
          </div>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 font-semibold rounded-lg text-sm px-5 py-2.5 shadow"
          >
            Join me!
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}