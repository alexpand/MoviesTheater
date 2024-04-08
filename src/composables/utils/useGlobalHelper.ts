import { useWindowScroll } from '@vueuse/core'

export default function useGlobalHelper() {
  const { y } = useWindowScroll()

  function scrollUp() {
    y.value = 0
  }

  return {
    scrollUp
  }
}
