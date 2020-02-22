import React from 'react';

const NewsThumbnail = (props) => {
    if (props.image && props.image !== 'null') {
        return <img src={'http://localhost:8000' + '/uploads/' + props.image} className="News_image" alt={props.title} />;
    } else {
        return null;
    }
};

export default NewsThumbnail;