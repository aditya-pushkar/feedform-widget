import { useState } from "preact/hooks";
import {useParams} from "react-router-dom"

export function Widget(){
  const [showFeedForm, setShowFeedForm] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [feedbackType, setFeedbackType] = useState("")
  const [isSubmited, setIsSubmited] = useState(false)

  const handleFeedForm = () => {
    if (showFeedForm) return setShowFeedForm(false);
    if (!showFeedForm) return setShowFeedForm(true);
  };

  const handleShowInput = (inputName) => {
    setFeedbackType(inputName)
    if (showInput) return setShowInput(false);
    if (!showInput) return setShowInput(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowInput(false)
    setShowInput(false)
    setShowFeedForm(false)
    setIsSubmited(true)

  }

  const {id} = useParams()
  console.log("------ID-------", id)


  return (
      <div data-dial-init className="px-3 py-2" style={{position: "fixed", right: 0, bottom: 0}}>
      {showFeedForm && (
        <div className="w-80 flex flex-col border border-neutral shadow-md bg-base-100">
          {showInput ? (
            <>
            <div className="flex items-center justify-between border-b px-2 py-4 bg-gradient-to-b from-secondary to-secondary-focus">
                <h1 className="font-medium text-neutral-content text-center text-lg w-full">
                  {feedbackType}
                </h1>
              </div>
              <form 
              onSubmit={handleSubmit}
              className="flex flex-col border-none gap-5 p-3">
              <input
                type="email"
                placeholder="Your email (optional)"
                className="input input-bordered input-primary w-full max-w-xs"
              />
              <textarea className="textarea textarea-primary" placeholder="Your feedback" required></textarea>

              <div className="flex flex-row justify-between pt-5">
                <button className="btn" onClick={()=>handleShowInput(false)}>Back</button>
                <button type="submit" className="btn btn-primary" >Submit</button>
              </div>
            </form>
            </>
          ) : (
            <>
              <div className="flex items-center justify-between border-b px-2 py-4 bg-gradient-to-b from-secondary to-secondary-focus">
                <h1 className="font-medium text-neutral-content text-center text-lg w-full">
                  Feedback
                </h1>
              </div>

              <div className="flex flex-col gap-3 mt-4 mb-3">
                <div>
                  <h1 className="text-center font-medium">
                    What feedback do you have?
                  </h1>
                </div>
                <div className="flex flex-col items-center">
                  <button onClick={()=>handleShowInput("😁 General Feedback")} className="text-sm hover:bg-base-200 px-2 py-2">
                    😁 General Feedback
                  </button>
                  <button onClick={()=>handleShowInput("💡 Suggest Idea")}   className="text-sm hover:bg-base-200 px-2 py-2">
                    💡 Suggest Idea
                  </button>
                  <button onClick={()=>handleShowInput("🐞 Report Bug")}   className="text-sm hover:bg-base-200 px-2 py-2">
                    🐞 Report Bug
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
      <div className="flex flex-col items-end mt-3 mb-1">
        {!showFeedForm ? (
          <button onClick={handleFeedForm} className="btn btn-neutral btn-sm">
            <span>
              <i class="ri-message-2-fill"></i>{" "}
            </span>
            {!isSubmited?"feedback":"thanks"}
          </button>
        ) : (
          <button
            onClick={handleFeedForm}
            type="button"
            aria-expanded="false"
            className="btn btn-circle btn-primary"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:rotate-45"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};
