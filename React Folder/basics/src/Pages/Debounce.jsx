import { useEffect, useState } from 'react'
import './Debounce.css'

const usersApiUrl = 'https://dummyjson.com/users'

function Debounce() {
 
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [retryCount, setRetryCount] = useState(0)

  const [searchText, setSearchText] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')

  const [selectedCity, setSelectedCity] = useState('all')
  const [sortOrder, setSortOrder] = useState('name-asc')

useEffect(() => {
    async function fetchUsers() {
        setLoading(true)
        setError('')
        try {
            const response = await fetch(usersApiUrl)
            if (!response.ok) {
                throw new Error(`Request Failed: ${response.status}`)
            }
            const data = await response.json()
            setUsers(data.users)
        } catch (error) {
            setError('Unable to load users. Please try again later.')
        } finally {
            setLoading(false)
        }
    }
    fetchUsers()
}, [retryCount])

useEffect(() => {
    const timer = setTimeout(() => {
        setDebouncedSearch(searchText)
    }, 500)

    return () => clearTimeout(timer)
}, [searchText])

const searchValues = debouncedSearch.trim().toLowerCase()
let result = users.filter(user => {
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase()
    const email = user.email.toLowerCase()
    return (
        fullName.includes(searchValues) || email.includes(searchValues)
    )
})

const cities=[ ...new Set(users.map(user => user.address.city)),].sort()

if (selectedCity !== 'all') {
    result = result.filter(
        (user) => user.address.city === selectedCity,
    )
}

const sortFeild = sortOrder.startsWith('email')
? 'email'
: 'name'

const sortDirection = sortOrder.endsWith('desc') 
? -1 
: 1

result=[...result].sort((first,second)=>{
    const firstValue = sortFeild === 'name' 
    ? `${first.firstName} ${first.lastName}`
    : first.email

    const secondValue = sortFeild === 'name'
    ? `${second.firstName} ${second.lastName}`
    : second.email

    return(
        firstValue.localeCompare(secondValue) * sortDirection
    )
})

function handleRetry() {
    setRetryCount((Count) => Count + 1)
}

function handleClearFilters() {
    setSearchText('')
    setDebouncedSearch('')
    setSelectedCity('all')
    setSortOrder('name-asc')
}
return (
    <section
      className="explorer-page"
      aria-labelledby="explorer-title"
    >
      {/* Header */}
      <header className="explorer-header">
        <div className="explorer-header-inner">
          <a
            className="explorer-brand"
            href="#student-explorer"
            aria-label="Student Explorer"
          >
            <span
              className="explorer-brand-mark"
              aria-hidden="true"
            >
              S
            </span>

            <span>Student Explorer</span>
          </a>

          <span className="explorer-header-note">
            API DATA / REACT PRACTICE
          </span>
        </div>
      </header>

      {/* Main Content */}
      <div className="explorer-content" id="student-explorer">

        {/* Introduction */}
        <div className="explorer-intro">
          <div>
            <p className="explorer-eyebrow">
              LEARN BY EXPLORING
            </p>

            <h2 id="explorer-title">
              Find your next connection.
            </h2>

            <p className="explorer-description">
              Search, filter, and sort a directory of students
              loaded from a public API.
            </p>
          </div>

          <div className="explorer-total" aria-live="polite">
            <strong>
              {loading ? '—' : users.length}
            </strong>

            <span>students loaded</span>
          </div>
        </div>


        {/* Search, Filter, and Sort Controls */}
        <div
          className="explorer-controls"
          aria-label="Student search and filters"
        >

          {/* Search */}
          <div className="explorer-search">
            <label htmlFor="student-search">
              Search students
            </label>

            <input
              id="student-search"
              type="search"
              value={searchText}
              onChange={(event) =>
                setSearchText(event.target.value)
              }
              placeholder="Search by name or email..."
            />

            <span className="explorer-hint">
              Results update after you stop typing.
            </span>
          </div>


          {/* City Filter */}
          <div className="explorer-select">
            <label htmlFor="city-filter">
              City
            </label>

            <select
              id="city-filter"
              value={selectedCity}
              onChange={(event) =>
                setSelectedCity(event.target.value)
              }
            >
              <option value="all">All Cities</option>

              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>


          {/* Sorting */}
          <div className="explorer-select">
            <label htmlFor="student-sort">
              Sort by
            </label>

            <select
              id="student-sort"
              value={sortOrder}
              onChange={(event) =>
                setSortOrder(event.target.value)
              }
            >
              <option value="name-asc">
                Name: A to Z
              </option>

              <option value="name-desc">
                Name: Z to A
              </option>

              <option value="email-asc">
                Email: A to Z
              </option>

              <option value="email-desc">
                Email: Z to A
              </option>
            </select>
          </div>


          {/* Clear Filters */}
          <button
            className="explorer-clear"
            type="button"
            onClick={handleClearFilters}
          >
            Clear filters
          </button>
        </div>


        {/* Student Results */}
        <div className="explorer-results">
            {/* Results Heading */}
          <div className="explorer-results-heading">
            <div>
              <p className="explorer-eyebrow">
                DIRECTORY
              </p>

              <h3>Student results</h3>
            </div>

            {!loading && !error && (
              <span
                className="explorer-result-count"
                aria-live="polite"
              >
                {result.length}{' '}
                {result.length === 1 ? 'result' : 'results'}
              </span>
            )}
          </div>


          {/* Loading State */}
          {loading ? (
            <p
              className="explorer-message"
              role="status"
            >
              Loading students...
            </p>
          ) : error ? (

            /* Error State */
            <div
              className="explorer-message explorer-error"
              role="alert"
            >
              <p>{error}</p>

              <button
                type="button"
                onClick={handleRetry}
              >
                Try again
              </button>
            </div>
          ) : result.length === 0 ? (

            /* Empty Results State */
            <p
              className="explorer-message"
              role="status"
            >
              No matching students. Try another search or city.
            </p>
          ) : (

            /* Student Cards */
            <div className="explorer-grid">
              {result.map((user) => (
                <article
                  className="explorer-card"
                  key={user.id}
                >

                  {/* Card Header */}
                  <div className="explorer-card-top">
                    <span
                      className="explorer-avatar"
                      aria-hidden="true"
                    >
                      {user.firstName.charAt(0)}
                    </span>

                    <span className="explorer-student-id">
                      STUDENT {String(user.id).padStart(2, '0')}
                    </span>
                  </div>


                  {/* Student Name */}
                  <h4>
                    {user.firstName} {user.lastName}
                  </h4>


                  {/* Student Email */}
                  <a
                    className="explorer-email"
                    href={`mailto:${user.email}`}
                  >
                    {user.email}
                  </a>


                  <div className="explorer-card-divider" />


                  {/* Student Details */}
                  <div className="explorer-card-details">

                    <p>
                      <span>City</span>
                      <strong>
                        {user.address.city}
                      </strong>
                    </p>

                    <p>
                      <span>Company</span>
                      <strong>
                        {user.company.name}
                      </strong>
                    </p>

                  </div>
                </article>
              ))}
            </div>
          )}
        </div>


        {/* Footer */}
        <footer className="explorer-footer">
          Sample directory data provided by DummyJSON.
        </footer>

      </div>
    </section>
  )
}

export default Debounce
