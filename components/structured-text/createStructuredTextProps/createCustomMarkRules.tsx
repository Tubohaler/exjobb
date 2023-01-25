import { renderMarkRule } from 'datocms-structured-text-generic-html-renderer';
import {
  StructuredTextGraphQlResponseRecord,
  StructuredTextPropTypes,
} from 'react-datocms';
import DefaultMarkRules from './defaults/DefaultMarkRules';
import {
  MarkRules,
  CreateStructuredTextPropsConfig,
  MarkRuleFn,
} from './types';

export default function createCustomMarkRules<
  R1 extends StructuredTextGraphQlResponseRecord,
  R2 extends StructuredTextGraphQlResponseRecord = R1
>(
  markRules?: Partial<MarkRules>,
  customMarkRules?: CreateStructuredTextPropsConfig['customMarkRules']
): StructuredTextPropTypes<R1, R2>['customMarkRules'] {
  const rules = !markRules
    ? DefaultMarkRules
    : { ...DefaultMarkRules, ...markRules };

  return Object.entries({ ...rules, ...(customMarkRules || {}) }).map(
    ([key, fn]) => renderMarkRule(key, fn as MarkRuleFn<typeof key>)
  );
}
