import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
    <div className="ui container comments">
        <ApprovalCard>
            <div>
                <h4>Yallah!</h4>
                Are you sure you are ok?
            </div>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail
                image={Faker.image.avatar()}
                author="Taghi" 
                timeAgo="Today at 2:37pm" 
                text={Faker.lorem.sentence()} 
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                image={Faker.image.avatar()} 
                author="Naghi" 
                timeAgo="Today at 8:43pm" 
                text={Faker.lorem.sentence()} 
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                image={Faker.image.avatar()} 
                author="Zeynab" 
                timeAgo="Yesterday at 6:57am" 
                text={Faker.lorem.sentence()} 
            />
        </ApprovalCard>
    </div>
    );

};

ReactDOM.render(<App />, document.querySelector('#root'));