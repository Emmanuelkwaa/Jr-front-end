'use strict';

import React from 'react';
import OwlCarousel from 'react-owl-carousel';

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                items:1,
                merge:true,
                loop: true,
                dots:false,
                margin:10,
                video:true,
                lazyLoad:true,
                center:true,
                nav:true,
                navText:[
                  "<i class='fa fa-chevron-left fa-2x'></i>",
                  "<i class='fa fa-chevron-right fa-2x'></i>"
                ],
                touchDrag:true,
                mouseDrag:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:3
                    }
                }
            },

            items: [
                <div className="item video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/W86cTIoMv2U?rel=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen='true'></iframe>
                </div>,
                <div className="item video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/qeUM1WDoOGY?rel=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen='true'></iframe>
                </div>,
                <div className="item video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/ttKdGMgf8y8?rel=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen='true'></iframe>
                </div>,
                <div className="item video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/OuH9FF3BtZU?rel=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen='true'></iframe>
                </div>
                // <div className="item" key={1}><img class="responsive-img" src={require("./img/cat-3.jpeg")} /></div>,
                // <div className="item" key={2}><img class="responsive-img" src={require("./img/cat-3.jpeg")} /></div>,
                // <div className="item" key={3}><img class="responsive-img" src={require("./img/cat-3.jpeg")} /></div>,
                // <div className="item" key={4}><img class="responsive-img" src={require("./img/cat-3.jpeg")} /></div>,
                // <div className="item" key={5}><img class="responsive-img" src={require("./img/cat-3.jpeg")} /></div>,
                // <div className="item" key={6}><img class="responsive-img" src={require("./img/cat-3.jpeg")} /></div>,
                // <div className="item" key={7}><img class="responsive-img" src={require("./img/cat-3.jpeg")} /></div>,
                // <div className="item" key={8}><img class="responsive-img" src={require("./img/cat-3.jpeg")} /></div>,
                // <div className="item" key={9}><img class="responsive-img" src={require("./img/cat-3.jpeg")} /></div>,
                // <div className="item" key={10}><img class="responsive-img" src={require("./img/cat-3.jpeg")} /></div>,
                // <div class="owl-video" ><iframe width="560" height="315" src="https://www.youtube.com/embed/W86cTIoMv2U" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>,
                // <div class="item-video" key={12} data-merge="2"><a class="owl-video" href="https://www.youtube.com/watch?v=FBu_jxT1PkA"></a></div>,
                // <div class="item-video" key={13} data-merge="1"><a class="owl-video" href="https://www.youtube.com/watch?v=oy18DJwy5lI"></a></div>,
                // <div class="item-video" key={14} data-merge="2"><a class="owl-video" href="https://www.youtube.com/watch?v=H3jLkJrhHKQ"></a></div>
            ],

        };
    }

    render() {

      // const items = this.state.items;
      // const Slides = items.map((slides) => <div className="item" key={1}>{slides}</div>);
      // const contain = <div className='container'>{Slides}</div>
        return (
            <div>
                <OwlCarousel ref={inst => this.slider = inst} className="owl-theme " {...this.state.options} >
                
                    {this.state.items}
                    
                
                </OwlCarousel>
            </div>
        );
    }
}

export default Demo;