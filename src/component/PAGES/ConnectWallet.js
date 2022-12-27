import React from "react";


export const ConnectWallet = () => {
    return(
        <div className="contact">
            <div className="contact__container">
                <div className="box__contact">
                      <div className="header__container">
                          <div className="header">Leave a message</div>
                        </div>
                        <div className="box-container" >
                            <form action="submit" method="post" className="box-container">
                            <label className="label">Name: </label>
                                <br/>
                           <input className="border-box" placeholder="Name" type="text"></input>
                           
                            <label className="label">Email: </label>
                                <br/>
                            <input className="border-box" placeholder="Email" type="email"></input>  
                           
                            <label className="label">Message: </label>
                                <br/>
                            <textarea className="compose-email" placeholder="Enter your message" type="text"></textarea>
                            <br/>  
                              <botton className="btn__submit">submit</botton>                         
                            </form>                       
                        </div>
                     </div>
            </div>
        </div>
    );
};