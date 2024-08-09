import { useState } from "react";

class Anecdote {
  constructor(text, votes = 0) {
    this.text = text;
    this.votes = votes;
  }
  vote() {
    this.votes++;
  }
  getVotes() {
    return this.votes;
  }
  getText() {
    return this.text;
  }
}

const App = () => {
  const initialAnecdotes = [
    new Anecdote("If it hurts, do it more often."),
    new Anecdote("Adding manpower to a late software project makes it later!"),
    new Anecdote("The first 90 percent of the code accounts for the first 90 percent of the development time...\n The remaining 10 percent of the code accounts for the other 90 percent of the development time."),
    new Anecdote("Any fool can write code that a computer can understand. Good programmers write code that humans can understand."),
    new Anecdote("Premature optimization is the root of all evil."),
    new Anecdote("Debugging is twice as hard as writing the code in the first place. \n Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."),
    new Anecdote("Programming without an extremely heavy use of console.log \n is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients."),
    new Anecdote("The only way to go fast, is to go well."),
  ];

  const [anecdotes, setAnecdotes] = useState(initialAnecdotes);
  const [selected, setSelected] = useState(0);
  const [mostVoted, setMostVoted] = useState(anecdotes[0]);

  const handleVote = () => {
    const newAnecdotes = [...anecdotes];
    newAnecdotes[selected].vote();
    setAnecdotes(newAnecdotes);

    if (newAnecdotes[selected].getVotes() > mostVoted.getVotes()) {
      setMostVoted(newAnecdotes[selected]);
    }
  };

  const handleNextAnecdote = () => {
    setSelected((selected + 1) % anecdotes.length);
  };

  return (
    <>
      <section className="flex flex-col items-center">
        <div className="flex max-w-xl flex-col items-center pb-4 pt-4 text-center lg:pb-12 lg:pt-16">
          <p className="mb-2 font-semibold text-neutral md:mb-4 md:text-lg xl:text-xl">
            Cool anecdotes of the day!
          </p>

          <div className="mockup-code mb-2" style={{ whiteSpace: 'pre-wrap' }}>
            <pre data-prefix="$">
              <code>{anecdotes[selected].getText()}</code>
            </pre>
            <pre data-prefix="$" className="bg-warning text-warning-content">
              <code>Votes: {anecdotes[selected].getVotes()}</code>
            </pre>
          </div>

          <div className="flex w-full flex-col gap-2 sm:flex-row sm:justify-center">
            <button className="btn btn-primary" onClick={handleVote}>Vote</button>
            <button className="btn btn-neutral" onClick={handleNextAnecdote}>Next anecdote</button>
          </div>
        </div>
        <div className="flex max-w-xl flex-col items-center pb-4 pt-4 text-center lg:pb-12 lg:pt-8">
          <p className="mb-2 font-semibold text-accent md:mb-4 md:text-lg xl:text-xl">
            Most voted anecdote of the day
          </p>

          <div className="mockup-code mb-2" style={{ whiteSpace: 'pre-wrap' }}>
            <pre data-prefix="$">
              <code>{mostVoted.getText()}</code>
            </pre>
            <pre data-prefix="$" className="bg-warning text-warning-content">
              <code>Votes: {mostVoted.getVotes()}</code>
            </pre>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;