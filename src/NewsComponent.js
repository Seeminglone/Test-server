import React, { useState, useEffect } from 'react';

const NewsComponent = () => {
  const [news, setNews] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    let interval;

    const fetchData = async () => {
      try {
        const response = await fetch('http://ec2-18-215-183-214.compute-1.amazonaws.com:8080/api/textile/all?size=DOUBLE');
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    if (isFetching) {
      interval = setInterval(fetchData, 2000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isFetching]);

  const handleStartFetching = () => {
    setIsFetching(true);
  };

  const handleFinishFetching = () => {
    setIsFetching(false);
  };

  return (
    <div>
      <h1>News</h1>
      {!isFetching && (
        <button onClick={handleStartFetching}>Start</button>
      )}
      {isFetching && (
        <button onClick={handleFinishFetching}>Finish</button>
      )}
      <ul>
        {news.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NewsComponent;