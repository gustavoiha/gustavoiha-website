export default function Footer () {
  return (
    <footer className="bg-slate-800 text-slate-50">
      <div className="max-w-screen-lg mx-auto w-full pt-20 pb-24 px-5">
        <div>
          <h2 className="text-h2">
            Gustavo Iha
          </h2>

          <section className="mt-6">
            <h3 className="text-p2">
              Website built with:
            </h3>

            <ul className="list-disc pl-8">
              <li className="text-p2">React</li>
              <li className="text-p2">Next.js</li>
              <li className="text-p2">Vercel</li>
            </ul>
          </section>

          <section className="mt-6">
            <h3 className="text-p2">
              Deployed with Vercel
            </h3>
          </section>
        </div>
      </div>
    </footer>
  )
}
