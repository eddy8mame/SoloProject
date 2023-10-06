import { useDroppable } from "@dnd-kit/core";

export default function Droppable(props) {
  // when a draggable element is moved over droppable element, isOver property will become true, 
  // when is over is true, the color will become green
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });

  const style = { color: isOver ? 'green' : undefined };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}