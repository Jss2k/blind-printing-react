import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchResultsStart } from './../../redux/Results/results.action'

import './styles.scss'

const mapState = ({ user, resultsData }) => ({
  results: resultsData.results,
  currentUser: user.currentUser
})

const Resultspage = props => {
  const { results, currentUser } = useSelector(mapState)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      fetchResultsStart()
    )
  }, [])

  return (
    <section className="results-page">
      <div className="main">
        <h1 className="title">Last 10 Results</h1>
        <div className="results-table">
        <table border="0" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>
              <td>
                <table className="results" border="0" cellPadding="10" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td>
                        №
                       </td>
                        <td>
                          Accuracy
                        </td>
                        <td>
                          Gross WPM
                        </td>
                        <td>
                          Net WPM
                        </td>
                      </tr>
                    {results.map((result, index) => {
                      const {
                        netWPM,
                        grossWPM,
                        accuracy,
                        resultUserUID
                      } = result;
                      if (currentUser.id === resultUserUID) 
                      return (
                        <tr key={index}>
                          <td>
                            {index + 1}
                          </td>
                          <td>
                            {accuracy}
                          </td>
                          <td>
                            {grossWPM}
                          </td>
                          <td>
                            {netWPM}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </section>
  )
}

export default Resultspage