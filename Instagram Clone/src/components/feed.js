import React, { useState } from "react";
import "./instagram.css";


function Feed() {
    let [like, setLike] = useState(3000)
    let [comments, setComment] = useState(['Favourite SuperHero Ever'])
    
    function handleLike(){
      document.querySelector('.action_buttons').childNodes[0].setAttribute('class', 'fa-solid fa-heart')
      document.querySelector('.action_buttons').childNodes[0].setAttribute('style', 'color: red')
      setLike(like+1)
    }

    function handleComments(){
      let newComment = document.querySelector('#comment_box').value
      setComment([...comments, newComment])
      document.querySelector('#comment_box').value = ""

    }


    return(
        <div>
            <div className="container-fluid">
                {/* <!-- Navbar started --> */}
                <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                    <div className="container-fluid Nav">
                        <a className="navbar-brand" href="/">Instagram</a>

                        <ul className="nav"> 
                            <li><a href="/Notis" type="button" className="btn"><i className="fa-regular fa-heart fa-lg"></i></a></li>

                            <li><a href="/" type="button" className="btn"><i className="fa-brands fa-facebook-messenger fa-lg"
                                        style={{color: '#222121'}}></i></a>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/* <!-- Navbar Ended --> */}
            </div>

            {/* <!-- Content Started --> */}
            <div className="container-fluid">
                {/* <!-- Card 1 started --> */}
                <div className="container">
                    <div className="card border-0" >
                        <div className="profile card-header border-0">
                            <div className="image">
                                <img src="https://www.syfy.com/sites/syfy/files/2021/04/film-review-thor-2011.jpg" alt="thor.jpg"/>
                                <h4>Thor</h4>
                            </div>

                            <div className="dots">
                                <i className="fa-solid fa-ellipsis" style={{color: '#000000'}}></i>
                            </div>
                        </div>
                        
                        <div className="post_img mx-auto">
                            <img src="https://media.tenor.com/0wuOlAz-ZaEAAAAM/thor.gif" className="card-img-top" alt="thor.gif"/>
                        </div>
                        <div className="card-body">
                            <div className="action">
                                <div className="action_buttons">
                                    <i onClick={handleLike} className="fa-regular fa-heart"></i>
                                    <i onClick={handleComments} className="fa-regular fa-comment"></i>
                                    <i className="fa-regular fa-paper-plane"></i>
                                </div>
            
                                <div className="save">
                                    <i className="fa-regular fa-bookmark"></i>
                                </div>
                            </div>

                            <div className="likes_cap">
                                <div className="like">
                                    <span>{like} Likes</span>
                                </div>

                                <div className="caption">
                                    <p>
                                        <span>Thor</span> Excited for the action.
                                    </p>
                                </div>
                            </div>

                            <div className="comments">
                                <div className="count">
                                    <p>View all 1500 comments</p>
                                </div>

                                <div className="add_comment">
                                    <ul>                        
                                        {
                                        comments.map((element, ind)=>{
                                            return <li key={ind}><b>Chinmay K </b>{element}</li>
                                        })
                                        }
                                    </ul>
                                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="user.jpg"/>

                                    <input id="comment_box" type="text" placeholder="Add a comment..."/>

                                    <button onClick={handleComments} type="button" className="comm btn btn-secondary btn-sm rounded-end-pill">comment</button>

                                    <p>4 hours ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- card 1 Ended --> */}

                {/* <!-- Card 2 started --> */}
                <div className="container">
                    <div className="card border-0" >
                        <div className="profile card-header border-0">
                            <div className="image">
                                <img src="https://i.pinimg.com/originals/ba/2c/86/ba2c86395347de9b2c8ea8336609cd2f.jpg" alt="ironman.jpg"/>
                                <h4>Tony Stark</h4>
                            </div>

                            <div className="dots">
                                <i className="fa-solid fa-ellipsis" style={{color: '#000000'}}></i>
                            </div>
                        </div>
                        
                        <div className="post_img mx-auto">
                            <img src="https://i.pinimg.com/originals/0d/91/0e/0d910ef3199095408ea3c0eae5fd8615.gif" className="card-img-top" alt="thor.gif"/>
                        </div>
                        <div className="card-body">
                            <div className="action">
                                <div className="action_buttons">
                                    <i className="fa-regular fa-heart"></i>
                                    <i className="fa-regular fa-comment"></i>
                                    <i className="fa-regular fa-paper-plane"></i>
                                </div>
            
                                <div className="save">
                                    <i className="fa-regular fa-bookmark"></i>
                                </div>
                            </div>

                            <div className="likes_cap">
                                <div className="like">
                                    <span>9000 Likes</span>
                                </div>

                                <div className="caption">
                                    <p>
                                        <span>Tony Stark</span> Excited for the action.
                                    </p>
                                </div>
                            </div>

                            <div className="comments">
                                <div className="count">
                                    <p>View all 1840 comments</p>
                                </div>

                                <div className="add_comment">
                                    <ul>
                                        <li>
                                        <b>Chinmay K</b> Favourite SuperHero Ever
                                        </li>
                        
                                        {/* {
                                        comments.map((element, ind)=>{
                                            return <li key={ind}><b>Chinmay K</b>{element}</li>
                                        })
                                        } */}
                                    </ul>
                                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="user.jpg"/>

                                    <input type="text" placeholder="Add a comment..."/>

                                    <button type="button" className="comm btn btn-secondary btn-sm rounded-end-pill">comment</button>

                                    <p>4 hours ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- card 2 Ended --> */}

                {/* <!-- Card 3 started --> */}
                <div className="container">
                    <div className="card border-0" >
                        <div className="profile card-header border-0">
                            <div className="image">
                                <img src="https://c4.wallpaperflare.com/wallpaper/981/655/664/avengers-age-of-ultron-the-avengers-scarlet-witch-elizabeth-olsen-wallpaper-preview.jpg" alt="Scarlet Witch.jpg"/>
                                <h4>Scarlet Witch</h4>
                            </div>

                            <div className="dots">
                                <i className="fa-solid fa-ellipsis" style={{color: '#000000'}}></i>
                            </div>
                        </div>
                        
                        <div className="post_img mx-auto">
                            <img src="https://qph.cf2.quoracdn.net/main-qimg-fe8b2ba37871be31d43c6fc24e2d964d" className="card-img-top" alt="thor.gif"/>
                        </div>
                        <div className="card-body">
                            <div className="action">
                                <div className="action_buttons">
                                    <i className="fa-regular fa-heart"></i>
                                    <i className="fa-regular fa-comment"></i>
                                    <i className="fa-regular fa-paper-plane"></i>
                                </div>
            
                                <div className="save">
                                    <i className="fa-regular fa-bookmark"></i>
                                </div>
                            </div>

                            <div className="likes_cap">
                                <div className="like">
                                    <span>4000 Likes</span>
                                </div>

                                <div className="caption">
                                    <p>
                                        <span>Scarlet Witch</span> Excited for the action.
                                    </p>
                                </div>
                            </div>

                            <div className="comments">
                                <div className="count">
                                    <p>View all 5840 comments</p>
                                </div>

                                <div className="add_comment">
                                    <ul>
                                        <li>
                                        <b>Chinmay K</b> ohhhhhhhhhhhh
                                        </li>
                        
                                        {/* {
                                        comments.map((element, ind)=>{
                                            return <li key={ind}><b>Chinmay K</b>{element}</li>
                                        })
                                        } */}
                                    </ul>
                                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="user.jpg"/>

                                    <input type="text" placeholder="Add a comment..."/>

                                    <button type="button" className="comm btn btn-secondary btn-sm rounded-end-pill">comment</button>

                                    <p>4 hours ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- card 3 Ended --> */}
            </div>
        </div>
    );    
}

export default Feed;