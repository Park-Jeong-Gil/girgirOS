import { useEffect, useState } from 'react';
import bootLogo1 from '../assets/images/common/bootLogo1.png';
import { soundState, systemState } from '../store/useSystemStatus';
import { useRecoilState } from 'recoil';

interface GPUInfo {
  vendor: string;
  renderer: string;
}

function Booting() {
  const [, setSystemStatus] = useRecoilState(systemState);
  const [, setsoundState] = useRecoilState(soundState);
  const [showLines, setShowLines] = useState(false);
  const [autoTimer, setAutoTimer] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    console.log(`=================================================================================================
   .aMMMb  .aMMMb  dMMMMb  dMMMMMP        .aMMMMP dMMMMb  .aMMMb  dMMMMb  dMP dMP dMMMMMP dMMMMb 
  dMP"VMP dMP"dMP dMP VMP dMP            dMP"    dMP.dMP dMP"dMP dMP.dMP dMP dMP dMP     dMP.dMP 
 dMP     dMP dMP dMP dMP dMMMP          dMP MMP"dMMMMK" dMMMMMP dMMMMP" dMMMMMP dMMMP   dMMMMK"  
dMP.aMP dMP.aMP dMP.aMP dMP            dMP.dMP dMP"AMF dMP dMP dMP     dMP dMP dMP     dMP"AMF   
VMMMP"  VMMMP" dMMMMP" dMMMMMP         VMMMP" dMP dMP dMP dMP dMP     dMP dMP dMMMMMP dMP dMP    
=================================================================================================
 📞 010-4468-7412
 📧 wjdrlf5986@naver.com
  `);
  
    const $bootScreen = document.querySelector('.bootScreen');
    $bootScreen?.classList.add('loaded');

    const timer = setTimeout(() => {
      setShowLines(true);
    }, 1000);

    const autoBootingTimer = setTimeout(() => {
      if (autoTimer && !isMobile) {
        setSystemStatus('loading');
      }
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearTimeout(autoBootingTimer);
    };
  }, [autoTimer, isMobile, setSystemStatus]);

  useEffect(() => {
    if (showLines) {
      linesShow(); 
    }
  }, [showLines]);

  useEffect(() => {
    // Check if the device is mobile or not
    const userAgent = window.navigator.userAgent;
    const mobileDevices = ['Android', 'iPhone', 'iPad', 'iPod'];
    const isMobileDevice = mobileDevices.some(device => userAgent.includes(device));
    setIsMobile(isMobileDevice);
  }, []);

  function linesShow(): void {
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
    let date = today.toLocaleDateString('en-US');
    return date;
  }

  function enterPress() {
    document.documentElement.requestFullscreen();
    setAutoTimer(false);
    if (!isMobile) {
      setSystemStatus('loading');
    }
    setsoundState(true);
  }

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter') enterPress();
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
              <p className='biosLine'>Memory Testing: <b>{getRAMInfo()} {getRAMInfo() !== 'Not available' && `OK`}</b></p>
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
                {isMobile ? 
                <p className=' isMobile'>모바일 페이지는 아직 준비중 입니다. PC로 확인 부탁 드리겠습니다.</p> :
                <p className='endLine'>Press <button id='enterPortfolio' onClick={enterPress} ><strong>&lt;Enter&gt;</strong></button> Key to Continue... </p>
                }
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
