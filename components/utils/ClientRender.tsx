import React, { LazyExoticComponent } from 'react';
import useDidMount from '@hooks/useDidMount';
// const Test = React.lazy(() => import('@components/Test'));

type Props = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  withSuspense?: boolean;
};

/** Only render child nodes in client */
const ClientRender = ({
  children,
  fallback = null,
  withSuspense = false,
}: Props) => {
  const didMount = useDidMount();
  return (
    <>
      {!didMount ? (
        fallback
      ) : withSuspense ? (
        <React.Suspense fallback={fallback}>{children}</React.Suspense>
      ) : (
        children
      )}
    </>
  );
};

/** Use to create a component that only renders in client */
export function clientRender<
  P extends Record<string, unknown> = Record<string, unknown>
>(Component: (props: P) => JSX.Element, renderProps?: Omit<Props, 'children'>) {
  return (props: P) => (
    <ClientRender {...(renderProps || {})}>
      <Component {...props} />
    </ClientRender>
  );
}

export default ClientRender;
