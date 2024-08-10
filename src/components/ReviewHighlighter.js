import React from 'react';
import Tooltip from './Tooltip';
import './ReviewHighlighter.css';

const getColorForSentiment = (sentiment) => {
    switch (sentiment) {
        case 'Positive':
            return '#D9F2DD';
        case 'Negative':
            return '#F2DBD9';
        case 'Mixed':
            return '#e8bd6d3d';
        case 'Neutral':
            return '#eaf09b6b';
        default:
            return 'transparent';
    }
};

const ReviewHighlighter = ({ review }) => {
    const { content, analytics } = review;

    const getHighlightedText = () => {
        let elements = [];
        let lastIndex = 0;

        analytics.forEach((item, i) => {
            const { sentences, sentiment, highlight_indices } = item;
            highlight_indices.forEach(([start, end]) => {
                if (start > lastIndex) {
                    elements.push(content.substring(lastIndex, start));
                }
                elements.push(
                    <span key={i} className="highlighted" style={{ backgroundColor: getColorForSentiment(sentiment) }}>
                        {content.substring(start, end)}
                        <Tooltip content={item.topic} />
                    </span>
                );
                lastIndex = end;
            });
        });

        if (lastIndex < content.length) {
            elements.push(content.substring(lastIndex));
        }

        return elements;
    };

    return (
        <div className="review">
            <h3>{review.reviewer_name}</h3>
            <p>{getHighlightedText()}</p>
            <div className="meta">
                <span>{review.date}</span>
                <span>{review.source.name}</span>
            </div>
        </div>
    );
};

export default ReviewHighlighter;
