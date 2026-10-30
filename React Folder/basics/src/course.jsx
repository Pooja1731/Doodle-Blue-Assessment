const courses = [
  { id: 'html', title: 'HTML & CSS', level: 'Beginner' },
  { id: 'js', title: 'JavaScript', level: 'Beginner' },
  { id: 'react', title: 'React', level: 'Intermediate' },
];

function CourseCard({ title, level }) {
  return <article><h3>{title}</h3><p>{level}</p></article>;
}

export default function App() {
  return (
    <main>
      <h1>Courses</h1>
      {courses.map((course) => (<CourseCard key={course.id} title={course.title} level={course.level}/>
      ))}
    </main>
  );
}