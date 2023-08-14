export default function Overlay() {
  return (
    <div
      style={{
        opacity: '0.4',
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: '-1'
      }}
      className="bg-black"
    />
  );
}
