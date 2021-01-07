import React,{useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {SCRUMCARD_FEACTURE_KEY} from "../../redux/scrumCard/scrumcard.reducer";
import {addCard} from "../../redux/scrumCard/scrumCard.actions";


let Todo = () => {
    let dispatch = useDispatch();
    let cardInfo = useSelector((state)=>{
        return state[SCRUMCARD_FEACTURE_KEY]
    });

    let [card,setCard] = useState({
       cardData:{

               title: '',
               discription: ''
       }
    });

    let updateInput = (e) => {
        setCard({
            cardData: {
                ...card.cardData,
                [e.target.name]:e.target.value
            }
        })
    };
    let [message,setMessage]=useState(false);



    let clickData = () => {
        setMessage(!message);
    };

    let cardSubmit = (e) => {
        e.preventDefault();
        dispatch(addCard(card.cardData));
    };



    return(
      <React.Fragment>
            <pre>{JSON.stringify(cardInfo)}</pre>
            <pre>{JSON.stringify(card.cardData)}</pre>
          <div className="card">
              <div className="card-header bg-primary text-white">
                  <h5 className="card-title text-center">To Do
                      <i className="fas fa-ellipsis-v text-primary float-right"/>
                  </h5>
              </div>
              <div className="card-body p-0">

                  {


                              <div className="card m-3">
                                  <div className="card-body p-0  text-center pt-2 ">



                                     <ul className="list-group">
                                         <li className="list-group-item list-group-item-primary text-uppercase" data-toggle="collapse"
                                             data-target="#red-card">{cardInfo.title}

                                         </li>

                                         <div className="collapse" id="red-card">
                                             <li className="list-group-item list-group-item-primary text-dark " >
                                                 {cardInfo.discription}
                                             </li>
                                         </div>


                                     </ul>


                                  </div>
                              </div>



                  }

              <React.Fragment>
                  {
                      message === true ? <React.Fragment>
                              <form onSubmit={cardSubmit}>
                                  <div className="form-group p-3">
                                      <input
                                          value={card.cardData.title}
                                          name="title"
                                          onChange={updateInput}
                                          type="text" className="form-control form-control-sm" placeholder="Title" />
                                  </div>
                                  <div class="form-group mx-3">
                                      <textarea
                                          value={card.cardData.discription}
                                          onChange={updateInput}
                                          name="discription"
                                          class="form-control form-control-sm" id="textAreaExample" rows="2" cols="2" placeholder="Description"/>
                                  </div>
                                  <div className="pl-2">
                                      <input
                                             type="submit" value="Add" className="btn btn-secondary btn-sm"/>
                                      <input
                                           value="cancle" className="btn btn-secondary btn-sm"/>
                                  </div>
                              </form>
                      </React.Fragment>:
                      <React.Fragment>

                      </React.Fragment>
                  }
              </React.Fragment>
              </div>
              <div className="card-footer bg-primary text-white">
                  <button
                      onClick={clickData}
                      className="btn btn-sm btn-teal">Add Card</button>

              </div>
          </div>

      </React.Fragment>

  )
};

export default Todo;

