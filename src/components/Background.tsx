import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { currentAlert, currentProgram, programStatus } from "../store/useProgramStatus";
import { programs } from "../constants/desktopData";
import Program from "./Program";
import Alert from "./Alert";
import Icon from "./Icon";

function Background() {
  const [programArr, setProgramArr] = useRecoilState(programStatus);
  const [, setActiveProgram] = useRecoilState(currentProgram);
  const [activeAlert, setActiveAlert] = useRecoilState(currentAlert);

  useEffect(() => {
    const firstProgramTime = setTimeout(() => {
      clearTimeout(firstProgramTime);
      setProgramArr([...programArr, { program: programs.ABOUT_ME.ID, name: programs.ABOUT_ME.NANE, initialSize: { width: programs.ABOUT_ME.SIZE.width, height:  programs.ABOUT_ME.SIZE.height } }]);
      setActiveProgram(programs.ABOUT_ME.ID);
    }, 5000);

    return () => {
      clearTimeout(firstProgramTime);
    };
  }, []);

  return (
    <div className="Background">
      {Object.keys(programs).map((key) => {
        const item = programs[key as keyof typeof programs];
        return (
          <Icon type="application" key={item.ID} id={item.ID} name={item.NANE} desc={item.DESCRIPTION}/>
        );
      })}

      { programArr.map((prog, index) => (
        <Program
          key={prog.program}
          name={prog.name}
          programId={prog.program}
          layer={index}
          initialSize={prog.initialSize}
        />
      ))}
      { activeAlert.map((data, index) => (
        <Alert key={index} id={data.id} name={data.name} description={data.description}/> 
      ))}
    </div>
  );
}

export default Background;
