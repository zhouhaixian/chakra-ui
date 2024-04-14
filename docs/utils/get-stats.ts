import { getAllMembers } from "./get-all-members"
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

  return {
    githubStars,
    npmDownloads,
    discordMembers,
    members,
  }
}
