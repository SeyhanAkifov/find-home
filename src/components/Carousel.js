function Carousel () {

    return (
<>
<div className="slideshow-container">
     <div className="mySlides fade">
    <div className="numbertext">1 / 3</div>
    <img src='../images/berlin.jpg' />
    <div className="text">Caption Text</div>
  </div>

  <div className="mySlides fade">
    <div className="numbertext">2 / 3</div>
    <img src='../images/berlin.jpg' />
    <div className="text">Caption Two</div>
  </div>

  <div className="mySlides fade">
    <div className="numbertext">3 / 3</div>
    <img src='../images/berlin.jpg'/>
    <div className="text">Caption Three</div>
  </div>

 
  <a className="prev" onClick="plusSlides(-1)">&#10094;</a>
  <a className="next" onclick="plusSlides(1)">&#10095;</a>
</div>



<div >
  <span className="dot" onClick="currentSlide(1)"></span>
  <span className="dot" onClick="currentSlide(2)"></span>
  <span className="dot" onClick="currentSlide(3)"></span>
</div>
</>
)
}

export default Carousel