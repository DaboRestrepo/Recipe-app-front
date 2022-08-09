import ProjectHover from "./ProjectHover";

export default function ProjectSlider() {
  return (
    <>
    <div className="slider-container">
        <div className="box-recipe">
          <div className="image"><img src="/images/Ojingeo-muchim.png" alt="Ojingeo" /></div>
          <div className="star-img"><img src="/images/star.png" alt="star"/>5.0</div>
          <div className="heart-img"><img src="/images/heart.png" alt="heart"/></div>
          <ProjectHover />
          <p><span className="word-1">Ojingeo </span><span className="word-2">Muchim</span></p>
        </div>
        <div className="box-recipe">
          <div className="image"><img src="/images/Cola-chicken.png" alt="Cola" /></div>
          <div className="star-img"><img src="/images/star.png" alt="star"/>5.0</div>
          <div className="heart-img"><img src="/images/heart.png" alt="heart"/></div>
          <ProjectHover />
          <p>Cola <span className="word-2">Chicken</span></p>
        </div>
        <div className="box-recipe">
        <div className="image"><img src="/images/Roast-carrot.png" alt="Roast" /></div>
          <div className="star-img"><img src="/images/star.png" alt="star"/>4.5</div>
          <div className="heart-img"><img src="/images/heart.png" alt="heart"/></div>
          <ProjectHover />
          <p>Roasted <span className="word-2">Carrot</span></p>
        </div>
        <div className="box-recipe">
        <div className="image-cherries"><img src="/images/Sheet-cherries.png" alt="Cherries" /></div>
          <div className="star-img"><img src="/images/star.png" alt="star"/>4.0</div>
          <div className="heart-img"><img src="/images/heart.png" alt="heart"/></div>
          <ProjectHover />
          <p>Sweet <span className="word-2">Cherries</span></p>
        </div>
      </div>
    </>
  )
}