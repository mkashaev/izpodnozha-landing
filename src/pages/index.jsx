import React, { useState } from "react"
import Main from "./main"
import MainDesktop from "../components/MainDesktop"
import Modal from "../components/Modal"
import Seo from "../components/seo"

const IndexPage = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Seo title="Home" />
      <div className="lg:hidden">
        <Main onClick={() => setOpen(true)} />
      </div>

      <div className="hidden lg:block">
        <MainDesktop onClick={() => setOpen(true)} />
      </div>

      <Modal open={open} onSetOpen={setOpen} />
    </>
  )
}

export default IndexPage
