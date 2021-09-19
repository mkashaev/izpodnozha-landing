import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const MainDesktop = ({ onClick }) => {
  return (
    <div className="flex h-screen p-16">
      {/* Left */}
      <div className="w-1/2 h-full">
        <div className="flex mb-8">
          <div className="mr-3 mb-0">
            <StaticImage
              src="../../images/logo.png"
              width={60}
              quality={60}
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"
              style={{ marginBottom: 0 }}
            />
          </div>

          <div className="flex flex-col">
            <span className="font-sans leading-7 text-3xl mb-0 font-extrabold">
              Из-под
            </span>
            <span className="font-sans leading-7 text-3xl mb-0 font-extrabold">
              ножа
            </span>
          </div>
        </div>

        <div className="py-24">
          <div className="flex flex-col mb-8">
            <h1 className="font-sans text-5xl mb-0 font-extrabold">Доставка</h1>
            <h1 className="font-sans text-5xl mb-0 font-extrabold">
              от <span className="italic">30 минут</span>
            </h1>
          </div>

          <p className="font-sans mb-0 w-80">
            Готовим и быстро привозим поке, супы, роллы и пиццу в которых правда
            много свежих море продуктов (и не только).
          </p>

          <p className="font-sans">Скоро открытие!</p>
          <div className="flex mb-8">
            <button
              className="flex items-center justify-center px-8 py-3 border border-transparent font-sans font-medium rounded-full text-white bg-yellow-500 hover:bg-yellow-600"
              onClick={onClick}
            >
              Получить скидку 50%
            </button>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="w-1/2 h-full">
        <StaticImage
          className="block rounded-md h-auto w-auto"
          src="../../images/bg-img.png"
          formats={["auto", "webp", "avif"]}
          alt="Поке"
          style={{ width: "auto" }}
        />
      </div>
    </div>
  )
}

export default MainDesktop
