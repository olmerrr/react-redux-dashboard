import { useSelector, useDispatch } from 'react-redux';
import { selectorFilters } from 'store/filters/filters-selectors';
import { removeFilter, clearFilter } from 'store/filters/filters-actions';
import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';

const FilterPanel = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectorFilters);
  if (currentFilters.length === 0) return null;

  return (
    <Card className='filter-panel'>
      <div className='filter-panel-wrapper'>
        <Stack>
          {currentFilters.map((filter) => (
            <Badge 
              variant='clearable' 
              key={filter}
              onClear = {() => dispatch(removeFilter(filter))}
              >
              {filter}
            </Badge>
          ))}
        </Stack>

        <button 
          className='link'
          onClick={() => dispatch(clearFilter)}
          >Clear All</button>
      </div>
    </Card>
  );
};

export { FilterPanel };
