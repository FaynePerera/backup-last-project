export default function Background({ image }) {
  return (
    <div
      style={{
        backgroundImage: `url(${image.url})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: '-1'
      }}
    />
  );
}
