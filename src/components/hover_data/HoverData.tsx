import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import useData from "../../context/hooks/useData";

export default function HoveData() {
  const [{ hoverCounty, hoverStateName }] = useData();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX + 10, y: e.clientY + 10 });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  let name = hoverCounty || hoverStateName;
  if (!name) return null;

  return (
    <>
      {
        createPortal(
          <div
            style={{
              position: 'fixed',
              top: position.y,
              left: position.x,
              backgroundColor: 'white',
              padding: '5px',
              border: '1px solid black',
              fontSize: '10px',
              borderRadius: '5px',
              height: 'fit-content',
            }}
          >
            <>{name}</>
          </div>, document.body
        )
      }
    </>
  );
}
