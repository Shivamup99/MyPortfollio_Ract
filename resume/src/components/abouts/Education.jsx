import React from 'react'
import './edu.css'
const Education = () => {
  return (
    <div className='education'>
        <div className="education-content">
        <table className='table'>
            <thead>
                <tr>
                    <th>Degree</th>
                    <th>Department</th>
                    <th>Institute</th>
                    <th>Passing Year</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>B.tech</td>
                <td>Computer Science</td>
                <td>Lovely Professional University</td>
                <td>2017 - 2021</td>
            </tr>
            <tr>
                <td>HSC</td>
                <td>PCM</td>
                <td>Government Inter College</td>
                <td>2014 - 2016</td>
            </tr>
            <tr>
                <td>SSC</td>
                <td>Science</td>
                <td>Government Inter College</td>
                <td>2013 - 2014</td>
            </tr>
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default Education