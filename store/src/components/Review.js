import React, { useState } from 'react';

function Review({ review }) {
  return (
    <div className="review">
      <p>{review}</p>
    </div>
  );
}

function ReviewForm({ onSubmit }) {
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!review.trim()) return;
    onSubmit(review);
    setReview('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Оставьте ваш отзыв"
        required
      />
      <button type="submit">Отправить</button>
    </form>
  );
}

export { Review, ReviewForm };
