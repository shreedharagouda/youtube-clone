import React from 'react';

const commentsData = [
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Akshay Saini",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Akshay Saini",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Akshay Saini",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Akshay Saini",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Akshay Saini",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];


const CommentList=({comments})=>{
  return comments.map((comment,index)=>(
    <div key={index}>
      <Comment data={comment}/>
      <div className="pl-5 border border-l-black ml-5">
          <CommentList comments={comment.replies}/>
      </div>
    </div>
    ));
    
};

const Comment=({data})=>{
  const {name,text, replies}=data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg m-2">
      <img
      className="w-12 h-12"
       alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};



const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
    <h1 className="text-2xl font-bold">
    Comment:
    </h1>
    <CommentList comments={commentsData}/>
    </div>
  );
}

export default CommentsContainer;