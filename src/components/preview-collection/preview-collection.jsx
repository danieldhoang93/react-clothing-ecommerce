import React from 'react';
import './preview-collection.scss';
import CollectionItem from '../collection-item/collection-item.jsx'

const PreviewCollection = ({title, items}) => (
    <div className='collection-preview'>
        <h1>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                //only show 4 items at a time
                items
                .filter((item, index) => index < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item}></CollectionItem>
                ))
            }
        </div>
    </div>
)

export default PreviewCollection;