import { Metadata } from 'next'
import VideoPlayerClient from './VideoPlayerClient'

export const metadata: Metadata = {
  title: 'Conflict Management Video',
  description: 'Resource page for conflict management training video.',
}

export default function ConflictManagementVideoPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-20 px-4">
      <div className="container mx-auto max-w-4xl rounded-3xl border border-slate-700 bg-slate-900/80 p-10 shadow-2xl shadow-cyan-500/20">
        <h1 className="text-4xl font-bold text-cyan-300 mb-4">Conflict Management Video</h1>
        <p className="text-slate-400 mb-8">
          This video resource will help you understand how to manage conflict effectively and keep teamwork strong.
        </p>
        <VideoPlayerClient />
      </div>
    </main>
  )
}
