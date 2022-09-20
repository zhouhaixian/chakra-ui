import { chakra, forwardRef, HTMLChakraProps } from "@chakra-ui/system"
import { cx } from "@chakra-ui/utils"
import { useSliderContext, useSliderStyles } from "./slider"

export interface SliderThumbProps extends HTMLChakraProps<"div"> {}

/**
 * Slider component that acts as the handle used to select predefined
 * values by dragging its handle along the track
 */
export const SliderThumb = forwardRef<SliderThumbProps, "div">((props, ref) => {
  const { getThumbProps } = useSliderContext()
  const styles = useSliderStyles()
  const thumbProps = getThumbProps(props, ref)

  return (
    <chakra.div
      {...thumbProps}
      className={cx("chakra-slider__thumb", props.className)}
      __css={styles.thumb}
    />
  )
})

SliderThumb.displayName = "SliderThumb"
