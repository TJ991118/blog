import { ReactNode } from "react"

const PostDetailLayout = ({ children }: {
  children: ReactNode
}) => {
  return (
    <div className="post-detail-layout">
      { children }
    </div>
  )
}

export default PostDetailLayout