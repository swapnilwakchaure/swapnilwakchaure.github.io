import GitHubCalendar from "react-github-calendar";
import styled from "styled-components";

const Github = () => {

    return (
        <div>
            <Header>Github</Header>

            <GitCalender>
                <GitHubCalendar
                    style={{ margin: "auto" }}
                    username="swapnilwakchaure"
                    // year={new Date().getFullYear()}
                    year={2022}
                />
            </GitCalender>
            <StateStreak>
                <div>
                    <Image
                        align="center"
                        src="https://github-readme-stats.vercel.app/api?username=swapnilwakchaure&show_icons=true&locale=en"
                        alt="swapnilwakchaure"
                    />
                </div>
                <div>
                    <Image
                        align="center"
                        src="https://github-readme-streak-stats.herokuapp.com/?user=swapnilwakchaure&"
                        alt="swapnilwakchaure"
                    />
                </div>
            </StateStreak>
        </div>
        )
}

export default Github;


const Header = styled.h1`
  margin: 20px 0px;
`

const GitCalender = styled.div`
  width: 90%;
  margin: auto;
  margin-bottom: 20px;

  @media (max-width: 400px) {
    width: 90%;
    margin: auto;
    margin-bottom: 20px;
  }
`

const StateStreak = styled.div`
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, max-content));
  grid-gap: 2%;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  width: 90%;

  @media (max-width: 400px) {
    width: 80%;
  }
`


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

