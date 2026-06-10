import videosData from './videos.json';

/**
 * A single YouTube video reference shown on a kata. `url` may be any YouTube
 * form (youtu.be, watch?v=, or embed) — the YouTubeEmbed component extracts
 * the video id. `label` is the caption rendered above the player.
 */
export interface VideoLink {
  label: string;
  url: string;
}

type VideosMap = Record<string, VideoLink[]>;

/**
 * Single source of truth for kata video references. The data lives in
 * `videos.json` so links can be added or edited without touching code; this
 * re-exports it as a typed map keyed by kataId. The `_unassigned` bucket in
 * the JSON is intentionally not exposed here — it only parks links that have
 * not yet been mapped to a kata.
 */
const videos: VideosMap = videosData.videos;

/** The video references for a given kata, in the order listed in videos.json. */
export function getVideosForKata(kataId: string): VideoLink[] {
  return videos[kataId] ?? [];
}
