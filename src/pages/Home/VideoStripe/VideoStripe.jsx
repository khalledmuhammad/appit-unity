import ReactPlayer from 'react-player/youtube'
import "./VideoStripe.scss";

const VideoStripe = () => {
    return (
        <div className="video-stripe">
            <div className="main-container">
                <div className="gridLeftRight">
                    <div className="leftContainer">
                        <div className="text-desc">
                            <p className="title">E-Commerce Website &  Application</p>
                            <p className="desc">If you want to achieve great success in selling your products, you must have an effective e-commerce website & mobile app, and we at Appittuneity are one of the best companies that you can rely on for our long experience in designing and implementing e-commerce solutions for small businesses or even giant commercial establishments, and we have many One of the inspiring success stories in the field of e-commerce.</p>
                        </div>
                    </div>
                    <div className="rightContainer">
                        <div className="video">
                            <ReactPlayer
            height="100%" className='react-player' url='https://www.youtube.com/watch?v=cyIyIseQOWw&t=8s' width="100%" playIcon={false} controls={false} onDuration={0.5} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoStripe;