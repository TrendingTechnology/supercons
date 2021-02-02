import { useRef, useState } from 'react'
import Head from 'next/head'
import Icon, { glyphNames } from 'supercons'
import BG from '../components/bg'
import useFocusable from '../components/use-focusable'

const title = 'Supercons'
const description = 'React component'

const Docs = () => {
  const input = useRef(null)
  const [search, setSearch] = useState('')
  useFocusable(input)

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />
        <meta name="og:url" content="https://supercons.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="twitter:description" content={description} />
      </Head>
      <BG />
      <main>
        <header>
          <h1>Supercons</h1>
          <nav>
            <a href="https://github.com/lachlanjc/supercons">
              <Icon glyph="github" size={32} />
              GitHub
            </a>
            <a href="https://npmjs.com/package/supercons">
              <Icon glyph="sam" size={32} />
              npm
            </a>
          </nav>
          <input
            type="search"
            onChange={e => setSearch(e.target.value)}
            value={search}
            placeholder="press / to focus"
            ref={input}
          />
        </header>
        <article>
          {glyphNames
            .sort()
            .filter(n => (search !== '' ? n.includes(search) : true))
            .map(key => (
              <div key={key}>
                <Icon glyph={key} title={key} size={48} />
                <p children={key} />
              </div>
            ))}
        </article>
      </main>
      <style jsx global>{`
        body {
          font-family: ui-rounded, system-ui, -apple-system, BlinkMacSystemFont,
            'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
          margin: 0;
        }
        * {
          box-sizing: border-box;
        }
        @media (prefers-color-scheme: dark) {
          body {
            background-color: #1e1e1e;
            color: #fff;
          }
          article svg {
            fill: #fff;
          }
          article svg:hover {
            fill: #34b4a7 !important;
          }
        }
      `}</style>
      <style jsx>{`
        main {
          font-size: 12px;
          text-align: center;
          width: 100%;
          padding: 1rem;
          margin: auto;
          z-index: 1;
          position: relative;
        }
        h1 {
          color: #e635ce;
          font-size: 3rem;
          font-weight: 900;
          font-style: italic;
          line-height: 1;
          margin: 0;
          padding: 1rem 0 2rem;
        }
        @supports (-webkit-text-fill-color: transparent) {
          h1 {
            -webkit-text-stroke: #e635ce;
            -webkit-text-stroke-width: 2px;
            -webkit-text-fill-color: #fff;
            text-shadow: 4px 4px 12px currentColor;
          }
          @media (min-width: 32em) {
            h1 {
              -webkit-text-stroke-width: 3px;
            }
          }
          @media (prefers-color-scheme: dark) {
            h1 {
              -webkit-text-fill-color: #1d1d1f;
            }
          }
        }
        header {
          padding: 1rem;
        }
        nav a {
          display: inline-flex;
          align-items: center;
          color: #ff9300;
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0 1rem;
          transition: 0.125s ease-out;
          transition-property: color, transform;
          text-underline-position: under;
          text-decoration-style: wavy;
        }
        nav a:hover,
        nav a:focus {
          color: #ff5236;
          transform: rotate(-2deg) scale(1.25);
        }
        nav a:hover :global(svg),
        nav a:focus :global(svg) {
          transform: rotate(180deg);
        }
        nav a :global(svg) {
          margin-right: 0.5rem;
          transition: transform 0.5s linear;
        }
        input {
          appearance: none;
          font-family: inherit;
          font-size: 18px;
          border-radius: 999px;
          padding: 0.5rem 1rem;
          border: 2px solid #ff9300;
          background-color: rgba(255, 255, 255, 0.625);
          margin-top: 2rem;
        }
        article {
          margin-top: 1rem;
          display: grid;
          grid-row-gap: 0.5rem;
          grid-template-columns: repeat(auto-fit, minmax(64px, 1fr));
          justify-content: center;
        }
        p {
          color: #6e6e73;
          line-height: 1.25;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          word-break: break-word;
          word-wrap: wrap;
        }
        article :global(svg) {
          transition: 0.125s ease-out;
          transition-property: fill, transform;
          transform-origin: center bottom;
        }
        article :global(svg:hover) {
          fill: #ff9300;
          transform: scale(2);
        }
        @media (min-width: 32em) {
          h1 {
            font-size: 4rem;
          }
        }
        @media (min-width: 48em) {
          main {
            padding: 2rem 0;
            max-width: 80vw;
          }
          h1 {
            font-size: 5rem;
          }
          nav a {
            font-size: 1.5rem;
          }
          article {
            grid-column-gap: 1.25rem;
            grid-row-gap: 2rem;
            border-radius: 1rem;
            padding-top: 2rem;
          }
        }
        @media (prefers-color-scheme: dark) {
          article p {
            color: #a1a1a6;
          }
          input {
            background-color: rgba(255, 255, 255, 0.125);
          }
        }
      `}</style>
    </>
  )
}

export default Docs
