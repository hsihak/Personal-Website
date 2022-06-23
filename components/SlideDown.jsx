import { Transition } from '@headlessui/react'; // Tailwind Headless UI for Transition

const SlideDown = ({ children, isShowing }) => {
  return (
    <>
      <Transition
        show={isShowing}
        enter='transition-opacity duration-1000'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity duration-500'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'>
        {children}
      </Transition>
    </>
  );
};

export default SlideDown;
