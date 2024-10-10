import React, { Suspense } from 'react'

interface State {
  hasError: boolean
}

const SuspenseWithChunkError = (props: JSX.IntrinsicAttributes & React.SuspenseProps): JSX.Element => {
  const [state, setState] = React.useState<State>({ hasError: false })

  React.useEffect(() => {
    if (state.hasError) {
      setState({ hasError: false })
    }
  }, [state.hasError])

  return (
    <Suspense fallback={<div>Loading...</div>} {...props}>
      {state.hasError ? <div>Error!</div> : props.children}
    </Suspense>
  )
}

export default SuspenseWithChunkError
