import "./Home.css";

const Home = () => {
    return (
        <div className="home-section">
            <div className="home-section-image">
                <img src="https://avatars.githubusercontent.com/u/55839053?v=4" alt="swapnil-image" />
            </div>
            <div className="home-section-introduction">
                <p>
                    Hello, I am <span className="home-section-my-name">Swapnil Wakchaure</span> aspiring a Full Stack Web Developer and doing military style coding at Masai School.
                    I have done various groups as well as individual projects in my coding journey.
                    Looking forward to giving a significant contribution to an organization throught a dedicated effort.
                </p>
            </div>
        </div>
    )
}

export default Home;