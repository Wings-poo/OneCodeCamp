import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Eject = (props) => {
    if (props.eject === false)
        return null;
    else
        return (
            <div>
                <Carousel data-interval="false">
                    <Carousel.Item>
                        <h5>. ඞ　。　　　　•　 　ﾟ　　。 　　.　　　.　　　 　　.　　　　　。　　 。　. 　.　　 。　 。　 . • . {props.suspect} was ejected. . . 　 。　. 　 　　。　　　　　　ﾟ　　　.　　　　　. ,　　　　.　 .　　 .</h5>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h5>. 　。　　　　•　 　ﾟ　　。 　　.　　　.　　　 　　.　　　　　。　　 。　. 　.　　 。　 ඞ 。　 . • . {props.suspect} was ejected. . . 　 。　. 　 　　。　　　　　　ﾟ　　　.　　　　　. ,　　　　.　 .　　 .</h5>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h5>. 　。　　　　•　 　ﾟ　　。 　　.　　　.　　　 　　.　　　　　。　　 。　. 　.　　 。　 。　 . • . {props.suspect} was ejected. . . 　 。　. 　  　　。　　　　　　ﾟ　　　.　　　　　. ,　　　　.　 ඞ.　　 .</h5>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
}

export default Eject
