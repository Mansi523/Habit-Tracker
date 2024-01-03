import React from "react";
// importing css for list component
import style from "../List/List.module.css";
// imported icons from react-icons.
import { GiCircle } from "react-icons/gi";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiCheckCircleLight } from "react-icons/pi";
import { PiXCircleLight } from "react-icons/pi";
// imported useState from react.
import { useState, useEffect } from "react";
// imported form component
import Form from "../Form/Form";
// imported useDispatch and useSelector from react-redux
import { useDispatch, useSelector } from "react-redux";
// imported function from habitlist
import {
  deleteHabit,
  showHabit,
  selectHabit,
} from "../../Redux/Reducer/habitlist";

const List = ({ handleModal, setModal, Modal }) => {
  // created dispatch from useDispatch
  const dispatch = useDispatch();
  // imported initialstate from useSelector
  const { habit, Isloading, Error } = useSelector(
    (state) => state.habitReducer
  );
  // imported Edit from UseState
  const [Edit, setEdit] = useState(null);
  // handle edit
  const handleEdit = (h) => {
    setEdit(h);
    handleModal();
  };

  //function for handling the selecting the status.
  const handleSelect = (d, h, index) => {

    const updateDay = h.day.map((x, i) => {
      if (i === index) {
        return {
          ...x,
          status:
            d.status === "nutral"
              ? "done"
              : d.status === "done"
              ? "undone"
              : "nutral",
        };
      }
      return x;
    });

    //  for calculating the total target

    let count = updateDay.reduce((accumulator, x) => {
      if (x.status === "done") {
        return accumulator + 1;
      }
      return accumulator;
    }, 0);

    const day = {
      updateDay,
      id: h.id,
      target: count,
    };
    dispatch(selectHabit(day));
  };

  // function for handling the status for previous days and the future.
  const statusIsUpdate = (d, h, index) => {
    const date = new Date();
    const selectedDate = new Date();
    selectedDate.setDate(d.date.slice(0, 2));
    if (date >= selectedDate) {
      handleSelect(d, h, index);
      return;
    } else {
      alert("u can't change the status");
    }
  };

  return (
    <>
      <div className={style.containerlist}>
        {/* for the lists to diaplayed in the habit tracker app */}
        {habit?.map((h, index) => (
          <>
            <div className={style.upperlist}>
              <div className={style.upperContent}>
                <span className={style.heading}>{h.title}</span>
                <span className={style.timing}>
                  {h?.date.slice(0, 5)} {h?.date.slice(8, 11)}
                </span>
              </div>
              <div className={style.upperlistcontent}>
                {h.show ? (
                  <div className={style.containerupperlist}>
                    {h?.day?.map((d, index) => (
                      <div className={style.dailycontent}>
                        <span className={style.days}>{d.day}</span>
                        <span className={style.months}>{d.date}</span>
                        <div
                          className={style.icons}
                          onClick={() => statusIsUpdate(d, h, index)}
                        >
                          {d.status === "nutral" ? (
                            <GiCircle fontSize={20} className={style.icons} />
                          ) : d.status === "done" ? (
                            <PiCheckCircleLight
                              fontSize={23}
                              className={style.icons}
                            />
                          ) : (
                            <PiXCircleLight
                              fontSize={22}
                              className={style.icons}
                            />
                          )}
                        </div>
                      </div>
                    ))}

                    <div className={style.deletediv}>
                      <RiDeleteBin6Line
                        className={style.deletediv}
                        fontSize={20}
                        onClick={() => dispatch(deleteHabit(h?.id))}
                      />
                    </div>
                  </div>
                ) : (
                  <div className={style.containermonthly}>
                    <div className={style.datemonthly}>
                      <span className={style.monthspan}>{h.day[0].date}</span>
                    </div>

                    <div className={style.discrptionmonthly}>
                      <span>{h.description}</span>
                    </div>
                    <div className={style.iconsformonthly}>
                      <div className={style.iconedit}>
                        <span className={style.monthspan}>{h.target}/7</span>
                      </div>
                      <div>
                        <MdOutlineModeEdit
                          className={style.iconedit}
                          fontSize={20}
                          onClick={() => handleEdit(h)}
                        />
                      </div>
                      <div>
                        <RiDeleteBin6Line
                          className={style.iconedit}
                          fontSize={20}
                          onClick={() => dispatch(deleteHabit(h.id))}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className={style.lowerbtns}>
              <button onClick={() => dispatch(showHabit(h))}>Show Daily</button>
            </div>
          </>
        ))}

        {/* add habit button */}

        <div className={style.lowerbtns2}>
          <button onClick={handleModal}>+ Add Habit</button>
        </div>
      </div>
      {/* modal to be opened when clicking on the addhabit */}
      {Modal && (
        <Form
          handleModal={handleModal}
          setModal={setModal}
          Edit={Edit}
          setEdit={setEdit}
        />
      )}
    </>
  );
};

export default List;
