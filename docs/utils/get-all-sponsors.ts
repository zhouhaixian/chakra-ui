import fs from "fs"
import path from "path"

type Sponsors = {
  individuals: {
    MemberId: number
    profile: string
    name: string
    image: string
  }[]
  companies: {
    MemberId: number
    website: string
    name: string
    image: string
    tier: string
  }[]
}

/**
 * Read the information for each sponsor from `.all-sponsorsrc` file
 */
export function getAllSponsors() {
  const sponsorsRcPath = path.resolve(".all-sponsorsrc")
  const sponsors = JSON.parse(fs.readFileSync(sponsorsRcPath, "utf-8"))
  return sponsors as Sponsors
}
