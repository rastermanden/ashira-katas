interface YouTubeEmbedProps {
  url: string;
  label: string;
  timestamp?: string;
}

function getYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/
  );
  return match ? match[1] : null;
}

function parseTimestamp(ts: string): number {
  const parts = ts.split(':').map(Number);
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  return 0;
}

export default function YouTubeEmbed({ url, label, timestamp }: YouTubeEmbedProps) {
  const videoId = getYouTubeId(url);
  if (!videoId) return null;

  const startTime = timestamp ? parseTimestamp(timestamp) : 0;
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}${startTime > 0 ? `?start=${startTime}` : ''}`;

  return (
    <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
      <div className="bg-gray-800 px-3 py-2 text-white text-xs font-medium flex items-center gap-2">
        <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
        {label}
        {timestamp && <span className="text-gray-400">@ {timestamp}</span>}
      </div>
      <div className="relative pb-[56.25%] h-0">
        <iframe
          src={embedUrl}
          title={label}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
          loading="lazy"
        />
      </div>
    </div>
  );
}
