import {useSelector, useDispatch} from 'react-redux'
import { JobPosition } from './JobPosition';
import { selectVisiblePositions } from 'store/positions/position-selectors';
import {addFilter} from 'store/filters/filters-actions';
import { selectorFilters } from 'store/filters/filters-selectors';
const JobList = () => {
  const dispatch = useDispatch();

  const currentFilter = useSelector(selectorFilters);
  const position = useSelector((state) => selectVisiblePositions(state, currentFilter));
  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter))
  }

  return (
    <div className='job-list'>
      {position.map(item => (
        <JobPosition 
          key={item.id} 
          {...item} 
          handleAddFilter={handleAddFilter}
          />
      ))}
    </div>
  )
}

export {JobList};