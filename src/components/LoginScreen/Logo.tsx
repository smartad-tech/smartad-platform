import { ImageProps, chakra, forwardRef } from "@chakra-ui/react"
import logo from './logo.svg'

export const Logo = forwardRef<ImageProps, 'img'>((props, ref) => {
    // const prefersReducedMotion = usePrefersReducedMotion()
  
    // const animation = prefersReducedMotion
    //   ? undefined
    //   : `${spin} infinite 20s linear`
  
    return <chakra.img src={logo} ref={ref} {...props} />
  })