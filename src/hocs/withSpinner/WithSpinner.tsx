
import { FC, ReactElement, ReactNode, useState, useEffect } from 'react';

import { Spinner } from 'components';

interface IWithSpinner {
  isSpinnerShown: boolean;
  minTimeSpinnerShown?: number;
  children?: ReactNode;
}

const WithSpinner: FC<IWithSpinner> = ({ children, isSpinnerShown = false, minTimeSpinnerShown }): ReactElement => {
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    if (minTimeSpinnerShown) {
      if (isSpinnerShown && !showSpinner) {
        setShowSpinner(true);
        setTimeout(() => {
          setShowSpinner(false);
        }, minTimeSpinnerShown);
      }
    } else {
      setShowSpinner(isSpinnerShown);
    }
  }, [isSpinnerShown]);

  if (showSpinner) {
    return <Spinner />;
  }

  return (
    <>
      {children}
    </>
  );
};

export { WithSpinner };
