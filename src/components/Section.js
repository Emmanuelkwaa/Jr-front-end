import React from 'react';

const Section = () => (
    <div className='section valign-wrapper'>
        <div className='container'>
            <div className='row'>
                    {/* desktop screen */}
                <div className='col s12'>
                    <div class="card horizontal desktop">
                        <div className="card-image">
                            <img class="responsive-img" src={require("./img/cat-3.jpeg")} />
                            <span className="card-title">Couple Cat</span>
                        </div>
                        <div class="card-stacked">
                            <div class="card-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Nunc eget ipsum blandit, commodo sapien sit amet, dictum diam. 
                                    Donec porta dui a sapien gravida vulputate. Cras faucibus, nec vehicula turpis lacus id urna.
                                </p>
                            </div>
                            <div class="card-action">
                                <a class="waves-effect waves-light blue btn">learn more</a>
                            </div>
                        </div>
                    </div>
                    
                    {/* mobile screen */}

                    <div class="card vertical mobile">
                        <div className="card-image">
                            <img class="responsive-img" src={require("./img/cat-3.jpeg")} />
                            <span className="card-title">Couple Cat</span>
                        </div>
                        <div class="card-stacked">
                            <div class="card-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Nunc eget ipsum blandit, commodo sapien sit amet, dictum diam. 
                                    Donec porta dui a sapien gravida vulputate. Cras faucibus, nec vehicula turpis lacus id urna.
                                </p>
                            </div>
                            <div class="card-action">
                                <a class="waves-effect waves-light blue btn">learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Section;