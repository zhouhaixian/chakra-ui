import { getAllMembers } from "./get-all-members"
import { getAllSponsors } from "./get-all-sponsors"
import { getDiscordMembers } from "./get-discord-members"
import { getGithubStars } from "./get-github-stars"
import { getNpmDownloads } from "./get-npm-downloads"

export async function getStats() {
  const [
    { prettyCount: githubStars },
    { prettyCount: npmDownloads },
    { prettyCount: discordMembers },
  ] = await Promise.all([
    getGithubStars(),
    getNpmDownloads(),
    getDiscordMembers(),
  ])

  const members = getAllMembers()
  const sponsors = getAllSponsors()

  return {
    githubStars,
    npmDownloads,
    discordMembers,
    members,
    sponsors,
  }
}
