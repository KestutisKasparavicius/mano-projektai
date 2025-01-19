let keyT: number = 1;

export default function key() {
  const getKey = () => keyT;
  const upKey = () => keyT++;

  return {getKey, upKey};
}
