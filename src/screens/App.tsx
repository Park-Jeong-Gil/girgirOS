import { useRecoilState } from 'recoil';
import { systemState} from '../store/useSystemStatus';
import '../style/style..scss'
import Booting from './Booting';
import DeskTop from './Desktop';
import Loading from './Loading'

const App = () => {
  const [systemStatus] = useRecoilState(systemState);

  return (
    <>
      {systemStatus === 'booting' && <Booting />}
      {systemStatus === 'loading' && <Loading />}
      {systemStatus === 'desktop' && <DeskTop />}
    </>
  );
};

export default App;