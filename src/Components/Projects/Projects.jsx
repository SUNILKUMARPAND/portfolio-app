
import Chat from '/Images/chat.png'
import Weather from '/Images/weather.png'
import Quiz from '/Images/quiz.png'
import './Project.css'


const Projects = () => {
  return (
    <section id='projects'>
        <h5>My Recent Works</h5>
        <h2>Projects</h2>

        <div className="container project_container">
            <article className='project_item'>
                <div className="project_item_image">
                    <img src={Quiz} alt="" />
                </div>
                <h3>Quiz-App</h3>
                <small className='text-light'>Frontend</small>
                <div className="project_item_btn">
                    <a href="https://github.com/SUNILKUMARPAND/Quiz-app" className='btn'>GitHub</a> {" "}
                    <a href="https://effervescent-moxie-2e53d0.netlify.app/" className='btn'>Demo</a>
                </div>
            </article>
            <article className='project_item'>
                <div className="project_item_image">
                    <img src={Weather} alt="" />
                </div>
                <h3>Weather-App</h3>
                <small className='text-light'>Frontend</small>
                <div className="project_item_btn">
                    <a href="https://github.com/SUNILKUMARPAND/Weather-app" className='btn'>GitHub</a> {"   "}
                    <a href="https://spontaneous-babka-c41513.netlify.app/" className='btn'>Demo</a>
                </div>
            </article>
            <article className='project_item'>
                <div className="project_item_image">
                    <img src={Chat} alt="" />
                </div>
                <h3>Chat-App</h3>
                <small className='text-light'>Frontend</small>
                <div className="project_item_btn">
                    <a href="https://github.com/SUNILKUMARPAND/chat-app" className='btn'>GitHub</a>{"   "}
                    <a href="https://sunilkumarchat-app.netlify.app/" className='btn'>Demo</a>
                </div>
            </article>
        </div>

    </section>
  )
}

export default Projects