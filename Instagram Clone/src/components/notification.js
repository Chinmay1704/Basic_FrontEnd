import React from "react";
import "./notification.css"

function Notis(){
    return(
        <div>
            <div className="container-fluid">
                <div className="head container">
                    <div className="heading">
                        <h2>Notifications</h2>
                    </div>
                    
                    <div className="requests container-fluid">
                        <div className="photo_reqcount">
                            <div>
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt=""/>
                            </div>

                            <div>
                                <span>Follow Requests</span>
                                <p>
                                    __Sacrlet123_
                                </p>

                            </div>
                        </div>

                        <div>
                            <i className="fa-solid fa-chevron-right" style={{color: '#000000'}}></i>
                        </div>
                    </div>
                    
                </div>

                <div className="blk_1 container">
                    <h4>Yesterday</h4>

                    <div className="y_updates">
                        <img src="https://pbs.twimg.com/profile_images/1439953850471911426/s4pE9SYa_400x400.jpg" alt="ironman.jpg" />
                        <p>
                            <span className="username">IronMan</span> started following you. <span className="duration">1d</span>
                        </p>

                        <button type="button" className="btn btn-primary">Follow Back</button>
                    </div>
                </div>

                <div className="blk_2 container">
                    <h4>Last 30 days</h4>

                    <div className="updates">
                        <img src="https://pbs.twimg.com/profile_images/1439953850471911426/s4pE9SYa_400x400.jpg" alt="ironman.jpg" />
                        <p>
                            <span className="username">IronMan</span> started following you. <span className="duration">1d</span>
                        </p>

                        <button type="button" className="btn btn-primary">Follow Back</button>
                    </div>

                    <div className="comment_like">
                        <img className="liker" src="https://pbs.twimg.com/profile_images/1439953850471911426/s4pE9SYa_400x400.jpg" alt="ironman.jpg" />
                        <p>
                            <span className="username">IronMan</span> liked your comment: Awesome. <span className="duration">1W</span>
                        </p>

                        <img className="liked" src="https://playcontestofchampions.com/wp-content/uploads/2014/11/MCOC_IronMan_ChampSpot_720x720.jpg"alt="ironman.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notis;