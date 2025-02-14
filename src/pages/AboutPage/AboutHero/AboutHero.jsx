import "./AboutHero.css"

function AboutHero() {
  return (
    <>
      <div className="container abouthero__container">
        <div className="abouthero__wrapper">
          <p className="abouthero__title">Цей сайт зроблений за день, без сну, без кави, але з великим бажанням</p>
          <a target="_blank" href="https://github.com/CuteBuffy/nsconverter" className="abouthero__github"><span>повний код тут!</span></a>
        </div>
      </div>
    </>
  )
}

export default AboutHero