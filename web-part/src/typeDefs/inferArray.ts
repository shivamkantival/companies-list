export type ReadonlyArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends (infer ElementType)[] ? ElementType : never;
