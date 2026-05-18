import { useEffect, useRef, useState } from "react";

/**
 * VideoCard component that plays a video in landscape mode with a smooth fade-loop.
 */
export default function VideoCard({ src, title, description, className = "" }) {
  const videoRef = useRef(null);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      // Start fading out 0.5 seconds before the end
      if (video.duration - video.currentTime < 0.5 && !isFading) {
        setIsFading(true);
      }
    };

    const handleEnded = () => {
      // Loop the video with a fade-in
      video.currentTime = 0;
      video.play().catch(() => {});
      setIsFading(false);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, [isFading]);

  return (
    <div className={`video-card landscape ${className}`}>
      <div className="video-card__container">
        <video
          ref={videoRef}
          src={src}
          muted
          playsInline
          autoPlay
          className={`video-card__video ${isFading ? "video-card__video--fade-out" : "video-card__video--fade-in"}`}
        />
        <div className="video-card__overlay">
          <div className="video-card__text-content">
            {title && <h3 className="video-card__title">{title}</h3>}
            {description && <p className="video-card__description">{description}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
