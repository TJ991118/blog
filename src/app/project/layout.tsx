import { ReactNode } from "react"

const ProjectListLayout = ({ children }: {
  children: ReactNode
}) => {
  return (
    <div className="project-list-layout">
      {children}
    </div>
  )
}

export default ProjectListLayout