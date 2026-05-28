"use client"

export default function VideoPlayerClient() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-700 bg-black">
      <video controls className="w-full h-auto bg-black">
        <source src="/conflict-management-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
