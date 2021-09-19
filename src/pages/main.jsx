import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import tw, { styled } from "twin.macro"

const ImgContainer = styled.div`
  ${tw`
    flex
    justify-center
    pb-3
  `};
`

const Main = ({ onClick }) => {
  return (
    <div className="h-screen px-5 pt-8">
      <div className="flex justify-center mb-8">
        <div className="mr-3 mb-0">
          <StaticImage
            src="../images/logo.png"
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
      <div className="flex flex-col items-center mb-8">
        <h1 className="font-sans text-5xl mb-0 font-extrabold">Доставка</h1>
        <h1 className="font-sans text-5xl mb-0 font-extrabold">
          от <span className="italic">30 минут</span>
        </h1>
      </div>
      <p className="font-sans text-center px-3 mb-0">
        Готовим и быстро привозим поке, супы, роллы и пиццу в которых правда
        много свежих море продуктов (и не только).
      </p>
      <p className="font-sans text-center">Скоро открытие!</p>
      <div className="flex justify-center mb-8">
        <button
          className="flex items-center justify-center px-8 py-3 border border-transparent font-sans font-medium rounded-full text-white bg-yellow-500 hover:bg-yellow-600"
          onClick={onClick}
        >
          Получить скидку 50%
        </button>
      </div>
      <ImgContainer>
        <StaticImage
          className="rounded-md"
          src="../images/bg-img.png"
          formats={["auto", "webp", "avif"]}
          alt="Поке"
        />
      </ImgContainer>
    </div>
  )
}

export default Main
