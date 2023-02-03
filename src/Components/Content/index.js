    // id: 1,
    // avatar: avaIMG,
    // authorName: "Aruzhan",
    // topicsName: "Frontend Development",
    // date: "23 Jan",
    // header: "7 Practical CSS Tips",
    // content: "You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.",
    // language: "Java Script",
    // duration: "12 min read",
    // intended: "Selected for you",
    // img: contentOne, 


import { contents } from '../../Data/data';

export default function Content() {
    console.log(contents);
    return contents.map((item) => {
        return (
            <div>
                <div className="content">
                    <div className="content-info">
                        <div className="content-header">
                            <img src={item.avatar} />
                            <p> &nbsp; {item.authorName} <span> &nbsp; in &nbsp;</span> {item.topicsName} <span> &nbsp; · &nbsp; {item.date} </span></p>
                        </div>
                        <div className="content-body">
                            <p id="title">{item.header}</p>
                            <p id="summary">{item.content}</p>
                        </div>
                        <div className="content-footer">
                            <div className="content-footer-left">
                                <button id="button"> {item.language} </button>
                                <p id="readingTime">&nbsp; {item.duration} </p>
                                <p> &nbsp; · &nbsp; {item.intended} </p>
                            </div>
                            <div className="squares">
                                <div className="square"></div>
                                <div className="square"></div>
                                <div className="square"></div>
                            </div>
                        </div>
                    </div>
                    <img className="imgserver" src={item.img}/>
                </div>
            </div>
        );
    });
}