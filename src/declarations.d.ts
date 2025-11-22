declare module 'react-dom/client' {
  const createRoot: (container: Element | DocumentFragment) => {
    render: (children: unknown) => void
    unmount: () => void
  }

  export { createRoot }
}


