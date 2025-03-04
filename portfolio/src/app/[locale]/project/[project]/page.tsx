import ProjectComponent from '@/components/ProjectComponent/ProjectComponent';

export default async function ProjectPage({ params }: { params: Promise<{ project: string }> }) {
  
  const project = (await params).project;
  
  
    return (
    <main>
      <ProjectComponent project={project} />
    </main>
  )
}