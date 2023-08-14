import Button from 'react-bootstrap/Button';

export default function CustomButton({
  btpClass,
  size,
  label,
  url,
  action
}) {
  let variant = 'primary';
  const classes = btpClass.split(' ');
  const expectedOutline = 'outline';
  const expectedButton = 'btn';

  for (let i = 0; i < classes.length; i++) {
    const intermediateClasses = classes[i].split('-');

    if (intermediateClasses.length) {
      const foundOutline = intermediateClasses.find(
        (intermediateClass) => intermediateClass === expectedOutline
      );
      const foundBtn = intermediateClasses.find(
        (intermediateClass) => intermediateClass === expectedButton
      );

      if (foundOutline) {
        const index = intermediateClasses.findIndex(
          (intermediateClass) => intermediateClass === expectedOutline
        );
        variant = `outline-${intermediateClasses[index + 1]}`;
      } else if (foundBtn) {
        const index = intermediateClasses.findIndex(
          (intermediateClass) => intermediateClass === expectedButton
        );
        variant = `${intermediateClasses[index + 1]}`;
      }
    }
  }
  return (
    <>
      {url && size && (
        <Button
          variant={variant}
          size={size}
          href={url}
          target="_blank"
        >
          {label}
        </Button>
      )}
      {!url && size && (
        <Button variant={variant} size={size}>
          {label}
        </Button>
      )}
      {url && !size && (
        <Button variant={variant} href={url} target="_blank">
          {label}
        </Button>
      )}
      {!url && action && (
        <Button variant={variant} onClick={action}>
          {label}
        </Button>
      )}
      {!url && !action && !size && (
        <Button variant={variant}>
          {label}
        </Button>
      )}
    </>
  );
}
