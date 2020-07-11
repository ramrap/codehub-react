import React from 'react';
import Slider from "react-slick";
import VariableWidth from './feedImageCarousel';
import {AiTwotoneHeart } from 'react-icons/ai';
import {GoCommentDiscussion } from 'react-icons/go';
import {BsLink} from 'react-icons/bs';

const data = {
    title: "Here comes title",
    uploadedBy: "ARSSSV",

    imageArray: ["https://www.google.com/search?q=image+url&rlz=1C5CHFA_enIN883IN883&sxsrf=ALeKk00ZwO3lC2JmQrKb_QcFgTrGS6zv9A:1594479837181&tbm=isch&source=iu&ictx=1&fir=EmaNXlzqnBRexM%252CP9jwkdFUccZu2M%252C_&vet=1&usg=AI4_-kQqNCyl8KVJdSVElanppsoBilHz2Q&sa=X&ved=2ahUKEwiOvq-ivMXqAhWOzDgGHU7UBWQQ9QEwAXoECAoQMQ&biw=1440&bih=674#imgrc=EmaNXlzqnBRexM", "https://www.google.com/search?q=image+url&rlz=1C5CHFA_enIN883IN883&sxsrf=ALeKk00ZwO3lC2JmQrKb_QcFgTrGS6zv9A:1594479837181&tbm=isch&source=iu&ictx=1&fir=EmaNXlzqnBRexM%252CP9jwkdFUccZu2M%252C_&vet=1&usg=AI4_-kQqNCyl8KVJdSVElanppsoBilHz2Q&sa=X&ved=2ahUKEwiOvq-ivMXqAhWOzDgGHU7UBWQQ9QEwAXoECAoQMQ&biw=1440&bih=674#imgrc=EmaNXlzqnBRexM"],
    description: "Behind sooner dining so window excuse he summer. Breakfast met certainty and fulfilled propriety led. Waited get either are wooded little her. Contrasted unreserved as mr particular collecting it everything as indulgence. Seems ask meant merry could put. Age old begin had boy noisy table front whole given.  ",
    websiteLink: "http://randomtextgenerator.com/",
    websiteText:"My Link"
}


class FeedElement extends React.Component {

    render() {
        return (
            <div className="my-4">
                <div className="title__Feed">{data.title}</div>
                <div className="d-flex flex-row">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg" class="rounded-circle mr-3" height="50px" width="50px" alt="avatar"></img><div><h5>{data.uploadedBy}</h5>
                        <span>4 days ago</span>
                    </div>
                </div>
                <VariableWidth/>
                <div>{data.description}</div>

                <div className="d-flex flex-row">
                <div className="p-2"><AiTwotoneHeart/> 4likes</div>
                <div className="p-2"><GoCommentDiscussion/> 34 Comments</div>
                <div className="p-2"><BsLink/><a href={data.websiteLink}>{data.websiteText}</a></div>
                </div>

            </div>

        )
    }
}

export default FeedElement;

