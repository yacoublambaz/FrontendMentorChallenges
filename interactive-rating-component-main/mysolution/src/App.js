import star from "./images/icon-star.svg";
import { useState } from "react";
import confirmpic from "./images/illustration-thank-you.svg";
function App() {
  const [rating, setRating] = new useState("");
  const [isRated, setIsRated] = new useState(false);
  const Button = ({ number }) => {
    return (
      <button onClick = {() => setRating(number)} className="btn-number transition-all duration-150 bg-gray-700 h-10 w-10 rounded-full pt-1 text-gray-200 ">
        {" "}
        {number}
      </button>
    );
  };
  return (
    <div>
      {!isRated && (
        <div className="wrapper">
          <img src={star} alt="" className="bg-gray-700 p-2 rounded-full" />
          <h2 className="text-gray-100 text-3xl my-6">How did we do?</h2>
          <p className="text-gray-400 mb-10">
            {" "}
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>

          <ul className="grid grid-cols-5 gap-3 mb-10">
            <li>
              <Button setRating number={1} />
            </li>
            <li>
              <Button setRating number={2} />
            </li>
            <li>
              <Button setRating number={3} />
            </li>
            <li>
              <Button setRating number={4} />
            </li>
            <li>
              <Button setRating number={5} />
            </li>
          </ul>
          <div className="text-center ">
            <button
              onClick={() => setIsRated(true)}
              className="btn-rating w-full text-white uppercase tracking-wide pt-3 pb-2 rounded-full"
            >
              Submit
            </button>
          </div>
        </div>
      )}
      {isRated && <Confirm rating = {rating} setIsRated={setIsRated} />}
    </div>
  );
}

const Confirm = ({rating, setIsRated}) => {
  return (
    <div className="wrapper">
      <img src={confirmpic} alt="" className="block mx-auto mb-5"></img>
      <div className="flex items-center justify-center">
        <p className="p-rating bg-gray-700 rounded-full text-center text-sm px-4 pt-1">
          You selected {rating} out of 5
        </p>
      </div>
      <h2 className="text-center text-gray-100 text-3xl my-6"> Thank you! </h2>
      <p className="text-center text-gray-400 mb-10">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
      <div className="text-center ">
        <button
          onClick={() => setIsRated(false)}
          className="btn-rating w-full text-white uppercase tracking-wide pt-3 pb-2 rounded-full"
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default App;
