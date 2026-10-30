import { useEffect, useRef, useState } from 'react'
import './SearchStudents.css'

function SearchStudents() {
  const inputRef = useRef(null)
      // const [studentName, setStudentName] = useState('')
  const [resultMessage, setResultMessage] = useState('')

  // Focus the input once after this component has mounted.
  useEffect(() => {
    inputRef.current.focus()
  }, [])

  function handleSearch(event) {
    event.preventDefault()

    const name = inputRef.current.value.trim()

    if (name === '') {
      setResultMessage('Please enter a student name.')
      // setStudentName('')
      return
    }

    // setStudentName(name)
    setResultMessage(`Result: You searched for ${name}.`);
  }
  function handleClear() {
    inputRef.current.value = ''
    //  setStudentName('')
    setResultMessage('')
    inputRef.current.focus()
  }

  return (
    <section className="search-students" aria-labelledby="search-students-title">
      <p className="search-students-kicker">DIRECTORY TOOL</p>
      <h2 id="search-students-title">Search Students</h2>

      <form className="search-students-form" onSubmit={handleSearch}>
        <label className="search-students-label" htmlFor="search-student-name">
          Student Name
        </label>

        <input
          ref={inputRef}
          id="search-student-name"
          className="search-students-input"
          type="text"
          placeholder="Enter student name..."
        />

        <div className="search-students-actions">
          <button className="search-students-button" type="submit">
            Search
          </button>
          <button
            className="search-students-clear"
            type="button"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </form>

      <p className="search-students-result" role="status" aria-live="polite">
        {resultMessage}
      </p>
    </section>
  )
}

export default SearchStudents

