import { ReactNode } from "react"

const PostListLayout = ({ children }: {
  children: ReactNode
} ) => {
  return (
    <div className="post-list-layout">
      { children }
    </div>
  )
}

export default PostListLayout