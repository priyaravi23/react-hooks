import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function App() {
    const [reviews, setReviews] = useState([]);
    const [filteredReviews, setFilteredReviews] = useState([]);

    useEffect(() => {
        axios('https://brees-app.herokuapp.com/reviews?page=1')
            .then(res =>
                res.data.map(review => ({
                    points: `${review.points}`,
                    title: `${review.title}`,
                    description: `${review.description}`,
                    taster_name: `${review.taster_name}`,
                    taster_twitter_handle: `${review.taster_twitter_handle}`,
                    price: `${review.price}`
                }))
            )
            .then(data => {
                setReviews(data);
                setFilteredReviews(data);
            })
    }, []);

    const renderHeadings = reviews.map(review => {
        const ths = Object
            .keys(review)
            .map(key => key.replace(/_/g, ' '))
            .map(key =>
                <th key={key}>
                    {key}
                </th>);

        return (<tr>
            {ths}
        </tr>);
    });

    const renderRows = reviews.map(review => {
        const tds = Object
            .values(review)
            .map(val => <td key={val}>{val}</td>);

        return (<tr>
            {tds}
        </tr>);
    });


    return (
        <div>
            <table id='wineReviews'>
                <thead>
                {renderHeadings}
                </thead>

                <tbody>
                {renderRows}
                </tbody>
            </table>
        </div>
    )
}