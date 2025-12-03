// Usually styling properties are defined in the container
function Container({children}) {
  return <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>;
}

export default Container