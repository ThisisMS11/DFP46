import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getItem } from "../config/FirebaseMethods";
import {data} from '../components/homeData';
import "../style/Home.scss";

export default function Home() {
  let [course, setCourse] = useState();
  let [quiz, setQuiz] = useState();
  let [studentRegistration, setStudentRegistration] = useState();
  let [trainerRegistration, setTrainerRegistration] = useState();
  // let [data, setData] = useState([]);
  let [data1, setData1] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    getItem("course")
      .then((_) => {
        setCourse(Object.values(_));
      })
      .catch((_) => console.log(_));

    getItem("quiz")
      .then((_) => {
        setQuiz(Object.values(_));
      })
      .catch((_) => console.log(_));

    getItem("StudentRegistration")
      .then((_) => {
        setStudentRegistration(Object.values(_));
      })
      .catch((_) => console.log(_));

    getItem("TrainerRegistration")
      .then((_) => {
        setTrainerRegistration(Object.values(_));
      })
      .catch((_) => console.log(_));

    getItem("course")
      .then((_) => {
        let arr = Object.values(_).filter((value, index) => {
          if (value.isPubliclyOpen === "yes") {
            return value;
          }
        });
        setData(arr);
      })
      .catch((_) => console.log(_));

    getItem("quiz")
      .then((_) => setData1(Object.values(_)))
      .catch((_) => console.log(_));
  }, []);

  return (
    <section className="home">
      <div className="hero">
        <div className="leftSide">
          <h1>
            <span>Explore</span> Wonders of Class XII Physics
          </h1>
          <p>
            Embark on an educational journey that delves into the intriguing
            world of physics, where theory and application come together to
            unravel the mysteries of the universe
          </p>
          <button onClick={() => navigate("/course")}>View Chapters</button>
        </div>
        <div className="rightSide1">
          <div className="image"></div>
        </div>
      </div>

      <div className="courses">
        <div className="box">
          {data && data.length > 0 ? (
            data.map((value, index) => {
              return (
                <div
                  key={index}
                  className="box1"
                  // onClick={() =>
                  //   navigate("course/course-detail", { state: value })
                  // }
                >
                  <img src={value.image} alt="image not found" width="300px" />
                  <div className="description">
                    <h1>{value.heading}</h1>
                    <p>{value.content}</p>
                    {/* <p>no. of Quiz: {value.noOfQuiz}</p> */}
                    {/* <h2>RS {value.price}</h2> */}
                  </div>
                </div>
              );
            })
          ) : (
            <p>Empty</p>
          )}
        </div>
      </div>

      <div className="quiz12">

        <div className="in-box1">
        
          <h1>Get the learning app</h1>

          <p>
            Download lessons modules and learn anytime, anywhere with the Class
            XII Physics app.
          </p>

          <img src="../images/card/img5.png" alt=""></img>
        </div>

        <div className="in-box2">
          <img src="../images/card/img4.png" alt=""></img>
        </div>
      </div>

      <div className="footer">
        <div className="parentFooter">
          <div className="box11">
            <div className="logo">
              <h1 onClick={() => navigate("/")}>XII Physics</h1>
            </div>
            <p>0987-654-321</p>
          </div>
          <div className="box12">
            <h1>Pages</h1>
            <ul>
              <li>
                <Link to={"course"}>Learn</Link>
              </li>
              <li>
                <Link to={"quiz"}>Practice</Link>
              </li>
              <li>
                <Link to={"result"}>Activity</Link>
              </li>
              <li>
                <Link to={"login"}>Login</Link>
              </li>
              <li>
                <Link to={"sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="childFooter">
          <h4>
            Copyright © {new Date().getFullYear()} -XII Physics- All rights
            reserved
          </h4>

          <div className="goToTop">
            <a href="#">
              <i className="fa-solid fa-angle-up"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
