export function Hero() {
  return (
    <section className="min-h-screen flex items-center overflow-hidden relative group">
      <div className="absolute inset-0 w-full h-full z-0 bg-neutral-900 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          controls={false}
          tabIndex={-1}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
