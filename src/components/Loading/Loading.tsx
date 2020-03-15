import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { StateCan } from '../../StateContainer/StateContainer';


const Loading = (props: any) => {
  const [progress, setProgress] = React.useState(0);
  const loadingState = StateCan.useContainer();


  
  React.useEffect(() => {
    function tick() {
      loadingState.getFetchingState();
      setProgress(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + 1));
    }

    const timer = setInterval(tick, 20);
    return () => {
      clearInterval(timer);

      loadingState.stopFetching();
    };
  }, [loadingState]);

  return (
      <CircularProgress variant="determinate" value={progress} color="secondary" />
  );
}

export default Loading;