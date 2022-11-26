import Dev from "./Dev.png";
function Home() {
  return (
    <>
      <div className="container-fluid  text-center">
     <div className="row">
          <div className="col">
            <img src={Dev} className="img-responsive" height="400"  width="350"></img>
          </div>
          <div className="col">
            <h1>Devendra Kumar Pal</h1>
            <h3>Front End Developer</h3>
            
            <p>
              Knowledgeable Front End Developer adept at creating successful
              websites. Proficient in HTML, CSS, JAVASCRIPT & ReactJS. I am a
              hard worker with fast learning capability and self motivated
              person.
            </p>

          <br/>
          <br/>
            
          
              <button type="button" class="btn btn-secondary"><a href="#" target="_blank" download={"devendra cv.pdf"}>Download CVS</a></button> 
          
          </div>
          
          </div>
      </div>
    </>
  );
}

export default Home;
