import { useState } from "react";

const Statistics = (props) => {
  const good = props.good;
  const neutral = props.neutral;
  const bad = props.bad;

  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = (good / total) * 100;

  if (total === 0) {
    return (
      <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
        <p className="text-2xl font-bold text-error">No feedback given 😢</p>
      </div>
    );
  }

  return (
    <>
      <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center stats shadow">
        <div className="flex flex-col items-center gap-4 stat">
          <h2 className="text-2xl font-bold text-primary stat-title">Good</h2>
          <p className="text-2xl font-bold text-primary stat-value">{good}</p>
        </div>
        <div className="flex flex-col items-center gap-4 stat">
          <h2 className="text-2xl font-bold text-neutral stat-title">Neutral</h2>
          <p className="text-2xl font-bold text-neutral stat-value">{neutral}</p>
        </div>
        <div className="flex flex-col items-center gap-4 stat">
          <h2 className="text-2xl font-bold text-secondary stat-title">Bad</h2>
          <p className="text-2xl font-bold text-secondary stat-value">{bad}</p>
        </div>
        <div className="flex flex-col items-center gap-4 stat">
          <h2 className="text-2xl font-bold text-accent stat-title">All</h2>
          <p className="text-2xl font-bold text-accent stat-value">{total}</p>
        </div>
        <div className="flex flex-col items-center gap-4 stat">
          <h2 className="text-2xl font-bold text-info stat-title">Average</h2>
          <p className="text-2xl font-bold text-info stat-value">{average.toFixed(2)}</p>
        </div>
        <div className="flex flex-col items-center gap-4 stat">
          <h2 className="text-2xl font-bold text-success stat-title">Positive</h2>
          <p className="text-2xl font-bold text-success stat-value">{positive.toFixed(2)} %</p>
        </div>
      </div>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
  };



  return (
    <>
      <section className="flex flex-col items-center">
        <div className="flex max-w-xl flex-col items-center pb-8 pt-4 text-center lg:pb-12 lg:pt-8">
          <h1 className="mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl text-neutral">
            Give Feedback
          </h1>

          <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
            <button className="btn btn-primary" onClick={handleGood}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Good
            </button>
            <button className="btn btn-neutral" onClick={handleNeutral}>
              Neutral
            </button>
            <button className="btn btn-secondary" onClick={handleBad}>
              Bad
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center pb-8 pt-4 text-center lg:pb-12 lg:pt-8">
          <h1 className="mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl text-neutral">
            Statistics
          </h1>
          <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
      </section>
    </>
  );
};

export default App;