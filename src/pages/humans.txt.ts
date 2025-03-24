import type { APIRoute } from 'astro'
import site from '../data/site'

export const GET: APIRoute = async () => {
  const content = `
  /* TEAM */
  Chef: ${site.chef.name}
  From: ${site.chef.from}
  Bluesky: ${site.chef.media.bluesky}
  Twitter: ${site.chef.media.twitter}

/* SITE */
  Doctype: Astro
  IDE: VSCode
  Language: English
  Last update: ${new Date().toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })}
    `
  .trim()

  return new Response(content, {
    status: 200,
    headers: { 'Content-Type': 'text/plain; charset=UTF-8' },
  })
}
