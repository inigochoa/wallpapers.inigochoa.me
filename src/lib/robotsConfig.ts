import type { PolicyItem, RobotsTxtOptions } from 'astro-robots-txt'

const aiAgentsURL = 'https://raw.githubusercontent.com/ai-robots-txt/ai.robots.txt/main/robots.txt'

const getAIPolicies = async () => {
  const response = await fetch(aiAgentsURL)

  if (!response.ok) {
    throw new Error('Error fetching robots.txt')
  }

  const text = await response.text()
  const agents = text
    .split('\n')
    .map((line: string) => line.trim())
    .filter((line: string) => line && !line.startsWith('#'))
    .filter((line: string) => line && !line.startsWith('Disallow'))

  const policies: PolicyItem[] = agents
    .map((agent: string) => ({
      userAgent: agent.replace('User-agent: ', ''),
      disallow: ['/'],
    }
  ))

  return policies
}

const defaultPolicy: PolicyItem = {
  userAgent: '*',
  disallow: ['/humans.txt'],
}

const config: RobotsTxtOptions = {
  policy: [
    ...await getAIPolicies(),
    defaultPolicy,
  ],
  transform(content: string) {
    return `# ${aiAgentsURL}\n${content}`
  },
}

export default config
