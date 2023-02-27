import GitHubCalendar from "react-github-calendar";

const Github = () => {

    return (
        <div>
            <h1>Github</h1>

            <div>
                <GitHubCalendar
                    style={{ margin: "auto" }}
                    username="swapnilwakchaure"
                    // year={new Date().getFullYear()}
                    year={2022}
                />
            </div>
            <div>
                <p>
                    <img
                        align="center"
                        src="https://github-readme-stats.vercel.app/api?username=swapnilwakchaure&show_icons=true&locale=en"
                        alt="swapnilwakchaure"
                    />
                </p>
            </div>
            <div>
                <p>
                    <img
                        align="center"
                        src="https://github-readme-streak-stats.herokuapp.com/?user=swapnilwakchaure&"
                        alt="swapnilwakchaure"
                    />
                </p>
            </div>
        </div>
        )
}

export default Github;




{/* <p align="left">
                    <a
                        href="https://medium.com/swapnilwakchaure"
                        target="blank">
                        <img
                            align="center"
                            src="https://raw.githubusercontent.com/swapnilwakchaure/github-profile-readme-generator/master/src/images/icons/Social/medium.svg" alt="swapnil@wakchaure" height="30" width="40" />
                            </a>
</p>

<p>&nbsp;<img align="center" src="https://github-readme-stats.vercel.app/api?username=swapnilwakchaure&show_icons=true&locale=en" alt="swapnilwakchaure" /></p>

<p><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=swapnilwakchaure&" alt="swapnilwakchaure" /></p> */}

