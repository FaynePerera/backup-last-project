import * as Blocks from '@/blocks';
import NotMatching from './blocks/NotMatching';
import '@/lib/_fontawesome';

export default function Wrapper({ page }) {
  const toPascalCase = (str) => str.replace(/(^\w|-\w)/g, (m) => m.replace(/-/, '').toUpperCase());

  return (
    <>
      {page.components.map((component) => {
        const componentName = component.__typename === 'ComponentModel'
        && component.componentModelGlobalComponentAlias
          ? toPascalCase(component.componentModelGlobalComponentAlias.slug)
          : `${component.__typename}${component.info ? component.info.type ?? '' : ''}`;
        const Component = Blocks[componentName];

        if (!Component) {
          return (
            <NotMatching
              key={component.id}
              componentName={componentName}
              component={component}
            />
          );
        }

        return <Component key={component.id} page={page} {...component} />;
      })}
    </>
  );
}
