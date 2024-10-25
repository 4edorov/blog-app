import { useAppDispatch } from "../../lib/hooks";
import { closeModal } from "../../lib/features/modal/modal-slice";
import { useCallback, useState } from "react";
import axios from "axios";
import { AppOrg } from "../../types";

export const CreateBlogModal = () => {
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submitBlog = useCallback(async () => {
    const res = await axios({
      method: "post",
      url: AppOrg.BlogsUrl,
      data: {
        title,
        body,
      },
    });
    dispatch(closeModal());

    console.log("create blog result:", res);
  }, [title, body, dispatch]);

  return (
    <div className="blog-modal-wrapper">
      <div className="blog-modal">
        <div className="create-blog-modal">
          <button
            className="blog-card-view-btn close-blog-modal-btn"
            onClick={() => dispatch(closeModal())}
          >
            Close
          </button>
        </div>
        <h3>Create blog</h3>
        <div className="create-blog-input">
          <input
            placeholder="Enter blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <textarea
            placeholder="Enter blog content"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <button
          className="blog-card-view-btn"
          onClick={submitBlog}
          disabled={!title || !body}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
