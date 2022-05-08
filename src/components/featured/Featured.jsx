import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

const Featured = ({type}) => {
  return (
    <div className="featured">
    {type && (
        <div className="category">
            <span>{type === "movie" ? "Movies" : "Series"}</span>
            <select name="genre" id="genre">
                <option >Genre</option>
                <option value="adventure">Adventure</option>
                <option value="comedy">Comedy</option>
                <option value="crime">Crime</option>
                <option value="fantasy">Fantasy</option>
                <option value="historical">Historical</option>
                <option value="horror">Horror</option>
                <option value="romance">Romance</option>
                <option value="sci-fi">Sci-fi</option>
                <option value="thriller">Thriller</option>
                <option value="western">Western</option>
                <option value="animation">Animation</option>
                <option value="drama">Drama</option>
                <option value="documentary">Documentary</option>
            </select>
        </div>
    )}
    <img 
        src="https://th.bing.com/th/id/R.3f1be987bcda6a228fd3c04f9ac03619?rik=UDnSF2JhxtY1Kw&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fa%2f6%2f7%2f187767.jpg&ehk=CyDq6yhquQxHlEAQ87k0o19yZ3OoGBugSxxkMbIHHdk%3d&risl=&pid=ImgRaw&r=0" alt=""
        
    />
    <div className="info">
            <img src="https://th.bing.com/th/id/OIP.utawMg6f_p3lTkRVs1k1YwHaC3?w=280&h=135&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=""/>
            
            <span className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow />
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined />
                    <span>Info</span>
                </button>
                
            </div>
            </div>
    </div>
  )
}

export default Featured
