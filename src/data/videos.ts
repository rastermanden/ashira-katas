import videosData from './videos.json';

/**
 * A single YouTube video reference shown on a kata. `url` may be any YouTube
 * form (youtu.be, watch?v=, or embed) — the YouTubeEmbed component extracts
 * the video id. `label` is the caption rendered above the player. `steps`
 * optionally maps a step number (as a string key) to a timestamp within this
 * video (e.g. "1:47" or "0:14"); the step page deep-links the embed to that
 * moment when viewing the matching step.
 */
export interface VideoLink {
  label: string;
  url: string;
  steps?: Record<string, string>;
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
