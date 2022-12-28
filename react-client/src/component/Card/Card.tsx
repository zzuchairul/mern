import { IconContext } from 'react-icons/lib';
import './style.css';
import { RxCross2 } from 'react-icons/rx'

const Card = (props: any) => {
  return (
    <div className="Card Card__purple">
      <div className="Card__wrapper">
        <div className="Card__header">
          <h3>Title</h3>
          <IconContext.Provider value={{
            color: "black",
            size: "24px"
          }}>
            <RxCross2 />
          </IconContext.Provider>
        </div>
        <hr />
        <div className="Card__body">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quas asperiores sunt iure temporibus nam dolorum animi rem illum maxime, repellendus ullam, quod cupiditate non nostrum. Quas a esse accusantium a esse accusantium a esse accusantium a esse accusantium a esse accusantium a esse accusantium a esse accusantium a esse accusantium a esse accusantium a esse accusantium.</p>
        </div>
      </div>
    </div>
  )
}

export default Card 