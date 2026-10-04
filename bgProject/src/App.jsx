import { useState } from 'react'

const colors = [
  { name: 'Blue', value: '#2563eb' },
  { name: 'Red', value: '#ef4444' },
  { name: 'Green', value: '#16a34a' },
  { name: 'Black', value: '#111827' },
  { name: 'Olive', value: '#808000' },
  { name: 'White', value: '#ffffff' },
  { name: 'Violet', value: '#8b5cf6' },
  { name: 'Gray', value: '#9ca3af' },
]

function App() {
  const [color, setColor] = useState(colors[4])

  return (
    <main
      className="min-h-screen w-full transition-colors duration-200"
      style={{ backgroundColor: color.value }}
    >
      <div className="fixed inset-x-0 bottom-0 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:p-6">
        <section
          aria-label="Background color picker"
          className="mx-auto max-w-4xl rounded-3xl border border-white/70 bg-white/90 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-5"
        >
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                Color studio
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                Pick a background
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">
              <span
                aria-hidden="true"
                className="size-3 rounded-full ring-1 ring-black/10"
                style={{ backgroundColor: color.value }}
              />
              {color.name}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">
            {colors.map((option) => {
              const isSelected = color.name === option.name

              return (
                <button
                  key={option.name}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setColor(option)}
                  className={`flex min-h-16 flex-col items-center justify-center gap-2 rounded-2xl border px-2 py-2 text-xs font-semibold transition duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 ${
                    isSelected
                      ? 'border-slate-900 bg-slate-100 text-slate-900 shadow-sm'
                      : 'border-slate-200 bg-white text-slate-600'
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="size-6 rounded-full ring-1 ring-black/10"
                    style={{ backgroundColor: option.value }}
                  />
                  {option.name}
                </button>
              )
            })}
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
