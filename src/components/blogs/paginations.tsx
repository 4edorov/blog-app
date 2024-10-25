import {
  selectPage,
  nextPage,
  prevPage,
} from "../../lib/features/pagination/pagination-slice";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";

export const Pagination = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectPage);

  return (
    <div className="pagination-block">
      <button
        className="blog-card-view-btn pagination-btn"
        onClick={() => dispatch(prevPage())}
      >
        Prev
      </button>
      <div className="pagination-page">{page}</div>
      <button
        className="blog-card-view-btn pagination-btn"
        onClick={() => dispatch(nextPage())}
      >
        Next
      </button>
    </div>
  );
};
