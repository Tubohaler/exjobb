import type {
  StructuredTextGraphQlResponseRecord,
  StructuredTextPropTypes,
} from 'react-datocms';

import type { CreateStructuredTextPropsConfig } from './types';
import createRenderBlock from './createRenderBlock';
import createRenderInlineRecord from './createRenderInlineRecord';
import createCustomNodeRules from './createCustomNodeRules';
import createCustomMarkRules from './createCustomMarkRules';

export * from './types';

export default function createStructuredTextProps<
  R1 extends StructuredTextGraphQlResponseRecord,
  R2 extends StructuredTextGraphQlResponseRecord = R1
>(
  config?: CreateStructuredTextPropsConfig
): Partial<StructuredTextPropTypes<R1, R2>> {
  return {
    renderBlock: createRenderBlock<R1, R2>(config?.blockComponents),
    renderInlineRecord: createRenderInlineRecord<R1, R2>(
      config?.inlineComponents
    ),
    customNodeRules: createCustomNodeRules<R1, R2>(config?.nodeRules),
    customMarkRules: createCustomMarkRules<R1, R2>(
      config?.markRules,
      config?.customMarkRules
    ),
  };
}
