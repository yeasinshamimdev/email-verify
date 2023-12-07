import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import GridListBox from './GridBoxList';
import GridTableList from './GridTableList';
import NewList from './NewList';

const Bulk = () => {
  const [isListMode, setIsListMode] = useState<string>('gridList');
  return (
    <>
      <Helmet>
        <title>Bulk List | Email Validation</title>
      </Helmet>
      <div className="py-4">
        <NewList isListMode={isListMode} setIsListMode={setIsListMode} />
        <div>
          {isListMode === 'gridList' ? <GridListBox /> : <GridTableList />}
        </div>
      </div>
    </>
  );
};

export default Bulk;
