import { ReactNode } from "react"

const ProjectDetailLayout = ({ children }: {
  children: ReactNode
}) => {
  return (
    <div className="project-list-layout">
      {children}
    </div>
  )
}

export default ProjectDetailLayout