export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="about-layout">
      <aside>Dashboard Sidebar</aside>
      <main>{children}</main>
    </div>
  )
}
