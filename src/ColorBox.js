export function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    width: "150px",
    height: "25px",
    marginTop: "10px",
  };
  return <div style={styles}></div>;
}
