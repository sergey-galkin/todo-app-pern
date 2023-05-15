import React, { memo, useCallback } from 'react';
import css from './TH.module.css';

const TH = memo(({ columnName, orderColumn, orderDirection, sort }) => {
  const thClassNameArr = [css.container];
  thClassNameArr.push(css[[columnName]]);

  const triangleClassName = orderDirection === 'desc' ? css.rotated : '';

  const handleClick = useCallback(() => {
    sort(columnName);
  })

  return (
    <th className={thClassNameArr.join(' ')} onClick={handleClick}>
      <span className={css.caption}>{columnName}</span>
      {orderColumn === columnName &&
        <span className={triangleClassName}> &#9650; </span>
      }
    </th>
  )
})

export default TH;