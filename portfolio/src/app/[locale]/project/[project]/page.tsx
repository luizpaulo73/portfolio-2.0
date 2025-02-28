import ProjectComponent from '@/components/ProjectComponent/ProjectComponent';

export default async function ProjectPage({ params }: { params: Promise<{ project: string }> }) {
  
  const project = (await params).project;
  
  
    return (
    <main className="z-10">
      <ProjectComponent project={project} />
    </main>
  )
}