interface IconProps {
  type: string;
  id: string;
  name: string;
  desc: string;
}

function Icon({type, id, name, desc}: IconProps) {

  return (
    <button id={id} className={`appIcon ${type}`} title={desc}>
      <span className="iconImage"></span>
      <span className="iconName">{name}</span>
    </button>
  )
}

export default Icon;