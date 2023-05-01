import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";


interface Props {
  onClick: () => void;
}


const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(false);
    onClick();
  }

  if (status)
    return (
      <AiFillHeart onClick={toggle} color="#ff6b81" size={40} />
    );
  return (
    <AiOutlineHeart onClick={toggle} color="#ff6b81" size={40} />
  );
};

export default Like;
