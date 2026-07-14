import Header from './components/header.tsx';
import goalsImg from './assets/goals.jpg';
import CourseGoals from './components/CourseGoals.tsx';
import { useState } from 'react';
import NewGoals from './components/NewGoals.tsx';

function App() {
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: 'Learn TS',
      description: 'Learn TS from ground up.',
    },
    {
      id: 2,
      title: 'Practice TS',
      description: 'Practice working with TypeScript!',
    },
  ]);

  function handleDelete(id: number) {
    setGoals((prevGoals) => prevGoals.filter((g) => g.id !== id));
  }

  function handleAddGoal(text: string, summary: string) {
    setGoals((prevGoals) =>
      prevGoals.concat({
        id: Math.random(),
        title: text,
        description: summary,
      }),
    );
  }

  return (
    <>
      <main>
        <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
          <h1>Your Course Goals...</h1>
          <NewGoals onAdd={handleAddGoal}/>
        </Header>
        <CourseGoals goals={goals} onDelete={handleDelete} />
      </main>
    </>
  );
}

export default App;
