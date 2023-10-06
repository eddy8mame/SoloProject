import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export default function Draggable(props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    // need to provide a unique id attr to all draggable componenets 
    id: props.id,
  }); 

  const style = {transform: CSS.Translate.toString(transform)}


  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  );
}