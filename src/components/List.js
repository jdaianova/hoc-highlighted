import Article from "./Article";
import Video from "./Video";
import { nanoid } from 'nanoid';
import hightlighted from "./hightlighted";

const HightlightedVideo = hightlighted(Video);
const HightlightedArticle = hightlighted(Article);

function List(props) {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <HightlightedVideo key={nanoid()} {...item} />
                );

            case 'article':
                return (
                    <HightlightedArticle key={nanoid()} {...item} />
                );
        }
    });
};

export default List;