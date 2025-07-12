"use client"
import { ReactNode } from "react"

import "./index.scss"

import Header from "./Header"
import Footer from "./Footer"
import Container from "@/components/common/Container"


const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Container type="page" className="main-layout">
      <Header />
      <Container type="section" id="content" className="content">
        <main>
          {children}
        </main>
      </Container>
      <Footer />
    </Container>
  )
}

export default MainLayout