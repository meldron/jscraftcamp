import React from "react"

import TextBlock from "../../components/text-block"

import style from "./sponsors.module.scss"

const Sponsors = () => {
  const sponsors = [
    {
      name: "codecentric",
      src: "/img/cc_logo.png",
      link: "https://www.codecentric.de/",
    },
    {
      name: "Grollmus",
      src: "/img/sponsor-2022/grollmus.png",
      link: "https://www.grollmus.de/",
    },
    {
      name: "compose.us",
      src: "/img/sponsor-2022/compose-us.png",
      link: "https://www.compose.us/",
    },
    {
      name: "TNG Technology consulting",
      src: "/img/sponsor-2019/tng.png",
      link: "https://www.tngtech.com/",
    },
    {
      name: "Peerigon",
      src: "/img/sponsor-2022/peerigon.png",
      link: "https://www.peerigon.com/",
    },
  ]
  return (
    <TextBlock headlineComponent="h2" headline="Our great sponsors">
      <div className={style.row}>
        {sponsors.map((s, i) => {
          return (
            <div className={style.col} key={s.name}>
              <a href={s.link} rel="noopener noreferrer" target="_blank">
                <div className={style.image}>
                  <img alt={s.name} src={s.src} width="100%" />
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </TextBlock>
  )
}
export default Sponsors
