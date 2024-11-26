import Spinner from "@/components/ui/Spinner";
import React, { Suspense } from "react";

export const lazyLoad = (importFunc) => {
  const LazyComponent = React.lazy(importFunc);
  return (
    <Suspense fallback={<Spinner />}>
      <LazyComponent />
    </Suspense>
  );
};
