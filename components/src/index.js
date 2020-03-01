import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from './ApprovalCard';
const App = () => {
  return (
    <div className="ui container comments">
        <ApprovalCard >
      <CommentDetail
        author="Sam"
        timeAgo="Today at 1pm"
        cotent="Ncie blog post"
      />
      </ApprovalCard>/>
      <ApprovalCard>
      <CommentDetail
        author="Jane"
        timeAgo="Today at 4pm"
        cotent="Good blog post"
      />
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail
        author="James"
        timeAgo="Today at 5pm"
        cotent="Best blog post"
      />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
