interface InfoProps {
    pages: number
    next: number
    prev: number
    count: number
}

export interface Episode {
  id: number
  name: string
  air_date: string
  episode: string
}

export interface EpisodesData {
  episodes: {
    info: InfoProps
    results: Episode[]
  }
}

export type EpisodeCardProps = Pick<Episode, 'id' | 'name'| 'air_date' | "episode">