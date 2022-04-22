import {useSelector} from 'react-redux'
import { JobPosition } from './JobPosition';
import { selectAllPositions } from 'store/positions/position-selectors';
const JobList = () => {
  const position = useSelector(selectAllPositions);
  return (
    <div className='job-list'>
      {position.map(item => (
        <JobPosition key={item.id} {...item} />
      ))}
    </div>
  )
}

export {JobList};