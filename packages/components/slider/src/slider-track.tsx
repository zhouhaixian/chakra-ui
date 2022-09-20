import { chakra, forwardRef, HTMLChakraProps } from "@chakra-ui/system"
import { cx } from "@chakra-ui/utils"
import { useSliderContext, useSliderStyles } from "./slider"

export interface SliderTrackProps extends HTMLChakraProps<"div"> {}

export const SliderTrack = forwardRef<SliderTrackProps, "div">((props, ref) => {
  const { getTrackProps } = useSliderContext()
  const styles = useSliderStyles()
  const trackProps = getTrackProps(props, ref)

  return (
    <chakra.div
      {...trackProps}
      className={cx("chakra-slider__track", props.className)}
      __css={styles.track}
    />
  )
})

SliderTrack.displayName = "SliderTrack"
