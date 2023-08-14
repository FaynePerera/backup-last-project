import shapes from '@/lib/_shapes';

export default function Shape({ shapeNameAlias, info }) {
  const shape = shapes.find((s) => s.name === shapeNameAlias);
  return (
    <div>
      {shape && (
        <div className="position-relative">
          <div className={info.class}>{shape.shape}</div>
        </div>
      )}
    </div>
  );
}
