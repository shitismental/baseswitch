import "./AboutHero.css"

function AboutHero() {
  return (
    <>
      <div className="container abouthero__container">
        <div className="abouthero__wrapper">
          <p className="abouthero__title">Повний код можна знайти за посиланням нижче!</p>
          <a target="_blank" href="https://github.com/CuteBuffy/baseswitch" className="abouthero__github"><span>повний код тут!</span></a>
        </div>
      </div>
    </>
  )
}

export default AboutHero