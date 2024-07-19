import { useEffect, useState } from 'react';
import '../style/Booting.scss'
import bootLogo1 from '../assets/images/bootLogo1.png'
import { systemState } from '../store/useSystemStatus';
import { useRecoilState } from 'recoil';

interface GPUInfo {
  vendor: string;
  renderer: string;
}

function Booting() {
  const [, setSystemStatus] = useRecoilState(systemState);
  const [showLines, setShowLines] = useState(false);

  useEffect(() => {
    const $bootScreen = document.querySelector('.bootScreen');
    $bootScreen?.classList.add('loaded');

    const timer = setTimeout(() => {
      setShowLines(true);
    }, 1000);

    setTimeout(()=>{
      setSystemStatus('loading')
    },15000)

    return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머 클리어
  }, []);

  useEffect(() => {
    if (showLines) {
      linesShow(); 
    }
  }, [showLines]);

  function linesShow() {
    const $colMiddle = document.querySelector('.colMiddle');
    const $middlebiosLines = $colMiddle?.querySelectorAll('.biosLine');

    $middlebiosLines?.forEach((line, index) => {
      setTimeout(() => {
        line.classList.add('show');
      }, index * 500);
    });
  }
  
  function getOSInfo(): string {
    const userAgent = window.navigator.userAgent;
    const platform = window.navigator.platform;
    const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
    const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
    const iosPlatforms = ['iPhone', 'iPad', 'iPod'];
    let os: string | null = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows';
    } else if (/Android/.test(userAgent)) {
      os = 'Android';
    } else if (/Linux/.test(platform)) {
      os = 'Linux';
    }

    return os || 'Unknown';
  }

  function getCPUInfo(): number {
    return window.navigator.hardwareConcurrency;
  }

  function getRAMInfo(): string {
    return window.navigator.deviceMemory ? `${window.navigator.deviceMemory} GB` : 'Not available';
  }

  function getGPUInfo(): GPUInfo | string {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') as WebGLRenderingContext | null
              || canvas.getContext('experimental-webgl') as WebGLRenderingContext | null;
    if (!gl) {
      return 'WebGL not supported';
    }

    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    if (!debugInfo) {
      return 'WEBGL_debug_renderer_info not available';
    }

    const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) as string;
    const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) as string;
    return { vendor, renderer };
  }

  const gpuInfo = getGPUInfo();

  function getDate() {
    let today = new Date();   
    let date = today.toLocaleDateString('en-US')

    return date
  }

  function enterPress() {
    document.documentElement.requestFullscreen()
    setSystemStatus('loading')
  }

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter') enterPress()
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [setSystemStatus]);

  return (
    <section className='bootScreen'>
      <h1 className='blind'>girgir portfolio</h1>
      <div className='screenInner'>
        <div className='colheader'>
          <img src={bootLogo1} alt="american megatrends logo" />
        </div>
        <div className='colTop'>
          <p className='biosLine'>Copyright (c) 2024 GIRGIR PORTFOLIO, Released 16/7/2024</p>

        </div>
        <div className='colMiddle'>
        {showLines && (
          <>
            <p className='biosLine'>System initializing...</p>
            <p className='biosLine'></p>
            <p className='biosLine'>Operating Systems: <b>{getOSInfo()}</b></p>
            <p className='biosLine'>Main Processor cores: <b>{getCPUInfo()} cores</b></p>
            <p className='biosLine'>Memory Testing: <b>{getRAMInfo()} { getRAMInfo() !== 'Not available' && `OK`}</b> </p>
            {typeof gpuInfo !== 'string' && (
              <>
                <p className='biosLine'>GPU Vendor: <b>{gpuInfo.vendor}</b></p>
                <p className='biosLine'>GPU Renderer: <b>{gpuInfo.renderer}</b></p>
              </>
            )}
            <p className='biosLine'>Detecting Device...</p>
            <p className='biosLine'></p>
            <p className='biosLine'></p>
            <div className='biosLine'>
              {/* <p className=''>This is an interactive web portfolio.</p>
              <p className=''>The world is wide, and there are many freak.</p> */}
              <p className='endLine'>Press <button id='enterPortfolio' onClick={enterPress} ><strong>&lt;Enter&gt;</strong></button> Key to Continue... </p>
            </div>
          </>
        )}
        </div>
        <div className='colBottom'>
          <p className='biosLine'>Press <strong>&lt;DEL&gt;</strong> to Not enter Setup, <strong>&lt;ALT&gt;</strong> + <strong>&lt;F2&gt;</strong> to Nothing is happening.</p>
          <p className='biosLine'>(c)GIRGIR {getDate()}-WJFMF-SHGCLWL-AKTPDY-0_0</p>
        </div>
      </div>
    </section>
  );
}

export default Booting;